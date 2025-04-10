import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
}
