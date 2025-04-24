'use client'

import { useEffect, useRef, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

import { LocaleSwitcher } from '@fc/ui/components/LocaleSwitcher'

import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { getMenuItems } from '@/config/menuItems'

import { Logo } from '../Logo/Logo'
import { HeaderItem } from './HeaderItem'

const sections = ['home', 'about', 'application', 'support']

export const Header = () => {
  const t = useTranslations('Header')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const menuItems = getMenuItems(t)

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="bg-background/80 fixed left-0 right-0 top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <Logo />
          <div className="hidden items-center space-x-8 md:flex">
            {menuItems.map((item) => (
              <HeaderItem href={item.href} key={item.href}>
                {item.label}
              </HeaderItem>
            ))}
            <LocaleSwitcher />
          </div>
          <button className="text-2xl md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-[full] bg-transparent md:hidden"
            exit={{ opacity: 0, x: 300 }}
            initial={{ opacity: 0, x: 300 }}
            ref={mobileMenuRef}
          >
            <div className="bg-background flex h-full flex-col justify-start">
              <div className="border-border flex justify-start border-b p-2 px-2">
                <LocaleSwitcher />
              </div>
              <div className="border-border flex flex-col justify-start gap-4 border-b p-4">
                {menuItems.map((item) => (
                  <HeaderItem
                    className="hover:bg-primary/10 w-full rounded-lg text-start text-lg"
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
