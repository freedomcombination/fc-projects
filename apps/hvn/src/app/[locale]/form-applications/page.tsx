import { Suspense } from 'react'

import { getPayload } from 'payload'

import configPromise from '@/payload-config'
import { Form } from '@/payload-types'
import { getMe } from '@/utilities/getMe'

import { Table } from './table'

export default async function FormApplicationsPage() {
  const payload = await getPayload({ config: configPromise })

  await getMe({ nullUserRedirect: '/en' })

  const form = await payload.find({
    collection: 'form-submissions',
    limit: 100,
  })

  const formConfig = form.docs.find((doc) => (doc.form as Form).title === 'Application Form')?.form as Form
  const fields = formConfig?.fields?.map((field) => field.blockName) as string[]

  // Extract formData from form.docs
  type FormField = string
  type FormDataRow = { id: string } & { [key: string]: string }

  const formData: FormDataRow[] = form.docs.map((doc: any) => {
    const row: { [key: string]: string } = {}

    fields?.forEach((field: FormField) => {
      const found = doc.submissionData?.find((item: any) => item.field === field)
      row[field] = found ? found.value : ''
    })

    return row as FormDataRow
  })

  return (
    <main className="relative">
      <section className="container mx-auto my-24 overflow-x-auto">
        <h1 className="mb-4 text-2xl font-bold">Form Applications</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Table fields={fields} formData={formData} />
        </Suspense>
      </section>
    </main>
  )
}
