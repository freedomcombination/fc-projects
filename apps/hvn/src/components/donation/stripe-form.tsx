'use client'

<<<<<<< HEAD:apps/hvn/src/app/[locale]/components/donation/stripe-form.tsx

import { CircleCheck, Lock } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import DonationButton from "./donation-button"

const amounts = [
  { value: "10", label: "€ 10" },
  { value: "25", label: "€ 25" },
  { value: "50", label: "€ 50" },
  { value: "100", label: "€ 100" },
=======
import type React from 'react'
import { useState } from 'react'

import { Button } from '@fc/ui/base/button'
import { Card, CardContent, CardHeader, CardTitle } from '@fc/ui/base/card'
import { Input } from '@fc/ui/base/input'
import { Label } from '@fc/ui/base/label'
import { RadioGroup, RadioGroupItem } from '@fc/ui/base/radio-group'
import { cn } from '@fc/ui/lib/utils'

import { CreditCard, Lock, Wallet } from 'lucide-react'

import DonationButton from './donation-button'

const amounts = [
  { label: '€ 10', value: '10' },
  { label: '€ 25', value: '25' },
  { label: '€ 50', value: '50' },
  { label: '€ 100', value: '100' },
  { label: '€ 250', value: '250' },
  { label: '€ 500', value: '500' },
>>>>>>> 9fa136e4e736ad79623ab0262d2b256f5e416834:apps/hvn/src/components/donation/stripe-form.tsx
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

<<<<<<< HEAD:apps/hvn/src/app/[locale]/components/donation/stripe-form.tsx
=======
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

>>>>>>> 9fa136e4e736ad79623ab0262d2b256f5e416834:apps/hvn/src/components/donation/stripe-form.tsx
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex flex-col items-center gap-6 ">
          <img
            src="/images/logo.png"
            alt="Stichting Logo"
            className="rounded-full object-cover shadow-md h-24"
          />
          <div>
            <h3 className="text-lg font-bold">Stichting Wees de Stem voor Vrijheid</h3>
            <p className="text-sm text-muted-foreground">(Freedom Combination)</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD:apps/hvn/src/app/[locale]/components/donation/stripe-form.tsx
        <form className="space-y-6">
=======
        <form className="space-y-6" onSubmit={handleSubmit}>
>>>>>>> 9fa136e4e736ad79623ab0262d2b256f5e416834:apps/hvn/src/components/donation/stripe-form.tsx
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
            <Input
              type="number"
              placeholder="Diğer miktar"
              className="w-full p-2 text-center"
              value={formData.customAmount}
              onChange={(e) => handleCustomAmount(e.target.value)}
            />
            <div className="grid grid-cols-4 gap-2">
              {amounts.map((amount) => (
                <Button
                  className={cn(
<<<<<<< HEAD:apps/hvn/src/app/[locale]/components/donation/stripe-form.tsx
                    "w-full p-2 rounded-sm hover:bg-primary/1 text-center text-sm",
                    formData.customAmount === amount.value ? "text-white" : "text-black")}
=======
                    'w-full p-4 rounded-lg hover:bg-primary/1 text-center text-lg',
                    formData.customAmount === amount.value ? 'text-white' : 'text-black',
                  )}
                  key={amount.value}
>>>>>>> 9fa136e4e736ad79623ab0262d2b256f5e416834:apps/hvn/src/components/donation/stripe-form.tsx
                  onClick={() => handleAmountClick(amount.value)}
                  type="button"
                  variant={formData.customAmount === amount.value ? 'default' : 'outline'}
                >
                  {amount.label}
                </Button>
              ))}
            </div>
<<<<<<< HEAD:apps/hvn/src/app/[locale]/components/donation/stripe-form.tsx

=======
            <Input
              className="w-full p-4 rounded-lg hover:bg-primary/10 text-center text-lg"
              onChange={(e) => handleCustomAmount(e.target.value)}
              placeholder="Diğer miktar"
              type="number"
              value={formData.customAmount}
            />
>>>>>>> 9fa136e4e736ad79623ab0262d2b256f5e416834:apps/hvn/src/components/donation/stripe-form.tsx
          </div>

          <div className="space-y-2">
            <Label>Bağış Sıklığı</Label>
<<<<<<< HEAD:apps/hvn/src/app/[locale]/components/donation/stripe-form.tsx
            <div className="grid grid-cols-3 gap-2 w-full">
              <Button
                type="button"
                variant={formData.frequency === 'monthly' ? "default" : "outline"}
                className={cn(
                  "w-full p-2 rounded-sm hover:bg-primary/1 text-center text-sm",
                  formData.frequency === 'monthly' ? "text-white" : "text-black")}
                onClick={() => setFormData((prev) => ({
                  ...prev,
                  frequency: 'monthly',
                }))}
              >
                Aylık
              </Button>
              <Button
                type="button"
                variant={formData.frequency === 'one-time' ? "default" : "outline"}
                className={cn(
                  "w-full p-2 rounded-sm hover:bg-primary/1 text-center text-sm",
                  formData.frequency === 'one-time' ? "text-white" : "text-black")}
                onClick={() => setFormData((prev) => ({
                  ...prev,
                  frequency: 'one-time',
                }))}
=======
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
>>>>>>> 9fa136e4e736ad79623ab0262d2b256f5e416834:apps/hvn/src/components/donation/stripe-form.tsx
              >
                Tek Seferlik
              </Button>
              <div className="flex flex-row items-center justify-between">
                <div className="flex justify-center w-full">
                  <img src="/images/ideal-logo.svg" alt="Visa" className="h-10" />
                </div>
                <div className="flex justify-center w-full">
                  <img src="/images/visa-master-logo.svg" alt="Visa" className="h-10" />
                </div>
              </div>
            </div>
          </div>

          <DonationButton
            amount={Number(formData.customAmount)}
            className="w-full text-white"
            email={formData.email}
            type={formData.frequency}
<<<<<<< HEAD:apps/hvn/src/app/[locale]/components/donation/stripe-form.tsx
            className="w-full text-white"

=======
>>>>>>> 9fa136e4e736ad79623ab0262d2b256f5e416834:apps/hvn/src/components/donation/stripe-form.tsx
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
