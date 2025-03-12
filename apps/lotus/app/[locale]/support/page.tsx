import React from 'react'

import Hero from '@fc/ui/components/Hero/Hero'

const heroInfo = {
  image: 'https://sarkac.org/wp-content/uploads/2023/08/dayanisma.png',
  subtitle: 'Topluluğumuzu güçlendirmek ve daha iyi bir gelecek inşa etmek için birlikte çalışalım. Her destek, yarınlarımız için umut olur.',
  title: 'Destek Ver, Fark Yarat',
}

const page = () => {
  return (
    <div>
      <Hero 
        backgroundImage={heroInfo.image}
        subtitle={heroInfo.subtitle}
        title= {heroInfo.title}
      />
    </div>
  )
}

export default page
