"use client"

import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Link } from '@fc/intl/navigation'
import { Button } from '@fc/ui/base/button'
import { Card, CardContent, CardHeader, CardTitle } from '@fc/ui/base/card'
import { Form } from '@fc/ui/base/form'
import { FormCheckbox } from '@fc/ui/components/form/form-checkbox'
import { FormInput } from '@fc/ui/components/form/form-input'
import { FormPhoneInput } from '@fc/ui/components/form/form-phone-input'
import { FormSelect } from '@fc/ui/components/form/form-select'
import { FormTextarea } from '@fc/ui/components/form/form-textarea'

import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { Form as FormType } from '../../../payload-types'
import { cityOptions } from '../ApplicationForm/cityOptions'
import { useEventParticipationSchema, EventParticipationFormData } from './schema'

type EventParticipationFormProps = {
  applicationForm?: FormType
}

export const EventParticipationForm: FC<EventParticipationFormProps> = ({ applicationForm }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUnder18State, setIsUnder18State] = useState(false)

  const t = useTranslations('Application')
  const tParticipation = useTranslations('participation')

  const schema = useEventParticipationSchema(isUnder18State)

  const form = useForm<EventParticipationFormData>({
    defaultValues: {
      acceptConditions: false,
      acceptEventConditions: false,
      acceptParent: false,
      city: '',
      dateOfBirth: '',
      email: '',
      event: 'hvn_amsterdam',
      fullName: '',
      message: '',
      otherParticipation: '',
      parentEmail: '',
      parentFullName: '',
      parentPhone: '',
      participationType: '',
      phone: '',
    },
    resolver: yupResolver(schema as any),
  })

  const participationOptions = applicationForm?.fields?.flatMap((field) => {
    if ('name' in field && field.name === 'participationType' && 'options' in field && Array.isArray(field.options)) {
      return field.options
        .filter((option) => option?.label && option?.value)
        .map((option) => ({ label: option.label, value: option.value }))
    }
    return []
  })

  const onSubmit = (data: EventParticipationFormData) => {
    setIsSubmitting(true)
    // Placeholder submit: mutation will be added in later PR (backend ready)
    fetch(`/api/form-submissions`, {
      body: JSON.stringify({
        form: applicationForm?.id,
        submissionData: Object.entries(data).map(([field, value]) => ({ field, value })),
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
      .then((response) => response.json())
      .then(() => {
        toast.success(t('thankYou'))
        form.reset()
      })
      .catch((error) => {
        toast.error(t('error'))
        console.error('Error sending participation form:', error)
      })
      .finally(() => setIsSubmitting(false))
  }

  const dateOfBirth = form.watch('dateOfBirth')

  // simple adult check (same logic as ApplicationForm)
  useEffect(() => {
    const today = new Date()
    const birthDate = new Date(dateOfBirth || '')
    if (!dateOfBirth) return setIsUnder18State(false)
    const eighteenthBirthday = new Date(birthDate.getFullYear() + 18, birthDate.getMonth(), birthDate.getDate() + 1)
    const isAdult = isFinite(eighteenthBirthday.getTime()) && (today > eighteenthBirthday || +today === +eighteenthBirthday)
    setIsUnder18State(!isAdult)
  }, [dateOfBirth])

  const participationType = form.watch('participationType')

  return (
    <div className="container mx-auto max-w-3xl px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormInput
                description={t('dateOfBirthDescription')}
                label={t('dateOfBirth')}
                name="dateOfBirth"
                required
                type="date"
              />

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

              <FormSelect label={t('event')} name="event" options={[{ label: 'HVN - Amsterdam', value: 'hvn_amsterdam' }]} required />

              <FormSelect
                label={tParticipation('label')}
                name="participationType"
                options={participationOptions || []}
                required
              />
              {participationType === 'other' && (
                <FormInput label={tParticipation('otherPlaceholder')} name="otherParticipation" />
              )}

              <FormTextarea label={t('message')} name="message" placeholder={t('message')} required />

              {isUnder18State && (
                <>
                  <hr />
                  <CardTitle className="text-lg">{t('parent.title')}</CardTitle>
                  <FormInput label={t('parent.fullName')} name="parentFullName" required />
                  <FormInput label={t('parent.email')} name="parentEmail" required />
                  <FormPhoneInput label={t('parent.phone')} name="parentPhone" required />
                </>
              )}

              <FormCheckbox
                description={<></>}
                label={t('acceptEventConditions.label')}
                name="acceptEventConditions"
                required
              />

              <FormCheckbox
                description={t.rich('acceptConditions.description', {
                  privacy: (chunks) => (
                    <Link className="underline" href="/legal/privacy-policy" target="_blank">
                      {chunks}
                    </Link>
                  ),
                  terms: (chunks) => (
                    <Link className="underline" href="/legal/terms-of-service" target="_blank">
                      {chunks}
                    </Link>
                  ),
                })}
                label={t('acceptConditions.title')}
                name="acceptConditions"
                required
              />

              {isUnder18State && (
                <FormCheckbox
                  description={t.rich('acceptParent.description', {
                    eventLabel: 'HVN - Amsterdam',
                    fullName: form.watch('fullName') || '<Name>',
                  })}
                  label={t('acceptParent.title')}
                  name="acceptParent"
                  required
                />
              )}

              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Submitting...' : t('submit')}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default EventParticipationForm
