'use client'

import { BiTargetLock } from 'react-icons/bi'
import { FaGlobeAmericas, FaHandshake } from 'react-icons/fa'
import { IoMdPeople } from 'react-icons/io'
import { MdPalette } from 'react-icons/md'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const sections = [
  {
    bgFrom: 'from-teal-100',
    bgTo: 'to-blue-100',
    icon: <FaHandshake className="text-teal-500" size={48} />,
    iconBg: 'bg-teal-100',
    id: 'collaborate',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470',
  },
  {
    bgFrom: 'from-blue-100',
    bgTo: 'to-green-100',
    icon: <FaGlobeAmericas className="text-blue-500" size={48} />,
    iconBg: 'bg-blue-100',
    id: 'cultural',
    image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1470',
  },
  {
    bgFrom: 'from-green-100',
    bgTo: 'to-purple-100',
    icon: <IoMdPeople className="text-green-500" size={48} />,
    iconBg: 'bg-green-100',
    id: 'platform',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1470',
  },
  {
    bgFrom: 'from-purple-100',
    bgTo: 'to-red-100',
    icon: <MdPalette className="text-purple-500" size={48} />,
    iconBg: 'bg-purple-100',
    id: 'activities',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470',
  },
  {
    bgFrom: 'from-red-100',
    bgTo: 'to-zinc-100',
    icon: <BiTargetLock className="text-red-500" size={48} />,
    iconBg: 'bg-red-100',
    id: 'unity',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1469',
  },
]

export const AboutSection = () => {
  const t = useTranslations('About')

  return (
    <>
      {sections.map((config, index) => {
        const section = config.id
        const isEven = index % 2 === 0

        return (
          <div
            className={`min-h-screen flex items-center bg-gradient-to-b ${config?.bgFrom} ${config.bgTo}`}
            id={`about-${section}`}
            key={section}
          >
            <div className="container mx-auto px-4">
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
                    {section === 'collaborate' && (
                      <div className=" grid grid-cols-4 gap-4">
                        <a href="https://www.freedomcombination.com" rel="noreferrer" target="_blank">
                          <motion.div
                            animate={{ opacity: 1, scale: 1 }}
                            className={`relative h-[100px] w-[100px] rounded-full overflow-hidden shadow-2xl ${config.bgColor}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                          >
                            <Image
                              alt={t(`${section}.title`)}
                              className="object-cover hover:scale-105 transition-transform duration-700"
                              fill
                              quality={90}
                              src={'https://www.freedomcombination.com/images/foundation-logo.svg'}
                            />
                          </motion.div>
                        </a>
                        <a href="https://stichtingsanat.nl" rel="noreferrer" target="_blank">
                          <motion.div
                            animate={{ opacity: 1, scale: 1 }}
                            className={`relative h-[100px] w-[100px] rounded-full overflow-hidden shadow-2xl ${config.bgColor}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                          >
                            <Image
                              alt={t(`${section}.title`)}
                              className="object-cover hover:scale-105 transition-transform duration-700"
                              fill
                              quality={90}
                              src={'https://stichtingsanat.nl/wp-content/uploads/2022/02/SANAT-logo.png'}
                            />
                          </motion.div>
                        </a>
                        <a
                          href="https://www.freedomcombination.com/nl/platforms/lotus"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <motion.div
                            animate={{ opacity: 1, scale: 1 }}
                            className={`relative h-[100px] w-[100px] rounded-full overflow-hidden shadow-2xl ${config.bgColor}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                          >
                            <Image
                              alt={t(`${section}.title`)}
                              className="object-cover hover:scale-105 transition-transform duration-700"
                              fill
                              quality={90}
                              src={'https://api.freedomcombination.com/uploads/lotus_d559be0c32.svg'}
                            />
                          </motion.div>
                        </a>
                      </div>
                    )}
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
          </div>
        )
      })}
    </>
  )
}
