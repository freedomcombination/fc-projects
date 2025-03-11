'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@fc/ui/base/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@fc/ui/base/card'
import { Form } from '@fc/ui/base/form'
import { FormCheckbox } from '@fc/ui/components/form/form-checkbox'
import { FormInput } from '@fc/ui/components/form/form-input'
import { FormSelect } from '@fc/ui/components/form/form-select'
import { FormTextarea } from '@fc/ui/components/form/form-textarea'

import { camelCase } from 'lodash'
import { LinkIcon, Loader2, Send } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { toast } from 'sonner'

import type { Form as FormData } from '../../../payload-types'

interface PayloadFormProps {
  formData: FormData
}

export const PayloadForm: React.FC<PayloadFormProps> = ({ formData }) => {
  const form = useForm<Record<string, string>>()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const formTitle = camelCase(formData.title)
  const t = useTranslations()
  const locale = useLocale()

  const { handleSubmit, reset } = form

  const getLabelFromForm = (name: string, label: string | null | undefined) => {
    const complexKey = `${formTitle}.${name}`

    if (t.has(complexKey)) {
      return t(complexKey)
    }

    return label
  }

  const getLabel = (name: string, label: string | null | undefined) => {
    if (!label) return null // some fields don't have labels

    // first check fields in form namespace
    const formLabel = getLabelFromForm(name, null)
    if (formLabel) {
      return formLabel
    }

    // then check fields in common namespace (name etc)
    if (t.has(name)) {
      return t(name)
    }

    return label // return default label
  }

  const onSubmit: SubmitHandler<Record<string, string>> = (data) => {
    setIsSubmitting(true)
    fetch(`/api/form-submissions`, {
      body: JSON.stringify({
        form: formData.id,
        submissionData: Object.entries(data).map(([name, value]) => ({ field: name, value })),
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
      .then((response) => response.json())
      .then(() => {
        toast(t('thankYou'), {
          description: getLabelFromForm('successDescription', 'Formunuz başarı ile bize ulaştı.'),
          duration: 2500,
        })
        reset()
      })
      .catch((error) => {
        toast.error(t('error'), {
          description: t('somethingWentWrong'),
          duration: 2500,
        })
        console.error('Form gönderimi sırasında hata oluştu:', error)
      })
      .finally(() => setIsSubmitting(false))
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{getLabelFromForm('title', formData.title)}</CardTitle>
            <CardDescription>{getLabelFromForm('description', 'Lütfen formu eksiksiz doldurun.')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {formData.fields?.map((field, index) => {
              const name = ('name' in field ? field.name : '') as string
              const label = getLabel(name as string, 'label' in field ? field.label : null)
              const blockType = field.blockType
              const required = 'required' in field ? !!field.required : false

              return (
                <div className="space-y-2" key={index}>
                  {blockType === 'text' && <FormInput label={label} name={name} required={required} />}

                  {blockType === 'textarea' && <FormTextarea label={label} name={name} required={required} />}

                  {blockType === 'select' && (
                    <FormSelect label={label} name={name} options={field.options!} required={required} />
                  )}

                  {blockType === 'checkbox' && (
                    <div className="flex items-center space-x-2">
                      <FormCheckbox label={label} name={name} required={required} />
                      {name === 'acceptTerms' && (
                        <Link href={`${locale}/legal/terms-of-use`} target="_blank">
                          <LinkIcon className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  )}

                  {blockType === 'email' && <FormInput label={label} name={name} required={required} type="email" />}

                  {blockType === 'number' && <FormInput label={label} name={name} required={required} type="number" />}

                  {/* TODO: Add country select */}
                  {blockType === 'country' && <FormInput label={label} name={name} required={required} />}
                </div>
              )
            })}
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              {isSubmitting ? (
                <span className="flex items-center justify-center text-white">
                  <span className="mr-2">{getLabel('submitting', 'Gönderiliyor')}</span>
                  <Loader2 className="h-5 w-5 animate-spin" />
                </span>
              ) : (
                <span className="flex items-center justify-center text-white">
                  <span className="mr-2">{getLabel('submit', formData.submitButtonLabel || 'Gönder')}</span>
                  <Send className="h-5 w-5" />
                </span>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
