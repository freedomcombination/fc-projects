import { isValidPhoneNumber } from 'react-phone-number-input'

import { z } from 'zod'

export const useApplicationFormSchema = (isUnder18: boolean) => {
  return z.object({
    acceptConditions: z.boolean().refine((value) => value, {
      message: 'You must accept the conditions',
    }),
    acceptEventConditions: z.boolean().refine((value) => value, {
      message: 'You must accept the event conditions',
    }),
    acceptParent: z.boolean(),
    city: z.string().min(1, 'City is required'),
    dateOfBirth: z.string().min(1, 'Date of birth is required'),
    email: z.string().email('Invalid email format'),
    event: z.string().min(1, 'Event is required'),
    fullName: z.string().min(1, 'Full name is required'),
    phone: z.string().refine(isValidPhoneNumber, 'Invalid phone number format'),
    ...(isUnder18 && {
      acceptParent: z.boolean().refine((value) => value, {
        message: 'You must accept the parent conditions',
      }),
      otherParticipation: z.string(),
      parentEmail: z.string().email('Invalid parent email format'),
      parentFullName: z.string(),
      parentPhone: z.string().refine(isValidPhoneNumber, 'Invalid parent phone number format'),
      participationType: z.string().min(1, 'Participation type is required'),
    }),
  })
}

export type ApplicationFormData = z.infer<ReturnType<typeof useApplicationFormSchema>>
