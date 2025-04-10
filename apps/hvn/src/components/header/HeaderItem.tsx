'use client'

import { Link } from '@fc/intl/navigation'
import { cn } from '@fc/ui/lib/utils'

interface HeaderItemProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const HeaderItem = ({ children, className, href }: HeaderItemProps) => {
  return (
    <Link
      className={cn(
        'nav-item group relative',
        'text-lg transition-colors duration-300',
        'hover:text-primary',
        'md:text-base',
        className,
      )}
      href={href}
    >
      {children}
      <span className="bg-primary absolute -bottom-1 left-0 hidden h-0.5 w-0 transition-all duration-300 group-hover:w-full md:block" />
    </Link>
  )
}
