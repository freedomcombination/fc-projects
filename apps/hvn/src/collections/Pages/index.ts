import { ContainerBlockConfigs } from '@fc/ui/blocks/common/container-block-list'
import { NonContainerBlockConfigs } from '@fc/ui/blocks/common/non-container-block-list'

import type { CollectionConfig } from 'payload'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { slugField } from '@/fields/slug/index'
import { hero } from '@/heros/config'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

export const Pages: CollectionConfig<'pages'> = {
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          collection: 'pages',
          req,
          slug: typeof data?.slug === 'string' ? data.slug : '',
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        collection: 'pages',
        req,
        slug: typeof data?.slug === 'string' ? data.slug : '',
      }),
    useAsTitle: 'title',
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    slug: true,
    title: true,
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              admin: {
                initCollapsed: true,
              },
              blocks: [...ContainerBlockConfigs, ...NonContainerBlockConfigs],
              name: 'layout',
              required: true,
              type: 'blocks',
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            OverviewField({
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
              titlePath: 'meta.title',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              descriptionPath: 'meta.description',

              // if the `generateUrl` function is configured
              hasGenerateFn: true,
              // field paths to match the target field for data
              titlePath: 'meta.title',
            }),
          ],
          label: 'SEO',
          name: 'meta',
        },
      ],
      type: 'tabs',
    },
    {
      admin: {
        position: 'sidebar',
      },
      name: 'publishedAt',
      type: 'date',
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    afterDelete: [revalidateDelete],
    beforeChange: [populatePublishedAt],
  },
  slug: 'pages',
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
