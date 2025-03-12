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
    <div className={cn('relative h-screen flex justify-center items-center', className)}>
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

      <div className="relative container flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-sm md:text-base text-white max-w-xl">{subtitle}</p>
      </div>
    </div>
  )
}
