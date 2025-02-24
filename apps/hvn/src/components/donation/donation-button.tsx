'use client'
import { FC, useEffect } from 'react'

import { Button, ButtonProps } from '@fc/ui/base/button'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

type DonateButtonProps = {
  amount: number
  email: string
  type: 'monthly' | 'one-time'
} & Omit<ButtonProps, 'type' | 'email'>

const DonateButton: FC<DonateButtonProps> = ({ amount, children, email, type, ...props }) => {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()
  const status = searchParams.get('status')
  useEffect(() => {
    if (status === 'success') {
      toast.success('Payment Successful', { description: 'Thank you for your donation!' })
    } else if (status === 'cancel') {
      toast.error('Payment Canceled', { description: 'Your donation was not completed.' })
    }
  }, [status])

  const handleDonate = async () => {
    const successUrl = `${window.location.origin}${path}?status=success`
    const cancelUrl = `${window.location.origin}${path}?status=cancel`

    const response = await fetch('/api/donate', {
      body: JSON.stringify({ amount, cancelUrl, email, successUrl, type }),
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
