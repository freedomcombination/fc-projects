import React from 'react'
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@fc/ui/base/form'
import { Select as SelectComponent, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@fc/ui/base/select'

type Option = {
  label: string
  value: string
}

type FormSelectProps<T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>> = {
  description?: string
  label?: string
  name: N
  options: Option[]
} & Pick<ControllerProps<T, N>, 'disabled'> &
  React.ComponentProps<typeof SelectComponent>

export const FormSelect = <T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>>({
  children,
  description,
  disabled,
  label,
  name,
  options,
  required,
}: FormSelectProps<T, N>) => {
  const form = useFormContext<T, N>()

  return (
    <FormField<T, N>
      control={form.control}
      disabled={disabled}
      name={name}
      render={({ field }) => {
        return (
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
              <SelectComponent disabled={disabled} onValueChange={(val) => field.onChange(val)} value={field?.value}>
                <SelectTrigger className="w-full" id={name}>
                  <SelectValue placeholder={label} />
                </SelectTrigger>
                <SelectContent>
                  {options.map(({ label, value }) => {
                    return (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    )
                  })}
                  {children}
                </SelectContent>
              </SelectComponent>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
