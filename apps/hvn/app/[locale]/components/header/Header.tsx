'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMenu, IoClose } from 'react-icons/io5'
import { HeaderItem } from './HeaderItem'
import { LocaleSwitcher } from '@fc/ui/components/locale-switcher'

export const Header = () => {
    const t = useTranslations('Header')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { href: '#home', label: t('home') },
        { href: '#about', label: t('about') },
        { href: '#application', label: t('application') },
        { href: '#contact', label: t('contact') },
        { href: '#support', label: t('support') },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold">
                        Logo
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <HeaderItem key={item.href} href={item.href}>
                                {item.label}
                            </HeaderItem>
                        ))}
                        <LocaleSwitcher />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 300 }}
                        className="fixed top-16 right-0 w-[300px] h-[calc(100vh-4rem)] bg-transparent md:hidden"
                    >
                        <div className="h-full px-4 py-8 bg-background ">
                            <div className="flex flex-col space-y-4">
                                <div className="pb-6 mb-2 border-b border-border flex justify-center">
                                    <LocaleSwitcher />
                                </div>
                                {menuItems.map((item) => (
                                    <HeaderItem
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full p-4 rounded-lg hover:bg-primary/10 text-center text-lg"
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