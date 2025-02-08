'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  const t = useTranslations('Header')

  const menuItems = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#application', label: t('application') },
    { href: '#contact', label: t('contact') },
    { href: '#support', label: t('support') },
  ]

  const legalLinks = [
    { href: '/privacy', label: t('privacy') },
    { href: '/terms', label: t('terms') },
    { href: '/cookies', label: t('cookies') },
  ]

  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo */}
            <Image alt="Logo" className="object-contain rounded-full" height={50} src="/images/logo.png" width={50} />

            <p className="text-muted-foreground mb-4">{t('footerDescription')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t('navigation')}</h4>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link className="text-muted-foreground hover:text-primary transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Your Company. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  )
}
