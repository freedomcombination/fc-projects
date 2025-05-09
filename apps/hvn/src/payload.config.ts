import { Donations } from '@fc/config-payload/collections/Donations'
import { Media } from '@fc/config-payload/collections/Media'
import { Users } from '@fc/config-payload/collections/Users'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import nodemailer from 'nodemailer'
import path from 'path'
import { buildConfig, SharpDependency } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Announcements } from './collections/announcements'
import { Pages } from './collections/Pages'
import { LOCALES } from './i18n/locales'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        {
          height: 667,
          label: 'Mobile',
          name: 'mobile',
          width: 375,
        },
        {
          height: 1024,
          label: 'Tablet',
          name: 'tablet',
          width: 768,
        },
        {
          height: 900,
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
        },
      ],
    },
    user: Users.slug,
  },
  collections: [Users, Media, Donations, Pages, Announcements],
  db: mongooseAdapter({
    url: process.env.DATABASE_URL as string,
  }),
  editor: lexicalEditor(),
  ...(process.env.NODE_ENV === 'production' && {
    email: nodemailerAdapter({
      defaultFromAddress: 'info@harmonievannederland.com',
      defaultFromName: 'Harmonie van Nederland',
      // Any Nodemailer transport
      transport: nodemailer.createTransport({
        auth: {
          pass: process.env.EMAIL_PASS,
          user: 'info@harmonievannederland.com',
        },
        host: 'mail.privateemail.com',
        port: 465,
      }),
    }),
  }),
  localization: {
    defaultLocale: 'en',
    fallback: true,
    locales: LOCALES,
  },
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      enabled: true,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
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
      formOverrides: {
        admin: {
          components: {
            Description: '@/components/SyncForms#SyncForms',
          },
        },
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp: sharp as SharpDependency,
})
