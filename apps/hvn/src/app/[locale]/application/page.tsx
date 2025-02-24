'use client'

import type React from 'react'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@fc/ui/base/button'
import { Input } from '@fc/ui/base/input'
import { Textarea } from '@fc/ui/base/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@fc/ui/base/select'
import { Checkbox } from '@fc/ui/base/checkbox'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@fc/ui/base/card'
import { Label } from '@fc/ui/base/label'
import { CalendarIcon, PhoneIcon, MessageSquareIcon } from 'lucide-react'

const ApplicationPage = () => {
  const t = useTranslations('Application')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const cities = ['Amsterdam', 'Den Haag', 'Noord Brabant']
  const events = ['Harmonie van Nederland - Amsterdam']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptedTerms) {
      alert('You must accept the terms of use to proceed.')
      return
    }
    setIsSubmitting(true)
    // Implement form submission logic here
    console.log('Application submitted')
    setIsSubmitting(false)
  }

  return (
    <section className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">{t('title')}</h1>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('applicationForm')}</CardTitle>
            <CardDescription>{t('fillOutForm')}</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">{t('fullName')}</Label>
                <Input id="fullName" name="fullName" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">{t('dateOfBirth')}</Label>
                <div className="relative">
                  <Input id="dateOfBirth" name="dateOfBirth" type="date" required />
                  <CalendarIcon
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t('phone')}</Label>
                <div className="relative">
                  <Input id="phone" name="phone" type="tel" required />
                  <PhoneIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event">{t('event')}</Label>
                <Select name="event" required>
                  <SelectTrigger>
                    <SelectValue placeholder={t('event')} />
                  </SelectTrigger>
                  <SelectContent>
                    {events.map((event) => (
                      <SelectItem key={event} value={event}>
                        {event}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">{t('city')}</Label>
                <Select name="city" required>
                  <SelectTrigger>
                    <SelectValue placeholder={t('city')} />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('message')}</Label>
                <div className="relative">
                  <Textarea id="message" name="message" placeholder={t('message')} required rows={5} />
                  <MessageSquareIcon className="absolute right-3 top-3 text-gray-400" size={18} />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {t('acceptTerms')}
                </label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? t('submitting') : t('submit')}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  )
}

export default ApplicationPage
