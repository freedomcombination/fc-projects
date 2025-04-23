'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Hero = () => {
  const t = useTranslations('Hero')

  return (
    <section className="relative h-screen w-full" id="home">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image
          alt="Hero background"
          className="object-cover"
          fill
          priority
          quality={100}
          sizes="100vw"
          src="/images/hero-bg.jpg"
          style={{
            height: '100%',
            width: '100%',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex h-screen items-center justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t('title')}
            </motion.h1>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-lg text-white/90 sm:text-xl md:text-2xl lg:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('subtitle')}
            </motion.p>
            <motion.button
              animate={{ opacity: 1 }}
              className="rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600 sm:px-8 sm:py-4 sm:text-lg"
              initial={{ opacity: 0 }}
              onClick={() => {
                document.getElementById('about-cultural')?.scrollIntoView({ behavior: 'smooth' })
              }}
              transition={{ delay: 0.6 }}
            >
              {t('cta')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
