'use client'

import { useEffect } from 'react'
import { useState } from 'react'

import { Button } from '@fc/ui/base/button'

import { Loader, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <Button className="rounded-full" size={'icon'}>
        <Loader className="animate-spin" />
      </Button>
    )

  return (
    <Button className="rounded-full" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} size={'icon'}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  )
}
