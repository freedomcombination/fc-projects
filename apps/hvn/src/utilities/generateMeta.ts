import type { Metadata } from 'next'

import type { Config, Media, Page /*, Post*/ } from '@/payload-types' // '@/payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL as string

  let url = serverUrl + '/hvn-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    // TODO: image.sizes doesn't exist, remove if not needed
    // const ogUrl = image.sizes?.og?.url
    const ogUrl = undefined

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: { doc: Partial<Page> /*| Partial<Post>*/ | null }): Promise<Metadata> => {
  const { doc } = args

  const ogImage = getImageURL(doc?.meta?.image)

  const title = doc?.meta?.title ? doc?.meta?.title + ' | Harmonie van Nederland' : 'Harmonie van Nederland'

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  }
}
