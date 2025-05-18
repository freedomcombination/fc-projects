import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { getMe } from '@/utilities/getMe'

export default async function FormApplicationsPage() {
  const payload = await getPayload({ config: configPromise })

  await getMe({ nullUserRedirect: '/en' })

  const form = await payload.find({
    collection: 'form-submissions',
    limit: 100,
  })

  const formConfig = form.docs.find((doc) => doc.form.title === 'Application Form')?.form
  const fields = formConfig?.fields?.map((field) => field.blockName) as string[]

  // Extract formData from form.docs
  type FormField = string
  type FormDataRow = { id: string } & { [key: string]: string }

  const formData: FormDataRow[] = form.docs.map((doc: any) => {
    const row: { [key: string]: string } = {}

    fields.forEach((field: FormField) => {
      const found = doc.submissionData?.find((item: any) => item.field === field)
      row[field] = found ? found.value : ''
    })

    return row as FormDataRow
  })

  return (
    <main className="relative">
      <section className="container mx-auto mt-16 px-4">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              {fields?.map((field, index) => (
                <th className="break-all border border-gray-300 p-2" key={index}>
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => {
              return (
                <tr key={index}>
                  {Object.values(data).map((value, index) => (
                    <td className="break-all border border-gray-300 px-2" key={index}>
                      {value}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </main>
  )
}
