import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  description: 'Culturen komen samen, talenten worden ontdekt',
  images: [{ url: `${process.env.NEXT_PUBLIC_SERVER_URL}/hvn-OG.webp` }],
  siteName: 'Harmonie van Nederland',
  title: 'Harmonie van Nederland',
  type: 'website',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
