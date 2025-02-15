'use client'

import { useEffect, useState } from 'react'

import { Button } from '@fc/ui/base/button'
import { Input } from '@fc/ui/base/input'

import { useTranslations } from 'next-intl'

import { AboutSection } from './about/AboutSection'
import ApplicationPage from './application/page'
import { Footer } from './components/footer/Footer'
import { Hero } from './components/hero/Hero'
import { Support } from './components/support/Support'

const sections = ['home', 'about', 'application', 'support']

export default function HomePage() {
  const t = useTranslations()
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement form submission logic here
    console.log('Form submitted')
    setIsSubmitting(false)
  }

  return (
    <main className="relative">
      {/* Hero section */}
      <section className="relative min-h-screen bg-gradient-to-b from-primary to-secondary" id="home">
        <Hero />
      </section>

      {/* About section */}
      <section className="py-16 bg-white" id="about">
        <AboutSection />
      </section>

      {/* Application section */}
      <section className="py-16 bg-white" id="application">
        <ApplicationPage />
      </section>

      {/* Contact section */}
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">{t('Header.contact')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('Contact.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">{t('Contact.contactInfo')}</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 text-primary mt-1">📧</div>
                  <div>
                    <h4 className="font-medium text-xl">{t('Contact.email')}</h4>
                    <p className="text-muted-foreground">info@harmonievannederland.nl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white rounded-lg shadow-lg p-8 space-y-6" onSubmit={handleSubmit}>
              <label>
                {t('Contact.name')}
                <Input name="name" required />
              </label>
              <Input name="email" required type="email" />
              <textarea
                className="w-full p-3 rounded-lg border bg-background"
                placeholder={t('Contact.message')}
                required
                rows={5}
              />
              <Button
                className="w-full bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark transition"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? t('Contact.sending') : t('Contact.send')}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Support section */}
      <Support />

      {/* Footer */}
      <Footer />
    </main>
  )
}
