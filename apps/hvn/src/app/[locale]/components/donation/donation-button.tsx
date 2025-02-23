'use client'
import { FC, useEffect } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

import { Button, ButtonProps } from '@/components/ui/button'

type DonateButtonProps = {
  amount: number
  email: string
  type: 'monthly' | 'one-time'
} & Omit<ButtonProps, 'type' | 'email'>

const DonateButton: FC<DonateButtonProps> = ({ amount, children, email, type, ...props }) => {
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

    const data = await response.json()
    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <Button onClick={handleDonate} {...props}>
      {children}
    </Button>
  )
}

export default DonateButton
