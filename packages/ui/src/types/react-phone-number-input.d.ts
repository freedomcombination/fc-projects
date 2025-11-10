declare module 'react-phone-number-input' {
  import * as React from 'react'

  export type Value = string
  export type Country = string
  export type CountryCode = string

  export type Props = {
    value?: Value
    onChange?: (value?: Value) => void
    defaultCountry?: CountryCode
    [key: string]: unknown
  }

  export type FlagProps = {
    country?: CountryCode
    countryName?: string
  }

  export function isValidPhoneNumber(value?: string | null): boolean
  export function getCountryCallingCode(country: string): string

  const _default: React.ComponentType<unknown>
  export default _default
}
