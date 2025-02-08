'use client'

import { cn } from '@fc/ui/lib/utils'

import Link from 'next/link'

interface HeaderItemProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const HeaderItem = ({ children, className, href }: HeaderItemProps) => {
  return (
    <Link
      className={cn(
        'nav-item relative group',
        'text-lg transition-colors duration-300',
        'hover:text-primary',
        'md:text-base',
        className,
      )}
      href={href}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full md:block hidden" />
    </Link>
  )
}
