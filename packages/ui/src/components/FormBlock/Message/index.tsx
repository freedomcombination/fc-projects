import React from 'react'

import { Width } from '@fc/ui/components/FormBlock/Width'
import RichText from '@fc/ui/components/RichText'

import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export const Message: React.FC<{ message: DefaultTypedEditorState }> = ({ message }) => {
  return (
    <Width className="my-12" width="100">
      {message && <RichText data={message} />}
    </Width>
  )
}
