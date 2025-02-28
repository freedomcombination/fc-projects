'use client'

import type { ViewDescriptionServerProps } from 'payload'

import { seed } from '@/utils/form-seed'

export function UpdateForms(props: ViewDescriptionServerProps) {
  const updateForms = async () => {
    await seed(props.payload)
  }

  return <button onClick={updateForms}>Seed Forms</button>
}
