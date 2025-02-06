import { Button } from '@fc/ui/base/button'

import { useTranslations } from 'next-intl'

import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'

const Page = () => {
  const t = useTranslations('HomePage')

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* Body Section */}
        <section className="container mx-auto py-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold dark:text-red-100 text-red-500">{t('title')}</h1>
            <Button size="sm">Button</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Page
