import { Donations } from '@fc/config-payload/blocks/Donations'
import { Media } from '@fc/config-payload/blocks/Media'
import { Page } from '@fc/config-payload/blocks/Page'
import { Users } from '@fc/config-payload/blocks/Users'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { stripePlugin } from '@payloadcms/plugin-stripe'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import nodemailer from 'nodemailer'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { stripeWebhookHandler } from './stripe/webhook'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  collections: [Users, Media, Donations, Page],
  db: mongooseAdapter({
    url: process.env.DATABASE_URL as string,
  }),
  editor: lexicalEditor(),
  email: nodemailerAdapter({
    defaultFromAddress: 'info@harmonievannederland.com',
    defaultFromName: 'Harmonie van Nederland',
    // Any Nodemailer transport
    transport: await nodemailer.createTransport({
      auth: {
        pass: process.env.EMAIL_PASS,
        user: 'info@harmonievannederland.com',
      },
      host: 'mail.privateemail.com',
      port: 465,
    }),
  }),
  localization: {
    defaultLocale: 'en',
    fallback: true,
    locales: ['en', 'nl', 'tr'],
  },
  plugins: [
    payloadCloudPlugin(),
    formBuilderPlugin({
      fields: {
        checkbox: true,
        country: true,
        email: true,
        message: true,
        number: true,
        select: true,
        state: false,
        text: true,
        textarea: true,
      },
    }),
    // storage-adapter-placeholder
    stripePlugin({
      //   isTestKey: process.env.NODE_ENV !== 'production',
      rest: false,
      stripeSecretKey: process.env.STRIPE_SECRET_KEY as string,
      stripeWebhooksEndpointSecret: process.env.STRIPE_WEBHOOKS_SECRET as string,
      webhooks: stripeWebhookHandler,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
})
