'use client'

import { cn } from '@fc/ui/lib/utils'

interface HeaderItemProps {
    href: string
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export const HeaderItem = ({ href, children, onClick, className }: HeaderItemProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const element = document.getElementById(href.replace('#', ''))
        element?.scrollIntoView({ behavior: 'smooth' })
        onClick?.()
    }

    return (
        <a
            className={cn(
                'nav-item relative group',
                'text-lg transition-colors duration-300',
                'hover:text-primary',
                'md:text-base',
                className
            )}
            href={href}
            onClick={handleClick}
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full md:block hidden" />
        </a>
    )
}