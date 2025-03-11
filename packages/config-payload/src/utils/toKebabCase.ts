// TODO: Replace with lodash
export const toKebabCase = (string: string) => {
  return string
    ?.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}
