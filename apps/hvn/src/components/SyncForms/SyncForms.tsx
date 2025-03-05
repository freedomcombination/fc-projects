'use client'

import { useState } from 'react'

export function SyncForms() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

  const updateForms = async () => {
    setIsLoading(true)
    try {
      await fetch('/next/seed', {
        method: 'POST',
      })
      setIsSuccess(true)
    } catch (err: any) {
      setError(err?.message || 'Unknown error')
    }
    setIsLoading(false)
  }

  return (
    <button disabled={isLoading || isSuccess} onClick={updateForms} type="button">
      {isLoading ? 'Syncing...' : isSuccess ? 'Success' : 'Sync Forms'} {error && <span>{error}</span>}
    </button>
  )
}
