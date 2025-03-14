'use client'

import React, { useRef, useState } from 'react'
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@fc/ui/base/form'
import { Input } from '@fc/ui/base/input'
import { Select as SelectComponent, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@fc/ui/base/select'

type Option = {
  label: string | null
  value: string
  id?: string | null
}

type FormSelectProps<T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>> = {
  description?: string
  label?: string | null
  name: N
  options: Option[]
  required?: boolean
  disabled?: boolean
} & Pick<ControllerProps<T, N>, 'disabled'> &
  React.ComponentProps<typeof SelectComponent>

export const FormSelect = <T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>>({
  description,
  disabled,
  label,
  name,
  options,
  required,
}: FormSelectProps<T, N>) => {
  const form = useFormContext<T, N>()
  const [searchTerm, setSearchTerm] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const filteredOptions = searchTerm
    ? options.filter((option) => option.label?.toLowerCase().includes(searchTerm.toLowerCase()))
    : options

  const onOpenChange = (open: boolean) => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
    }
  }

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
              <SelectComponent
                disabled={disabled}
                onOpenChange={onOpenChange}
                onValueChange={(val) => field.onChange(val)}
                value={field.value}
              >
                <SelectTrigger className="w-full relative" id={name}>
                  <SelectValue placeholder={field.value ? field.value : label} />
                </SelectTrigger>

                <SelectContent>
                  <Input
                    className="w-full p-2 mb-2 border rounded-md bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    ref={inputRef}
                    type="text"
                    value={searchTerm}
                  />
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map(({ label, value }: Option) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))
                  ) : (
                    <div className="p-2 text-gray-500">No results found</div>
                  )}
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
