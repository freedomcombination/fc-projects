'use client'

import { useState } from 'react'

import { Button } from '@fc/ui/base/button'
import { Card, CardContent } from '@fc/ui/base/card'
import { Input } from '@fc/ui/base/input'
import { Label } from '@fc/ui/base/label'
import { cn } from '@fc/ui/lib/utils'

import { CircleCheck, Lock } from 'lucide-react'

import DonationButton from './donation-button'

const amounts = [
  { label: '€ 10', value: '10' },
  { label: '€ 25', value: '25' },
  { label: '€ 50', value: '50' },
  { label: '€ 100', value: '100' },
]

interface FormData {
  email: string
  customAmount: string
  frequency: 'one-time' | 'monthly'
}

export function SupportStripe() {
  const [formData, setFormData] = useState<FormData>({
    customAmount: '25',
    email: process.env.NODE_ENV !== 'production' ? 'B1X3F@example.com' : '',
    frequency: 'monthly',
  })

  const handleAmountClick = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      amount: value,
      customAmount: value,
    }))
  }

  const handleCustomAmount = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      amount: '',
      customAmount: value,
    }))
  }

  return (
    <Card className="rounded-lg">
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              autoComplete="email"
              className="px-2"
              id="email"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              placeholder="E-mail adresiniz"
              type="email"
              value={formData.email}
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <Label>Bağış Miktarı (€)</Label>
            <Input
              className="w-full p-2 text-center"
              onChange={(e) => handleCustomAmount(e.target.value)}
              placeholder="Diğer miktar"
              type="number"
              value={formData.customAmount}
            />
            <div className="grid grid-cols-4 gap-2">
              {amounts.map((amount) => (
                <Button
                  className={cn(
                    'w-full p-2 rounded-sm hover:bg-primary/1 text-center text-sm',
                    formData.customAmount === amount.value ? 'text-white' : 'text-black',
                  )}
                  key={amount.value}
                  onClick={() => handleAmountClick(amount.value)}
                  type="button"
                  variant={formData.customAmount === amount.value ? 'default' : 'outline'}
                >
                  {amount.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Bağış Sıklığı</Label>
            <div className="grid grid-cols-3 gap-2 w-full">
              <Button
                className={cn(
                  'w-full p-2 rounded-sm hover:bg-primary/1 text-center text-sm',
                  formData.frequency === 'monthly' ? 'text-white' : 'text-black',
                )}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    frequency: 'monthly',
                  }))
                }
                type="button"
                variant={formData.frequency === 'monthly' ? 'default' : 'outline'}
              >
                Aylık
              </Button>
              <Button
                className={cn(
                  'w-full p-2 rounded-sm hover:bg-primary/1 text-center text-sm',
                  formData.frequency === 'one-time' ? 'text-white' : 'text-black',
                )}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    frequency: 'one-time',
                  }))
                }
                type="button"
                variant={formData.frequency === 'one-time' ? 'default' : 'outline'}
              >
                Tek Seferlik
              </Button>
              <div className="flex flex-row items-center justify-between">
                <div className="flex justify-center w-full">
                  <img alt="Visa" className="h-10" src="/images/ideal-logo.svg" />
                </div>
                <div className="flex justify-center w-full">
                  <img alt="Visa" className="h-10" src="/images/visa-master-logo.svg" />
                </div>
              </div>
            </div>
          </div>

          <DonationButton
            amount={Number(formData.customAmount)}
            className="w-full text-white"
            email={formData.email}
            size="lg"
            type={formData.frequency}
          >
            <Lock className="mr-2 h-4 w-4" />
            Bağış Yap
          </DonationButton>

          <Label className="flex text-muted-foreground justify-center items-center">
            <CircleCheck className="mr-2 h-4 w-4" />
            Güvenli Ödeme
          </Label>
        </form>
      </CardContent>
    </Card>
  )
}
