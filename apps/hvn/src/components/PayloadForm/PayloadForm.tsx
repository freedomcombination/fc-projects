'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@fc/ui/base/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@fc/ui/base/card'
import { Checkbox } from '@fc/ui/base/checkbox'
import { Input } from '@fc/ui/base/input'
import { Label } from '@fc/ui/base/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@fc/ui/base/select'
import { Textarea } from '@fc/ui/base/textarea'

import { camelCase } from 'lodash'
import { LinkIcon, Send } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { toast } from 'sonner'

import type { Form } from '../../../payload-types'
interface FormProps {
  formData: Form
}

export const PayloadForm: React.FC<FormProps> = ({ formData }) => {
  const { handleSubmit, register, reset } = useForm<Record<string, string>>()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const formTitle = camelCase(formData.title)
  const t = useTranslations()
  const locale = useLocale()

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
    <section className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card className="border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">{getLabelFromForm('title', formData.title)}</CardTitle>
            <CardDescription>{getLabelFromForm('description', 'Lütfen formu eksiksiz doldurun.')}</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              {formData.fields?.map((field, index) => {
                const name = ('name' in field ? field.name : '') as string
                const label = getLabel(name as string, 'label' in field ? field.label : null)
                const blockType = field.blockType
                const required = 'required' in field ? !!field.required : false

                return (
                  <div className="space-y-2" key={index}>
                    {label && blockType !== 'checkbox' && (
                      <Label htmlFor={name}>
                        {label} {required && <span className="text-red-500">*</span>}
                      </Label>
                    )}

                    {blockType === 'text' && <Input id={name} {...register(name)} required={required} />}

                    {blockType === 'textarea' && <Textarea id={name} {...register(name)} rows={5} />}

                    {blockType === 'select' && (
                      <Select {...register(name)} required={required}>
                        <SelectTrigger>
                          <SelectValue placeholder={label} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}

                    {blockType === 'checkbox' && (
                      <div className="flex items-center space-x-2">
                        <Checkbox id={name} {...register(name)} />
                        <Label htmlFor={name}>
                          {label} {required && <span className="text-red-500">*</span>}
                        </Label>
                        {name === 'acceptTerms' && (
                          <Link href={`${locale}/legal/terms-of-use`} target="_blank">
                            <LinkIcon className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    )}

                    {blockType === 'email' && <Input id={name} type="email" {...register(name)} required={required} />}

                    {blockType === 'number' && (
                      <Input id={name} type="number" {...register(name)} required={required} />
                    )}

                    {blockType === 'country' && <Input id={name} {...register(name)} required={required} />}
                  </div>
                )
              })}
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                {isSubmitting ? (
                  <span className="flex items-center justify-center text-white">
                    <span className="mr-2">{getLabel('submitting', 'Gönderiliyor')}</span>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center justify-center text-white">
                    <span className="mr-2">{getLabel('submit', formData.submitButtonLabel || 'Gönder')}</span>
                    <Send className="h-5 w-5" />
                  </span>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  )
}
