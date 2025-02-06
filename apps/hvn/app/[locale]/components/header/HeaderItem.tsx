// apps/hvn/app/[locale]/components/header/HeaderItem.tsx
import Link from 'next/link'
import { useTranslations } from 'next-intl'

type HeaderItemProps = {
    href: string
    translationKey: string
}

export const HeaderItem = ({ href, translationKey }: HeaderItemProps) => {
    const t = useTranslations('Header')

    return (
        <Link
            href={href}
            className="text-sm font-medium transition-colors hover:text-primary"
        >
            {t(translationKey)}
        </Link>
    )
}