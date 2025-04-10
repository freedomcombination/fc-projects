'use client'

import { Link } from '@fc/intl/navigation'

import { Copyright } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Footer = () => {
  const headerTranslations = useTranslations('Header')
  const legalTranslations = useTranslations('legalPages')

  const menuItems = [
    { href: `#home`, label: headerTranslations('home') },
    { href: `#about`, label: headerTranslations('about') },
    { href: `#application`, label: headerTranslations('application') },
    { href: `#contact`, label: headerTranslations('contactNav') },
    { href: `#support`, label: headerTranslations('support') },
  ]

  const legalLinks = [
    { href: `/legal/privacy-policy`, label: legalTranslations('privacy.title') },
    { href: `/legal/terms-of-use`, label: legalTranslations('terms.title') },
    { href: `/legal/cookie-policy`, label: legalTranslations('cookies.title') },
  ]

  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo */}
            <Image alt="Logo" className="object-contain rounded-full" height={50} src="/images/logo.png" width={50} />

            <p className="text-muted-foreground mb-4">{headerTranslations('footerDescription')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{headerTranslations('navigation')}</h4>
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
            <h4 className="font-semibold mb-4">{headerTranslations('legal')}</h4>
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
          <p className="flex justify-center items-center gap-1">
            <Copyright size={14} />
            {new Date().getFullYear()} Harmonie van Nederland {headerTranslations('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  )
}
