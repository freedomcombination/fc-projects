import { redirect } from '@fc/intl/navigation'

import { Hero } from '@/components/Hero_/Hero'
import DonationResultCard from '@/components/Support_/DonationResultCard'

type DonatePageProps = {
  params: Promise<{
    locale: string
  }>
  searchParams: Promise<{
    status: string
    email: string
    amount: string
    type: 'one-time' | 'monthly'
  }>
}

export default async function DonatePage({ params, searchParams }: DonatePageProps) {
  const { amount, email, status, type } = await searchParams
  const { locale } = await params

  if (!status) {
    redirect({ href: '/', locale })
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
