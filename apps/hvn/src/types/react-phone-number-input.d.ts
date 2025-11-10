// Minimal type declarations to satisfy TypeScript for react-phone-number-input
// We only declare the helper(s) used in this repo: isValidPhoneNumber
declare module 'react-phone-number-input' {
  export function isValidPhoneNumber(value: string | undefined | null): boolean
  const _default: unknown
  export default _default
}
