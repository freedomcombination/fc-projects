export interface SupportHeroProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
}

const SupportHeroComponent = ({ backgroundImage, subtitle, title }: SupportHeroProps) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage || 'https://sarkac.org/wp-content/uploads/2023/08/dayanisma.png'})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          filter: 'brightness(0.7)',
          opacity: 0.8,
        }}
      />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title || 'Destek Ver, Fark Yarat'}</h1>
        <p className="text-sm md:text-base text-white max-w-xl">
          {subtitle ||
            'Topluluğumuzu güçlendirmek ve daha iyi bir gelecek inşa etmek için birlikte çalışalım. Her destek, yarınlarımız için umut olur.'}
        </p>
      </div>
    </div>
  )
}

export default SupportHeroComponent
