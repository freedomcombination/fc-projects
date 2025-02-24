// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import nodemailer from 'nodemailer'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { stripePlugin } from '@payloadcms/plugin-stripe'
import { fileURLToPath } from 'url'

import { Donations } from './collections/Donations'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
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
  collections: [Users, Media, Donations],
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
      stripeSecretKey: process.env.STRIPE_SECRET_KEY as string,
      stripeWebhooksEndpointSecret: process.env.STRIPE_WEBHOOKS_SECRET as string,
      //   isTestKey: process.env.NODE_ENV !== 'production',
      rest: false,
      webhooks: stripeWebhookHandler,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, '../../../packages/types/payload-types.ts'),
  },
})
