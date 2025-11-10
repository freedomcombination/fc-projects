import * as React from 'react'
import RPNInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'

import { Button } from '@fc/ui/base/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@fc/ui/base/command'
import { Input } from '@fc/ui/base/input'
import { Popover, PopoverContent, PopoverTrigger } from '@fc/ui/base/popover'
import { ScrollArea } from '@fc/ui/base/scroll-area'
import { cn } from '@fc/ui/lib/utils'

import { CheckIcon, ChevronsUpDown } from 'lucide-react'

type PhoneInputProps = {
  // Use a simple string type for onChange to avoid coupling to external library types
  onChange?: (value: string) => void
} & Omit<React.ComponentProps<'input'>, 'onChange' | 'ref' | 'value'> &
  Record<string, unknown>

function PhoneInput({ className, onChange, ...props }: PhoneInputProps) {
  const RPN = RPNInput as any

  return (
    <RPN
      className={cn('flex', className)}
      countrySelectComponent={CountrySelect}
      flagComponent={FlagComponent}
      inputComponent={InputComponent}
      /**
       * Handles the onChange event.
       *
       * react-phone-number-input might trigger the onChange event as undefined
       * when a valid phone number is not entered. To prevent this,
       * the value is coerced to an empty string.
       *
       * @param {E164Number | undefined} value - The entered value
       */
      onChange={(value: any) => onChange?.(value || '')}
      smartCaret={false}
      {...props}
    />
  )
}

function InputComponent({ className, ...props }: React.ComponentProps<'input'>) {
  return <Input className={cn('rounded-s-none rounded-e-lg', className)} {...props} />
}

type CountryEntry = { label: string; value: string | undefined }

type CountrySelectProps = {
  disabled?: boolean
  onChange: (country: string) => void
  options: CountryEntry[]
  value: string
}

const CountrySelect = ({ disabled, onChange, options: countryList, value: selectedCountry }: CountrySelectProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="flex gap-1 rounded-s-lg rounded-e-none border-r-0 px-3 focus:z-10"
          disabled={disabled}
          type="button"
          variant="outline"
        >
          <FlagComponent country={selectedCountry} countryName={selectedCountry} />
          <ChevronsUpDown className={cn('-mr-2 size-4 opacity-50', disabled ? 'hidden' : 'opacity-100')} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <ScrollArea className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ label, value }) =>
                  value ? (
                    <CountrySelectOption
                      country={value}
                      countryName={label}
                      key={value}
                      onChange={onChange}
                      selectedCountry={selectedCountry}
                    />
                  ) : null,
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

interface CountrySelectOptionProps {
  country: string
  countryName?: string
  onChange: (country: string) => void
  selectedCountry: string
}

const CountrySelectOption = ({ country, countryName, onChange, selectedCountry }: CountrySelectOptionProps) => {
  return (
    <CommandItem className="gap-2" onSelect={() => onChange(country)}>
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-foreground/50 text-sm">{`+${(RPNInput as any).getCountryCallingCode(country)}`}</span>
      <CheckIcon className={`ml-auto size-4 ${country === selectedCountry ? 'opacity-100' : 'opacity-0'}`} />
    </CommandItem>
  )
}

const FlagComponent = ({ country, countryName }: { country?: string; countryName?: string }) => {
  const Flag = (flags as any)[country as string]

  return (
    <span className="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm [&_svg]:!h-full [&_svg]:!w-full">
      {Flag && <Flag title={countryName} />}
    </span>
  )
}

export { PhoneInput }
