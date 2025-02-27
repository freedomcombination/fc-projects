import { BasePayload, Endpoint } from 'payload'

import applicationForm from './forms/application-form'
import contactForm from './forms/contact-form'

export const seed = async (payload: BasePayload) => {
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

export const seedEndpoint: Endpoint = {
  handler: async ({ payload, user }) => {
    if (!user /* || user.role !== 'admin'*/) {
      return Response.json({ message: 'Unauthorized' }, { status: 401 })
    }

    await seed(payload)
    return Response.json({ message: 'Seeding-forms completed.' })
  },
  method: 'get',
  path: '/seed-forms',
}
