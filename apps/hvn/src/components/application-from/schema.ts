import { isValidPhoneNumber } from 'react-phone-number-input'

import { z } from 'zod'

const baseSchema = z.object({
  acceptConditions: z.boolean(),
  acceptParent: z.boolean().optional(),
  birthOfDate: z.date({
    invalid_type_error: 'Invalid date format',
    required_error: 'Date of birth is required',
  }),
  city: z.string().min(1, 'City is required'),
  email: z.string().email('Invalid email format'),
  event: z.string().min(1, 'Event is required'),
  fullName: z.string().min(1, 'Full name is required'),
  isUnder18: z.boolean(),
  parentEmail: z.string().email('Invalid parent email format').optional(),
  parentFullName: z.string().optional(),
  parentPhone: z.string().refine(isValidPhoneNumber, 'Invalid parent phone number format').optional(),
  phone: z.string().refine(isValidPhoneNumber, 'Invalid phone number format'),
})

export const applicationFormSchema = baseSchema.superRefine((data, ctx) => {
  if (data.isUnder18) {
    if (!data.parentFullName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Parent's full name is required for applicants under 18",
        path: ['parentFullName'],
      })
    }
    if (!data.parentEmail) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Parent's email is required for applicants under 18",
        path: ['parentEmail'],
      })
    }
    if (!data.parentPhone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Parent's phone number is required for applicants under 18",
        path: ['parentPhone'],
      })
    }
    if (!data.acceptParent) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Parent's acceptance is required for applicants under 18",
        path: ['acceptParent'],
      })
    }
  }

  if (!data.acceptConditions) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'You must accept the conditions',
      path: ['acceptConditions'],
    })
  }
})

export type ApplicationFormData = z.infer<typeof applicationFormSchema>
