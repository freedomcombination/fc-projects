export const breakpoints = {
  '2xl': 1536,
  lg: 1024,
  md: 768,
  sm: 640,
  xl: 1280,
} as const

export const deviceSizes = Object.values(breakpoints)

export const imageSizes = [64, 128, 256, 512]
