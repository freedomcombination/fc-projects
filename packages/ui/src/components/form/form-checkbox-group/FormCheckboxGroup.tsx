import { ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'

import { Checkbox } from '@fc/ui/base/checkbox'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@fc/ui/base/form'

import { CheckedState } from '@radix-ui/react-checkbox'

type FormCheckboxGroupProps<T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>> = {
  description?: string
  label?: string
  name: N
  options: Array<{ label: string; value: string }>
  required?: boolean
} & Pick<ControllerProps<T, N>, 'disabled'>

export const FormCheckboxGroup = <T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>>({
  description,
  disabled,
  label,
  name,
  options,
  required,
}: FormCheckboxGroupProps<T, N>) => {
  const form = useFormContext<T>()

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          {label && <FormLabel className="text-base">{label}</FormLabel>}

          {options.map((option) => (
            <FormField
              control={form.control}
              key={option.value}
              name={name}
              render={({ field }) => {
                const onCheckedChange = (checked: CheckedState) => {
                  return checked
                    ? field.onChange([...field.value, option.value])
                    : field.onChange(field.value?.filter((value: string) => value !== option.value))
                }
                return (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0" key={option.value}>
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(option.value)}
                        disabled={disabled}
                        onCheckedChange={onCheckedChange}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{option.label}</FormLabel>
                  </FormItem>
                )
              }}
            />
          ))}
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
      rules={{ required }}
    />
  )
}
