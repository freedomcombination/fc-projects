import type { Config } from '@fc/types/payload-types'

import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'

// TODO: Path?
import configPromise from '../../../../apps/cms/src/payload.config'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    depth,
    slug,
  })

  return global
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  })
