// apps/hvn/app/[locale]/contact/page.tsx
'use client'

import { useEffect, useState } from 'react'

import { Button } from '@fc/ui/base/button'
import { Input } from '@fc/ui/base/input'

import { useTranslations } from 'next-intl'

const ContactPage = () => {
  const t = useTranslations('Contact')
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">{t('contactInfo')}</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-primary mt-1">📧</div>
                <div>
                  <h3 className="font-medium">{t('email')}</h3>
                  <p className="text-muted-foreground">info@harmonievannederland.nl</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-primary mt-1">📞</div>
                <div>
                  <h3 className="font-medium">{t('phone')}</h3>
                  <p className="text-muted-foreground">+31 (0) 20 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-primary mt-1">📍</div>
                <div>
                  <h3 className="font-medium">{t('address')}</h3>
                  <p className="text-muted-foreground">Amsterdam, Netherlands</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('firstName')}</label>
                <Input required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('lastName')}</label>
                <Input required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t('email')}</label>
              <Input required type="email" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t('subject')}</label>
              <Input required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t('message')}</label>
              <textarea
                className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>

            <Button className="w-full" disabled={isSubmitting} type="submit">
              {isSubmitting ? t('sending') : t('send')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
