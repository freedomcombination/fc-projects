'use client'

import { useEffect, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

import { LocaleSwitcher } from '@fc/ui/components/locale-switcher'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { HeaderItem } from './HeaderItem'

const sections = ['home', 'about', 'application', 'support']

export const Header = () => {
  const t = useTranslations('Header')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '/#home', label: t('home') },
    { href: '/#about', label: t('about') },
    { href: '/#application', label: t('application') },
    { href: '/#contact', label: t('contactNav') },
    { href: '/#support', label: t('support') },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            window.history.replaceState({}, '', `#${id}`)

            document.querySelectorAll('.nav-item').forEach((item) => {
              const isActive = item.getAttribute('href') === `#${id}`
              item.setAttribute('data-active', isActive.toString())
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Image alt="Logo" className="object-contain rounded-full" height={50} src="/images/logo.png" width={50} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <HeaderItem href={item.href} key={item.href}>
                {item.label}
              </HeaderItem>
            ))}
            <LocaleSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-16 right-0 w-[300px] h-[calc(100vh-4rem)] bg-transparent md:hidden"
            exit={{ opacity: 0, x: 300 }}
            initial={{ opacity: 0, x: 300 }}
          >
            <div className="h-full px-4 py-8 bg-background ">
              <div className="flex flex-col space-y-4">
                <div className="pb-6 mb-2 border-b border-border flex justify-center">
                  <LocaleSwitcher />
                </div>
                {menuItems.map((item) => (
                  <HeaderItem
                    className="w-full p-4 rounded-lg hover:bg-primary/10 text-center text-lg"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </HeaderItem>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
