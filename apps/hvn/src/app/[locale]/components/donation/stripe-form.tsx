'use client'

import type React from 'react'
import { useState } from 'react'

import { CreditCard, Lock, Wallet } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

import DonationButton from './donation-button'

const amounts = [
  { label: '€ 10', value: '10' },
  { label: '€ 25', value: '25' },
  { label: '€ 50', value: '50' },
  { label: '€ 100', value: '100' },
  { label: '€ 250', value: '250' },
  { label: '€ 500', value: '500' },
]

interface FormData {
  email: string
  customAmount: string
  frequency: 'one-time' | 'monthly'
}

export function SupportStripe() {
  const [formData, setFormData] = useState<FormData>({
    customAmount: '',
    email: '',
    frequency: 'one-time',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Destekleriniz bizim için çok değerli!</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
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
            <div className="grid grid-cols-3 gap-2">
              {amounts.map((amount) => (
                <Button
                  className={cn(
                    'w-full p-4 rounded-lg hover:bg-primary/1 text-center text-lg',
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
            <Input
              className="w-full p-4 rounded-lg hover:bg-primary/10 text-center text-lg"
              onChange={(e) => handleCustomAmount(e.target.value)}
              placeholder="Diğer miktar"
              type="number"
              value={formData.customAmount}
            />
          </div>

          <div className="space-y-2">
            <Label>Bağış Sıklığı</Label>
            <RadioGroup
              className="flex gap-4"
              onValueChange={(value: 'one-time' | 'monthly') =>
                setFormData((prev) => ({
                  ...prev,
                  frequency: value,
                }))
              }
              value={formData.frequency}
            >
              <div className="flex space-x-2">
                <RadioGroupItem id="one-time" value="one-time" />
                <Label htmlFor="one-time">Tek Seferlik</Label>
              </div>
              <div className="flex space-x-2">
                <RadioGroupItem id="monthly" value="monthly" />
                <Label htmlFor="monthly">Aylık</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Kabul edilen ödeme yöntemleri</Label>
            <div className="grid grid-cols-2 gap-4">
              <Label
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-checked:border-primary"
                htmlFor="card"
              >
                <CreditCard className="mb-3 h-6 w-6" />
                Kredi Kartı
              </Label>
              <Label
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-checked:border-primary"
                htmlFor="ideal"
              >
                <Wallet className="mb-3 h-6 w-6" />
                iDEAL
              </Label>
            </div>
          </div>

          <DonationButton
            amount={Number(formData.customAmount)}
            className="w-full text-white"
            email={formData.email}
            type={formData.frequency}
          >
            <Lock className="mr-2 h-4 w-4" />
            Bağış Yap
          </DonationButton>

          <p className="text-center text-sm text-muted-foreground">Güvenli Ödeme</p>
        </form>
      </CardContent>
    </Card>
  )
}
