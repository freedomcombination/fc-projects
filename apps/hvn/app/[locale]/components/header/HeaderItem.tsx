
'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

interface HeaderItemProps {
    href: string
    translationKey: string
}

export const HeaderItem = ({ href, translationKey }: HeaderItemProps) => {
    const pathname = usePathname()
    const t = useTranslations('Header')
    const isActive = pathname === href

    return (
        <Link
            className={`text-sm transition-colors hover:text-foreground/80 ${isActive ? 'text-foreground' : 'text-foreground/60'
                }`}
            href={href}
        >
            {t(translationKey)}
        </Link>
    )
}