'use client'
import React from 'react'

import { useRouter } from '@fc/intl/navigation'
import { getClientSideURL } from '@fc/ui/lib/getURL'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'

export const LivePreviewListener: React.FC = () => {
  const router = useRouter()
  return <PayloadLivePreview refresh={router.refresh} serverURL={getClientSideURL()} />
}
