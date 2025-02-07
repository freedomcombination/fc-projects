'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Hero = () => {
    const t = useTranslations('Hero')

    return (
        <section id="home" className="relative h-screen w-full ">
            {/* Background Image Container */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Hero background"
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex h-screen items-center justify-center px-4"
            >
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        {t('title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-8 text-lg text-white/90 sm:text-xl md:text-2xl lg:text-3xl"
                    >
                        {t('subtitle')}
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600 sm:px-8 sm:py-4 sm:text-lg"
                        onClick={() => {
                            document.getElementById('about-cultural')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        {t('cta')}
                    </motion.button>
                </div>
            </motion.div>
        </section>
    )
}