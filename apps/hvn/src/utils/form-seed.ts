import { BasePayload } from 'payload'

import { applicationForm } from './forms/application-form'
import { contactForm } from './forms/contact-form'

export const formSeed = async (payload: BasePayload) => {
  console.log('Seeding forms collection...')

  const formEntries = [applicationForm, contactForm]

  for (const entry of formEntries) {
    const existingForms = await payload.find({
      collection: 'forms',
      where: { title: { equals: entry.title } },
    })

    const existingForm = existingForms.docs.find((form) => form.title === entry.title)

    if (existingForm) {
      await payload.update({
        collection: 'forms',
        data: entry,
        id: existingForm.id,
      })
    } else {
      await payload.create({
        collection: 'forms',
        data: entry,
      })
    }
  }

  console.log('Seeding completed.')
}
