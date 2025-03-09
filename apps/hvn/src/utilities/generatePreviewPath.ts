import { CollectionSlug, PayloadRequest } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  // posts: '/posts',
  pages: '/en/', // localization between intl and payload ll be a problem. in fact, if we use payload for frontend design, we don't need to use intl
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  req: PayloadRequest
}

export const generatePreviewPath = ({ collection, slug }: Props) => {
  const encodedParams = new URLSearchParams({
    collection,
    path: `${collectionPrefixMap[collection]}/${slug}`,
    previewSecret: process.env.PREVIEW_SECRET || '',
    slug,
  })

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
