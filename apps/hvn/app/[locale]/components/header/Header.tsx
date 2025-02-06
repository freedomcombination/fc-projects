
'use client'

import { ModeToggle } from '@fc/ui/components/mode-toggle'
import { LocaleSwitcher } from '@fc/ui/components/locale-switcher'
import { HeaderItem } from './HeaderItem'

const navigationItems = [
    { href: '/', translationKey: 'home' },
    { href: '/application', translationKey: 'application' },
    { href: '/about', translationKey: 'about' },
    { href: '/contact', translationKey: 'contact' },
    { href: '/support', translationKey: 'support' },
]

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
            <div className="flex items-center gap-4">
                <span className="text-xl font-bold">HvN</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
                {navigationItems.map((item) => (
                    <HeaderItem
                        key={item.translationKey}
                        href={item.href}
                        translationKey={item.translationKey}
                    />
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <ModeToggle />
                <LocaleSwitcher />
            </div>
        </header>
    )
}