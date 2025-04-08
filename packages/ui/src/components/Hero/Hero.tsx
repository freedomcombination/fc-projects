import { cn } from '@fc/ui/lib/utils'

import Image from 'next/image'

export interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  className?: string
}

export const Hero = ({ backgroundImage, className, subtitle, title }: HeroProps) => {
  return (
    <div className={cn('relative flex h-screen items-center justify-center', className)}>
      <div className="absolute inset-0">
        <Image
          alt="Background"
          className="brightness-40"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          src={backgroundImage}
        />
      </div>

      <div className="container relative flex flex-col items-center justify-center px-4 text-center md:px-8">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="max-w-xl text-sm text-white md:text-base">{subtitle}</p>
      </div>
    </div>
  )
}
