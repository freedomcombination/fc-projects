'use client'

import { FC, useState } from 'react'

import { Button } from '@fc/ui/base/button'
import { Input } from '@fc/ui/base/input'

import { useTranslations } from 'next-intl'

import { Form } from '../../../payload-types'

type ContactFormProps = {
  form: Form
}

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@fc/ui/base/card'
import { Label } from '@fc/ui/base/label'
import { Textarea } from '@fc/ui/base/textarea'

import { Send } from 'lucide-react'

export const ContactForm: FC<ContactFormProps> = ({ form }) => {
  const t = useTranslations('Contact')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // TODO: Use form.id and form-submission endpoint
    console.log('form', form)
    event.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    // Once done, set setIsSubmitting(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{t('us')}</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('name')}</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t('email')}</Label>
            <Input id="email" name="email" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t('message')}</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              name="message"
              placeholder={t('message_placeholder')}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? (
              <span className="flex items-center justify-center text-white">
                <span className="mr-2">{t('sending')}</span>
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            ) : (
              <span className="flex items-center justify-center text-white">
                <span className="mr-2">{t('send')}</span>
                <Send className="h-5 w-5" />
              </span>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
