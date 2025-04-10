import { FC, HtmlHTMLAttributes, PropsWithChildren } from 'react'

import { Container as ContainerType } from '@fc/types/payload-types'
import { cn } from '@fc/ui/lib/utils'

type ContainerProps = HtmlHTMLAttributes<HTMLDivElement> & PropsWithChildren<Pick<ContainerType, 'fluid' | 'spacing'>>

export const Container: FC<ContainerProps> = ({ children, className, fluid, spacing, ...props }) => {
  return (
    <div
      className={cn(className, 'px-4 sm:px-6', {
        'container mx-auto': !fluid,
        'max-w-screen': fluid,
        'py-16': spacing === 'lg',
        'py-4': spacing === 'sm',
        'py-8': spacing === 'md',
      })}
      {...props}
    >
      {children}
    </div>
  )
}
