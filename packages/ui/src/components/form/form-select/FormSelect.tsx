'use client'

import React from 'react'
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

import { Button } from '@fc/ui/base/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@fc/ui/base/command'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@fc/ui/base/form'
import { Popover, PopoverContent, PopoverTrigger } from '@fc/ui/base/popover'
import { Select as SelectComponent } from '@fc/ui/base/select'
import { cn } from '@fc/ui/lib/utils'

import { Check, ChevronsUpDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

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
  placeholder?: string
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
  const t = useTranslations()
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
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    className={cn('w-full justify-between', !field.value && 'text-muted-foreground')}
                    role="combobox"
                    variant="outline"
                  >
                    {field.value ? options.find((option) => option.value === field.value)?.label : label}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder={t('search')} />
                  <CommandList>
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {options.map((option) => (
                        <CommandItem
                          key={option.value}
                          onSelect={() => {
                            field.onChange(option.value)
                          }}
                          value={option.label ?? ''}
                        >
                          {option.label}
                          <Check
                            className={cn('ml-auto', option.value === field.value ? 'opacity-100' : 'opacity-0')}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
