import Image from 'next/image'

export interface HeroProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
}

const Hero = ({ backgroundImage, subtitle, title }: HeroProps) => {
  return (
    <div className="relative h-screen overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0">
        <Image
          alt="Background"
          className="brightness-75"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          src={backgroundImage}
        />
      </div>

      <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10 bg-[var(--foreground)]/30 rounded-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-sm md:text-base text-white max-w-xl">{subtitle}</p>
      </div>
    </div>
  )
}

export default Hero
