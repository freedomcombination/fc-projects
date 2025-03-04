'use client'

import { useForm } from 'react-hook-form'

import { Button } from '@fc/ui/base/button'
import { Form } from '@fc/ui/base/form'
import { FormCheckbox } from '@fc/ui/components/form/form-checkbox'
import { FormInput } from '@fc/ui/components/form/form-input'
import { FormPhoneInput } from '@fc/ui/components/form/form-phone-input'
import { FormSelect } from '@fc/ui/components/form/form-select'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

import { cityOptions } from './cityOptions'
import { ApplicationFormData, applicationFormSchema } from './schema'

export const ApplicationForm = () => {
  const schema = applicationFormSchema

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

  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormCheckbox label="I am under 18 years old" name="isUnder18" />

          <FormInput label="Full Name" name="fullName" />
          <FormInput label="Email" name="email" />
          <FormPhoneInput label="Phone" name="phone" />
          <FormSelect
            label="City"
            name="city"
            options={Object.entries(cityOptions).flatMap(([province, cities]) =>
              cities.map((city) => ({ label: `${province} - ${city}`, value: city })),
            )}
          />
          <FormSelect
            label="Event"
            name="event"
            options={[{ label: 'Harmonie van Nederland - Amsterdam', value: 'hvn_amsterdam' }]}
          />
          <FormInput label="Message" name="message" />
          {isUnder18 && (
            <>
              <FormInput label="Parent Full Name" name="parentFullName" />
              <FormInput label="Parent Email" name="parentEmail" />
              <FormInput label="Parent Phone" name="parentPhone" />
            </>
          )}
          {isUnder18 && (
            <FormCheckbox
              description={
                <span>
                  I agree to the{' '}
                  <Link className="underline" href="/terms-of-service" target="_blank">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link className="underline" href="/privacy-policy" target="_blank">
                    Privacy Policy
                  </Link>
                </span>
              }
              label="Accept Conditions"
              name="acceptConditions"
            />
          )}
          <FormCheckbox
            description={`${fullName}, ${event} etkinliğine katılacaktır. Velisi olarak başvuru şartlarını kabul ediyorum ve çocuğumun katılımına onay veriyorum.`}
            label="Accept Parent"
            name="acceptParent"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
