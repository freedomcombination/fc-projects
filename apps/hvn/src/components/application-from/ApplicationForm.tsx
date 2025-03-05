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
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { cityOptions } from './cityOptions'
import { ApplicationFormData, useApplicationFormSchema } from './schema'

const eventOptions = [{ label: 'Harmonie van Nederland - Amsterdam', value: 'hvn_amsterdam' }]

export const ApplicationForm = () => {
  const t = useTranslations('Application')

  const [isUnder18State, setIsUnder18State] = useState(true)

  const schema = useApplicationFormSchema(isUnder18State)

  const form = useForm<ApplicationFormData>({
    defaultValues: {
      acceptConditions: false,
      acceptParent: false,
      city: '',
      email: '',
      event: 'hvn_amsterdam',
      fullName: '',
      isUnder18: true,
      parentEmail: '',
      parentFullName: '',
      parentPhone: '',
      phone: '',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: ApplicationFormData) => {
    console.log(data)
  }

  const { event = 'hvn_amsterdam', fullName, isUnder18 } = form.watch()
  const eventLabel = eventOptions.find((option) => option.value === event)?.label

  useEffect(() => {
    setIsUnder18State(isUnder18)
  }, [isUnder18])

  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormCheckbox label={t('isUnder18')} name="isUnder18" />
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
                description={t.rich('acceptConditions', {
                  privacy: (chunks) => (
                    <Link className="underline" href="/privacy-policy" target="_blank">
                      {chunks}
                    </Link>
                  ),
                  terms: (chunks) => (
                    <Link className="underline" href="/terms-of-service" target="_blank">
                      {chunks}
                    </Link>
                  ),
                })}
                label={t('acceptConditions')}
                name="acceptConditions"
                required
              />

              {isUnder18 && (
                <FormCheckbox
                  description={t.rich('acceptParent', {
                    eventLabel,
                    fullName: fullName || '<Name>',
                  })}
                  label={t('acceptParent')}
                  name="acceptParent"
                  required
                />
              )}
              <Button type="submit">{t('submit')}</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
