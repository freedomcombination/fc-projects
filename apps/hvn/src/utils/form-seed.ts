import { BasePayload } from 'payload'

import { applicationForm } from './forms/application-form'
import { contactForm } from './forms/contact-form'

export const formSeed = async (payload: BasePayload) => {
  console.log('Seeding forms collection...')

  const formEntries = [applicationForm, contactForm]

  for (const entry of formEntries) {
    const existingForm = await payload.find({
      collection: 'forms',
      where: { title: { equals: entry.title } },
    })

    if (existingForm.docs.length > 0 && existingForm.docs[0]?.id) {
      await payload.update({
        collection: 'forms',
        data: entry,
        id: existingForm.docs[0].id,
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
