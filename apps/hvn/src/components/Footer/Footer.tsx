'use client'

import { Link } from '@fc/intl/navigation'

import { Copyright } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { getLegalLinks } from '@/config/legalLinks'
import { getMenuItems } from '@/config/menuItems'

import { Logo } from '../Logo/Logo'

export const Footer = () => {
  const headerTranslations = useTranslations('Header')
  const legalTranslations = useTranslations('legalPages')

  const menuItems = getMenuItems(headerTranslations)
  const legalLinks = getLegalLinks(legalTranslations)

  return (
    <footer className="bg-background mt-auto border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo */}
            <Logo />
            {/* Description */}
            <p className="text-muted-foreground mb-4">{headerTranslations('footerDescription')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold">{headerTranslations('navigation')}</h4>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link className="text-muted-foreground hover:text-primary transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold">{headerTranslations('legal')}</h4>
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
        <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
          <div className="flex-no-wrap flex items-center justify-center gap-x-1 gap-y-2">
            <Copyright className="shrink-0" size={14} />
            <span className="whitespace-nowrap">
              {new Date().getFullYear()} Harmonie van Nederland {headerTranslations('allRightsReserved')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
