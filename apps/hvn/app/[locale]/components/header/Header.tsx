'use client'

import { useEffect, useState } from 'react'

import { LocaleSwitcher } from '@fc/ui/components/locale-switcher'
import { ModeToggle } from '@fc/ui/components/mode-toggle'

import { HeaderItem } from './HeaderItem'

const navigationItems = [
  { href: '/', translationKey: 'home' },
  { href: '/application', translationKey: 'application' },
  { href: '/about', translationKey: 'about' },
  { href: '/contact', translationKey: 'contact' },
  { href: '/support', translationKey: 'support' },
]

export const Header = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold">HvN</span>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        {navigationItems.map((item) => (
          <HeaderItem href={item.href} key={item.translationKey} translationKey={item.translationKey} />
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <LocaleSwitcher />
        <ModeToggle />
      </div>
    </header>
  )
}
