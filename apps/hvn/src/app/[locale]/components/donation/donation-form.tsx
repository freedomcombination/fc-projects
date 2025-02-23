'use client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import DonateButton from './donation-button'

const DonationForm = () => {
  const [amount, setAmount] = useState<number>(10)
  const [type, setType] = useState<'monthly' | 'one-time'>('one-time')
  const [email, setEmail] = useState<string>('')

  return (
    <div className="p-4 border rounded-lg space-y-4">
      <div>
        <Label htmlFor="amount">E-mail</Label>
        <Input id="email" onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
      </div>
      <div>
        <Label htmlFor="amount">Donation Amount (€)</Label>
        <Input id="amount" onChange={(e) => setAmount(Number(e.target.value))} type="number" value={amount} />
      </div>
      <div className="flex space-x-2 flex-row justify-between text-white">
        <div className="flex space-x-2">
          <Button
            className={type !== 'one-time' ? 'text-black' : 'text-white'}
            onClick={() => setType('one-time')}
            variant={type === 'one-time' ? 'default' : 'outline'}
          >
            One-Time
          </Button>
          <Button
            className={type === 'one-time' ? 'text-black' : 'text-white'}
            onClick={() => setType('monthly')}
            variant={type === 'monthly' ? 'default' : 'outline'}
          >
            Monthly
          </Button>
        </div>
        <DonateButton amount={amount} email={email} type={type} />
      </div>
    </div>
  )
}

export default DonationForm
