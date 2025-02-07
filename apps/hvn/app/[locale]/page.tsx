// page.tsx
'use client'

import { useEffect } from 'react'

import { useTranslations } from 'next-intl'

import { AboutSection } from './about/AboutSection'
import { Footer } from './components/footer/Footer'
import { Hero } from './components/hero/Hero'
const sections = ['home', 'about', 'application', 'contact', 'support']

export default function HomePage() {
  const t = useTranslations()

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
    <main className="relative">
      {/* Hero section */}
      <section className="relative min-h-screen" id="home">
        <div className="container mx-auto px-4 pt-16">
          <Hero />
        </div>
      </section>

      {/* About section */}
      <section className="relative" id="about">
        <AboutSection />
      </section>

      {/* Application section */}
      <section className="relative min-h-screen flex items-center" id="application">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-8">{t('Header.application')}</h2>
          {/* Application section content */}
        </div>
      </section>

      {/* Contact section */}
      <section className="relative min-h-screen flex items-center" id="contact">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-8">{t('Header.contact')}</h2>
          {/* Contact section content */}
        </div>
      </section>

      {/* Support section */}
      <section className="relative min-h-screen flex items-center" id="support">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-8">{t('Header.support')}</h2>
          {/* Support section content */}
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </main>
  )
}
