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
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  collections: [Users, Media],
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
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, '../../../packages/types/payload-types.ts'),
  },
})
