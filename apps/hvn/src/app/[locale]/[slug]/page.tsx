import React, { cache } from 'react'

import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'

const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  _status: 'published',

  hero: {
    links: [],

    richText: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 9,
                mode: 'normal',
                style: '',
                text: 'this is one',
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            type: 'heading',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    },

    type: 'none',
  },

  layout: [
    {
      blockType: 'section',
      id: '67cda30959f8f1edcb32b676',
      sectionName: 'about',
    },

    {
      blockType: 'formBlock',

      enableIntro: true,
      form: {
        confirmationMessage: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Okey we got it',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                textStyle: '',
                type: 'paragraph',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },

        confirmationType: 'message',
        createdAt: '2025-02-26T05:21:07.818Z',
        emails: [],

        fields: [
          {
            blockType: 'text',
            id: '67bea4590dbe2cd394a7ec95',
            label: 'Name',
            name: 'name',
          },

          {
            blockType: 'text',
            id: '67bea4690dbe2cd394a7ec97',
            label: 'E mail',
            name: 'email',
          },

          {
            blockType: 'textarea',
            id: '67bea4790dbe2cd394a7ec99',
            label: 'Mesajiniz',
            name: 'message',
          },
        ],

        id: '67bea4c382ae54d7ccf70aa2',

        redirect: {},
        submitButtonLabel: 'Günder',
        title: 'Contact Form',
        updatedAt: '2025-02-26T05:21:07.818Z',
      },
      id: '67cd94350cfef46ca1be0420',
    },

    {
      blockType: 'section',
      id: '67cda45926915f6b6cd9a94f',
      sectionName: 'hero',
    },

    {
      blockType: 'content',

      columns: [
        {
          enableLink: true,

          id: '67cd944b0cfef46ca1be0424',
          link: {
            appearance: 'outline',
            label: 'trte',
            type: 'reference',
          },

          richText: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'retert',
                      type: 'text',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  textStyle: '',
                  type: 'paragraph',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'root',
              version: 1,
            },
          },
          size: 'twoThirds',
        },

        {
          id: '67cd9ea659f8f1edcb32b674',

          link: {
            appearance: 'default',
            type: 'reference',
          },

          richText: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'ertertrtetre',
                      type: 'text',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  textStyle: '',
                  type: 'paragraph',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              type: 'root',
              version: 1,
            },
          },
          size: 'oneThird',
        },
      ],
      id: '67cd94490cfef46ca1be0422',
    },
  ],
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home' } = await paramsPromise

  let page: RequiredDataFromCollectionSlug<'pages'> | null

  page = await queryPageBySlug({
    slug,
  })

  // Remove this code once your website is seeded
  if (!page && slug === 'home') {
    page = homeStatic
  }

  if (!page) {
    return redirect('/')
  }

  const { hero, layout } = page

  return (
    <article className="pt-16 pb-24">
      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
