import React from 'react'
import { ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@fc/ui/base/form'
import { PhoneInput } from '@fc/ui/base/phone-input'

type FormPhoneInputProps<T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>> = {
  description?: string
  label?: string
  name: N
} & Pick<ControllerProps<T, N>, 'disabled'> &
  React.ComponentProps<typeof PhoneInput>

export const FormPhoneInput = <T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>>({
  className,
  description,
  disabled,
  label,
  name,
  required,
}: FormPhoneInputProps<T, N>) => {
  const form = useFormContext<T>()

  return (
    <FormField<T, N>
      control={form.control}
      disabled={disabled}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label}{' '}
              {required && (
                <span className="required">
                  * <span className="sr-only">(required)</span>
                </span>
              )}
            </FormLabel>
          )}
          <FormControl>
            <PhoneInput
              className={className}
              defaultCountry="NL"
              disabled={disabled}
              international
              onBlur={field.onBlur}
              onChange={field.onChange}
              value={field.value}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
