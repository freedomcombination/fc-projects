// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'

import { Page } from '@fc/config-payload/blocks/Page'
import { Users } from '@fc/config-payload/blocks/Users'
import { Media } from '@fc/config-payload/blocks/Media'
import { Blogs } from '@fc/config-payload/blocks/Blogs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    defaultLocale: 'en',
    fallback: true,
    locales: ['en', 'nl', 'tr'],
  },
  collections: [Users, Media, Blogs, Page],
  editor: lexicalEditor(),
  email: nodemailerAdapter({
    defaultFromAddress: 'info@freedomcombination.com',
    defaultFromName: 'Freedom Combination',
    // Any Nodemailer transport
    transport: nodemailer.createTransport({
      auth: {
        pass: process.env.EMAIL_PASS,
        user: 'info@freedomcombination.com',
      },
      host: 'mail.privateemail.com',
      port: 465,
    }),
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, '../../../packages/types/payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL as string,
  }),
  sharp,
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
})
