'use client'
import { useState } from 'react'

import { Button } from '@fc/ui/base/button'

import { CopyIcon } from '@payloadcms/ui/icons/Copy'

export function CopyButton({ code }: { code: string }) {
  const [text, setText] = useState('Copy')

  function updateCopyStatus() {
    if (text === 'Copy') {
      setText(() => 'Copied!')
      setTimeout(() => {
        setText(() => 'Copy')
      }, 1000)
    }
  }

  return (
    <div className="flex justify-end align-middle">
      <Button
        className="flex gap-1"
        onClick={async () => {
          await navigator.clipboard.writeText(code)
          updateCopyStatus()
        }}
        variant={'secondary'}
      >
        <p>{text}</p>
        <CopyIcon />
      </Button>
    </div>
  )
}
