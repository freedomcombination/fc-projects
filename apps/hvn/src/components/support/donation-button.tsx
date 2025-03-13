'use client'

import { FC } from 'react'

import { usePathname, useRouter } from '@fc/intl/navigation'
import { Button } from '@fc/ui/base/button'

import { toast } from 'sonner'

type DonateButtonProps = {
  amount: number
  email: string
  type: 'monthly' | 'one-time'
} & Omit<React.ComponentProps<typeof Button>, 'type' | 'email'>

const DonateButton: FC<DonateButtonProps> = ({ amount, children, email, type, ...props }) => {
  const router = useRouter()
  const path = usePathname()

  const handleDonate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const returnUrl = `${window.location.origin}${path}`

    const response = await fetch('/api/donate', {
      body: JSON.stringify({ amount, email, returnUrl, type }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    if (!response.ok) {
      toast.error('Payment request failed', { description: 'Something went wrong' })
      return
    }

    const data = await response.json()
    console.log(data)
    if (data.url) {
      router.push(data.url)
    }
  }

  return (
    <Button onClick={handleDonate} {...props}>
      {children}
    </Button>
  )
}

export default DonateButton
