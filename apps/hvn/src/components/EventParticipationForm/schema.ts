import { isValidPhoneNumber } from 'react-phone-number-input'

import * as yup from 'yup'

export type EventParticipationFormData = {
  acceptConditions: boolean
  acceptEventConditions: boolean
  acceptParent?: boolean
  city: string
  dateOfBirth: string
  email: string
  event: string
  fullName: string
  message: string
  otherParticipation?: string | null
  parentEmail?: string
  parentFullName?: string
  parentPhone?: string
  participationType: string
  phone: string
}

export const useEventParticipationSchema = (isUnder18: boolean): yup.ObjectSchema<EventParticipationFormData> => {
  const base = {
    acceptConditions: yup.boolean().oneOf([true], 'You must accept the conditions'),
    acceptEventConditions: yup.boolean().oneOf([true], 'You must accept the event conditions'),
    acceptParent: yup.boolean(),
    city: yup.string().required('City is required'),
    dateOfBirth: yup.string().required('Date of birth is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    event: yup.string().required('Event is required'),
    fullName: yup.string().required('Full name is required'),
    message: yup.string().required('Message is required'),
    otherParticipation: yup.string().nullable(),
    participationType: yup.string().required('Participation type is required'),
    phone: yup
      .string()
      .required('Phone is required')
      .test('is-phone', 'Invalid phone number format', (value) => isValidPhoneNumber((value as string) || '')),
  }

  if (isUnder18) {
    return yup.object().shape({
      ...base,
      acceptParent: yup.boolean().oneOf([true], 'You must accept the parent conditions'),
      parentEmail: yup.string().email('Invalid parent email format').required('Parent email is required'),
      parentFullName: yup.string().required('Parent full name is required'),
      parentPhone: yup
        .string()
        .required('Parent phone is required')
        .test('is-phone', 'Invalid parent phone number format', (value?: unknown) =>
          isValidPhoneNumber(String(value || '')),
        ),
    }) as yup.ObjectSchema<EventParticipationFormData>
  }

  return yup.object().shape(base) as yup.ObjectSchema<EventParticipationFormData>
}
