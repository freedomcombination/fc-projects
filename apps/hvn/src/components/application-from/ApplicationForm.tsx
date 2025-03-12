'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@fc/ui/base/button'
import { Card, CardContent, CardHeader, CardTitle } from '@fc/ui/base/card'
import { Form } from '@fc/ui/base/form'
import { FormCheckbox } from '@fc/ui/components/form/form-checkbox'
import { FormInput } from '@fc/ui/components/form/form-input'
import { FormPhoneInput } from '@fc/ui/components/form/form-phone-input'
import { FormSelect } from '@fc/ui/components/form/form-select'
import { FormTextarea } from '@fc/ui/components/form/form-textarea'

import { zodResolver } from '@hookform/resolvers/zod'
import { isAfter, isSameDay } from 'date-fns'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { EventConditionsModal } from '../modal/EventConditionsModal'
import { cityOptions } from './cityOptions'
import { ApplicationFormData, useApplicationFormSchema } from './schema'

const eventOptions = [{ label: 'Harmonie van Nederland - Amsterdam', value: 'hvn_amsterdam' }]

export const ApplicationForm = () => {
  const t = useTranslations('Application')

  const paramsLocale = useParams().locale
  const [isUnder18State, setIsUnder18State] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const schema = useApplicationFormSchema(isUnder18State)

  const form = useForm<ApplicationFormData>({
    defaultValues: {
      acceptConditions: false,
      acceptParent: false,
      city: '',
      dateOfBirth: new Date(),
      email: '',
      event: 'hvn_amsterdam',
      fullName: '',
      parentEmail: '',
      parentFullName: '',
      parentPhone: '',
      phone: '',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: ApplicationFormData) => {
    alert(`Form submitted: ${JSON.stringify(data, null, 2)}`)
  }

  const dateOfBirth = form.watch('dateOfBirth')

  // Calculate if person is under 18 by checking if their 18th birthday has passed
  const today = new Date()
  const birthDate = new Date(dateOfBirth)

  // Calculate the date of their 18th birthday
  const eighteenthBirthday = new Date(birthDate.getFullYear() + 18, birthDate.getMonth(), birthDate.getDate() + 1)

  // Person is 18 or older if their 18th birthday is today or has already passed
  const isAdult = isAfter(today, eighteenthBirthday) || isSameDay(today, eighteenthBirthday)
  const isUnder18 = !isAdult

  useEffect(() => {
    setIsUnder18State(isUnder18)
  }, [isUnder18])

  const { event = 'hvn_amsterdam', fullName } = form.watch()
  const eventLabel = eventOptions.find((option) => option.value === event)?.label

  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormInput label={t('dateOfBirth')} name="dateOfBirth" required type="date" />
              {isUnder18 && <CardTitle className="text-lg">{t('participantTitle')}</CardTitle>}

              <FormInput label={t('fullName')} name="fullName" required />
              <FormInput label={t('email')} name="email" required />
              <FormPhoneInput label={t('phone')} name="phone" required />
              <FormSelect
                label={t('city')}
                name="city"
                options={Object.entries(cityOptions).flatMap(([province, cities]) =>
                  cities.map((city) => ({ label: `${province} - ${city}`, value: city })),
                )}
                required
              />
              <FormSelect label={t('event')} name="event" options={eventOptions} required />
              <FormTextarea label={t('message')} name="message" placeholder={t('message')} />

              {isUnder18 && (
                <>
                  <hr />
                  <CardTitle className="text-lg">{t('parent.title')}</CardTitle>
                  <FormInput label={t('parent.fullName')} name="parentFullName" required />
                  <FormInput label={t('parent.email')} name="parentEmail" required />
                  <FormPhoneInput label={t('parent.phone')} name="parentPhone" required />
                </>
              )}
              <FormCheckbox
                label={t('acceptEventConditions.label')}
                name="acceptEventConditions"
                onChange={(e) => {
                  if (e.target.checked) {
                    setIsModalOpen(true)
                  }
                }}
                required
              />
              <p className="underline" onClick={() => setIsModalOpen(true)}>
                {t('acceptEventConditions.description')}
              </p>

              {/*/legal/privacy-policy*/}
              <FormCheckbox
                description={t.rich('acceptConditions.description', {
                  privacy: (chunks) => (
                    <Link className="underline" href={`/${paramsLocale}/legal/privacy-policy`} target="_blank">
                      {chunks}
                    </Link>
                  ),
                  terms: (chunks) => (
                    <Link className="underline" href={`/${paramsLocale}/legal/terms-of-service`} target="_blank">
                      {chunks}
                    </Link>
                  ),
                })}
                label={t('acceptConditions.title')}
                name="acceptConditions"
                required
              />

              {isUnder18 && (
                <FormCheckbox
                  description={t.rich('acceptParent.description', {
                    eventLabel,
                    fullName: fullName || '<Name>',
                  })}
                  label={t('acceptParent.title')}
                  name="acceptParent"
                  required
                />
              )}
              <Button type="submit">{t('submit')}</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <EventConditionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
