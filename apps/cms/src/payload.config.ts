// storage-adapter-import-placeholder

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Blogs } from './collections/Blogs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    /*
  components: {
      / The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      / Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['@/components/BeforeLogin'],
      / The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      / Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    */
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Blogs],
  editor: lexicalEditor(),
  /*
    features: () => {
        return [
          ParagraphFeature(),
          UnderlineFeature(),
          BoldFeature(),
          ItalicFeature(),
          LinkFeature({
            enabledCollections: ['pages', 'posts'],
            fields: ({ defaultFields }) => {
              const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
                if ('name' in field && field.name === 'url') return false
                return true
              })

              return [
                ...defaultFieldsWithoutUrl,
                {
                  name: 'url',
                  type: 'text',
                  admin: {
                    condition: ({ linkType }) => linkType !== 'internal',
                  },
                  label: ({ t }) => t('fields:enterURL'),
                  required: true,
                },
              ]
            },
          }),
        ]
      },
    */
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, '../../../packages/types/payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  // cors: [getServerSideURL()].filter(Boolean),
  /*
  / The 'globals' array contains components that are used across the entire site.
  / These components, like 'Header' and 'Footer', are meant to be unique and consistent
  / throughout the application. This means that the same instance of these components
  / will be rendered on every page, providing a cohesive user experience.
  / If you wish to add more global components, simply include them in this array.
  globals: [Header, Footer],
  */
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
