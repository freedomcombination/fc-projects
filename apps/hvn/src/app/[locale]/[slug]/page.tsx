import { cache } from 'react'

import { redirect } from '@fc/intl/navigation'
import { type CmsBlock, RenderBlocks } from '@fc/ui/blocks/RenderBlocks'

import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload, TypedLocale } from 'payload'

import { LivePreviewListener } from '@/components/LivePreviewListener'
import { homeStatic } from '@/data/homeStatic'
import { RenderHero } from '@/heros/RenderHero'
import { LOCALES } from '@/i18n/locales'
import { generateMeta } from '@/utilities/generateMeta'

type Args = {
  params: Promise<{
    locale: TypedLocale
    slug: string
  }>
}

const queryPageBySlug = cache(
  async ({ draft, locale, slug }: { locale: TypedLocale; slug: string; draft: boolean }) => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'pages',
      draft,
      limit: 1,
      locale,
      overrideAccess: draft,
      pagination: false,
      where: { slug: { equals: slug } },
    })

    return result.docs?.[0] || null
  },
)

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })

  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
    where: { slug: { not_in: ['announcements'] } },
  })

  const slugs = pages.docs?.map(({ slug }) => slug)

  const params = []

  for (const locale of LOCALES) {
    for (const slug of slugs || []) {
      params.push({ locale, slug })
    }
  }

  return params
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { locale, slug } = await params
  const page = await queryPageBySlug({ draft: false, locale, slug })

  return generateMeta({ doc: page })
}

export default async function Page({ params }: Args) {
  const { locale, slug } = await params
  const { isEnabled: draft } = await draftMode()

  let page = await queryPageBySlug({ draft, locale, slug })

  if (!page && slug === 'home') {
    page = homeStatic as unknown as typeof page
  }

  if (!page) {
    return redirect({ href: '/', locale })
  }

  const { hero, layout } = page as unknown as { hero: object; layout: CmsBlock[] }

  return (
    <article className="pb-24 pt-16">
      {draft && <LivePreviewListener />}

      <RenderHero type="highImpact" {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}
