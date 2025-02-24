'use client'

import { FC, useState } from 'react'

import { Button } from '@fc/ui/base/button'
import { Input } from '@fc/ui/base/input'

import { useTranslations } from 'next-intl'

import { Form } from '../../../payload-types'

type ApplicationFormProps = {
  form: Form
}

export const ApplicationForm: FC<ApplicationFormProps> = ({ form }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const t = useTranslations('Application')

  const cities = ['Amsterdam', 'Den Haag', 'Noord Brabant']
  const events = ['Harmonie van Nederland - Amsterdam']

  const handleSubmit = async (e: React.FormEvent) => {
    // TODO: Use form.id and form-submission endpoint
    console.log('form', form)

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
    <section className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700">
              {t('fullName')}
              <Input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-50"
                name="fullName"
                required
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              {t('dateOfBirth')}
              <Input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-50"
                name="dateOfBirth"
                required
                type="date"
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              {t('phone')}
              <Input
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-50"
                name="phone"
                required
                type="tel"
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              {t('event')}
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-50"
                required
              >
                {events.map((event) => (
                  <option key={event} value={event}>
                    {event}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-medium text-gray-700">
              {t('city')}
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-50"
                required
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-medium text-gray-700">
              {t('message')}
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-50"
                placeholder={t('message')}
                required
                rows={5}
              />
            </label>

            <div className="flex items-center">
              <input
                checked={acceptedTerms}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                onChange={() => setAcceptedTerms(!acceptedTerms)}
                type="checkbox"
              />
              <span className="ml-2 text-sm text-gray-600">{t('acceptTerms')}</span>
            </div>

            <Button
              className="w-full bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark transition"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
