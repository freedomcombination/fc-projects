'use client'
import React from 'react'

import { useRouter } from '@fc/intl/navigation'

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'

import { getClientSideURL } from '@/utilities/getURL'

export const LivePreviewListener: React.FC = () => {
  const router = useRouter()
  return <PayloadLivePreview refresh={router.refresh} serverURL={getClientSideURL()} />
}
