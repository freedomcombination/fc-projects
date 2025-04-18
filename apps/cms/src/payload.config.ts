import { Blogs } from '@fc/config-payload/collections/Blogs'
import { Media } from '@fc/config-payload/collections/Media'
import { Page } from '@fc/config-payload/collections/Page'
import { Users } from '@fc/config-payload/collections/Users'

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

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  collections: [Users, Media, Blogs, Page],
  db: mongooseAdapter({
    url: process.env.DATABASE_URL as string,
  }),
  editor: lexicalEditor(),
  ...(process.env.NODE_ENV === 'production' && {
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
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, '../../../packages/types/payload-types.ts'),
  },
})
