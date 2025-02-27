
import type { ViewDescriptionServerProps } from 'payload'

import { seed } from '@/utils/form-seed'

export function UpdateForms(props: ViewDescriptionServerProps) {
  const updateForms = async () => {
    await seed(props.payload)
  }

  return (
    <div>
      To update forms from seed, <span className='cursor-pointer' onClick={updateForms}>click here</span>.
    </div>
  )
}
