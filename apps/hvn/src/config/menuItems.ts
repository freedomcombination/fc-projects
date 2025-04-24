export const getMenuItems = (t: (key: string) => string) => [
  { href: '/#home', label: t('home') },
  { href: '/#about', label: t('about') },
  { href: '/announcements', label: t('announcements') },
  { href: '/#application', label: t('application') },
  { href: '/contact', label: t('contactNav') },
  { href: '/support', label: t('support') },
]
