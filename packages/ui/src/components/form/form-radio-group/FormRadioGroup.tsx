import { ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@fc/ui/base/form'
import { RadioGroup, RadioGroupItem } from '@fc/ui/base/radio-group'
import { cn } from '@fc/ui/lib/utils'

type FormRadioGroupProps<T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>> = {
  className?: string
  description?: string
  label?: string
  labelClassName?: string
  name: N
  options: Array<{ label: string; value: string }>
  required?: boolean
} & Pick<ControllerProps<T, N>, 'disabled'>

export const FormRadioGroup = <T extends FieldValues = FieldValues, N extends FieldPath<T> = FieldPath<T>>({
  className,
  description,
  disabled,
  label,
  labelClassName,
  name,
  options,
  required,
}: FormRadioGroupProps<T, N>) => {
  const form = useFormContext<T>()

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
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
            <RadioGroup
              className={cn('flex flex-col space-y-1 mt-2', className)}
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              {options.map((option) => (
                <FormItem className="flex items-center space-x-3 space-y-0" key={option.value}>
                  <FormControl>
                    <RadioGroupItem className="peer" disabled={disabled} value={option.value} />
                  </FormControl>
                  <FormLabel className={cn('font-normal', labelClassName)}>{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
      rules={{ required }}
    />
  )
}
