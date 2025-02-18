import { BiTargetLock } from 'react-icons/bi'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoMdPeople } from 'react-icons/io'
import { MdHandshake, MdPalette } from 'react-icons/md'

import { motion } from 'framer-motion'
// AboutSection.tsx
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const sectionConfig = {
  activities: {
    bgColor: 'bg-purple-50',
    icon: <MdPalette className="text-purple-500" size={48} />,
    iconBg: 'bg-purple-100',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470',
  },
  cultural: {
    bgColor: 'bg-blue-50',
    icon: <FaGlobeAmericas className="text-blue-500" size={48} />,
    iconBg: 'bg-blue-100',
    image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1470',
  },
  integration: {
    bgColor: 'bg-orange-50',
    icon: <MdHandshake className="text-orange-500" size={48} />,
    iconBg: 'bg-orange-100',
    image: 'https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=1470',
  },
  platform: {
    bgColor: 'bg-green-50',
    icon: <IoMdPeople className="text-green-500" size={48} />,
    iconBg: 'bg-green-100',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1470',
  },
  unity: {
    bgColor: 'bg-red-50',
    icon: <BiTargetLock className="text-red-500" size={48} />,
    iconBg: 'bg-red-100',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1469',
  },
}

export const AboutSection = () => {
  const t = useTranslations('About')
  const sections: Array<keyof typeof sectionConfig> = ['cultural', 'platform', 'activities', 'integration', 'unity']

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {sections.map((section, index) => {
          const config = sectionConfig[section]
          const isEven = index % 2 === 0

          return (
            <div
              className={`min-h-screen flex items-center ${index !== 0 ? 'mt-20' : ''}`}
              id={`about-${section}`}
              key={section}
            >
              <div className={`w-full grid md:grid-cols-2 gap-16 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="space-y-6">
                    <div
                      className={`w-16 h-16 ${config.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      {config.icon}
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight">{t(`${section}.title`)}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{t(`${section}.content`)}</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl ${config.bgColor}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    alt={t(`${section}.title`)}
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    fill
                    quality={90}
                    src={config.image}
                  />
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
