export const getLegalLinks = (t: (key: string) => string) => [
  { href: `/legal/privacy-policy`, label: t('privacy.title') },
  { href: `/legal/terms-of-use`, label: t('terms.title') },
  { href: `/legal/cookie-policy`, label: t('cookies.title') },
]
