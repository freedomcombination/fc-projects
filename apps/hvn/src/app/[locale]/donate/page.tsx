import { redirect } from 'next/navigation'

import { Hero } from '@/components/hero/Hero'
import DonationResultCard from '@/components/support/DonationResultCard'

type DonatePageProps = {
  searchParams: Promise<{
    status: string
    email: string
    amount: string
    type: 'one-time' | 'monthly'
  }>
}

const DonatePage = async ({ searchParams }: DonatePageProps) => {
  const { amount, email, status, type } = await searchParams

  if (!status) {
    redirect('/')
  }

  return (
    <main className="relative">
      {/* Hero section */}
      <section className="from-primary to-secondary relative min-h-screen bg-gradient-to-b" id="home">
        <Hero />
        <DonationResultCard amount={amount} email={email} status={status} type={type} {...searchParams} />
      </section>
    </main>
  )
}

export default DonatePage
