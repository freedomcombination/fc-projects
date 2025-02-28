import React from 'react'
import { ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@fc/ui/base/form'
import { Textarea } from '@fc/ui/base/textarea'

type FormTextareaProps<T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>> = {
  description?: string
  label?: string | null
  name: N
} & Pick<ControllerProps<T, N>, 'disabled'> &
  React.ComponentProps<'textarea'>

export const FormTextarea = <T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>>({
  className,
  description,
  disabled,
  label,
  name,
  placeholder,
  required,
}: FormTextareaProps<T, N>) => {
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
            <Textarea className={className} disabled={disabled} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
