import { getServerSideURL } from '@fc/ui/lib/getURL'
import { mergeOpenGraph } from '@fc/ui/lib/mergeOpenGraph'

import type { Metadata } from 'next'

import type { Config, Media, Page /*, Post*/ } from '../../payload-types' // '@/payload-types'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

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

  const title = doc?.meta?.title ? doc?.meta?.title + ' | Payload Website Template' : 'Payload Website Template'

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
