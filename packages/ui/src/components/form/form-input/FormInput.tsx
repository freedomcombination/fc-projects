import React from 'react'
import { ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@fc/ui/base/form'
import { Input } from '@fc/ui/base/input'

type FormInputProps<T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>> = {
  description?: string
  label?: string | null
  name: N
} & Pick<ControllerProps<T, N>, 'disabled'> &
  React.ComponentProps<'input'>

export const FormInput = <T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>>({
  className,
  description,
  disabled,
  label,
  name,
  placeholder,
  required,
  type = 'text',
}: FormInputProps<T, N>) => {
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
            <Input className={className} disabled={disabled} placeholder={placeholder} type={type} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
