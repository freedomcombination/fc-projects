import React from 'react'
import { ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'

import { Checkbox } from '@fc/ui/base/checkbox'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@fc/ui/base/form'

type FormCheckboxProps<T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>> = {
  description?: string
  label?: string
  name: N
} & Pick<ControllerProps<T, N>, 'disabled'> &
  React.ComponentProps<'input'>

export const FormCheckbox = <T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>>({
  description,
  disabled,
  label,
  name,
  required,
}: FormCheckboxProps<T, N>) => {
  const form = useFormContext<T>()

  return (
    <FormField<T, N>
      control={form.control}
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
            <Checkbox checked={field.value} disabled={disabled} onCheckedChange={field.onChange} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
      rules={{ required }}
    />
  )
}
