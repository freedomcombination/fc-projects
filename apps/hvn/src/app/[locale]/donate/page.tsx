import { Link } from '@fc/intl/navigation'
import { Button } from '@fc/ui/base/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@fc/ui/base/card'

import { Label } from '@radix-ui/react-dropdown-menu'
import { CheckCircle, Home } from 'lucide-react'
import { redirect } from 'next/navigation'

import { Hero } from '@/components/hero/Hero'

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

  const success = status === 'success'

  return (
    <main className="relative">
      {/* Hero section */}
      <section className="from-primary to-secondary relative min-h-screen bg-gradient-to-b" id="home">
        <Hero />
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center">
          <Card className="w-96 rounded-lg bg-white shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                {success ? (
                  <CheckCircle className="h-32 w-32 p-6 text-green-500" />
                ) : (
                  <img
                    alt="Harmonie van Nederland Logo"
                    className="h-32 rounded-full object-cover"
                    src="/images/logo.png"
                  />
                )}
              </CardTitle>
              {success ? (
                <CardDescription className="text-center text-xl text-green-500">Teşekkürler</CardDescription>
              ) : (
                <CardDescription className="text-center text-xl text-red-500">İşlem iptal edildi</CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted flex w-full flex-col rounded-lg p-4">
                <Label className="text-md mb-6 font-medium">Bağış detaylar:</Label>

                {amount && (
                  <Label className="text-muted-foreground flex justify-between text-sm font-medium">
                    Bağış miktarı: <span className="text-primary font-semibold">{amount} €</span>
                  </Label>
                )}
                {type && (
                  <Label className="text-muted-foreground flex justify-between text-sm font-medium">
                    Bağış süresi:{' '}
                    <span className="text-primary font-semibold">{type === 'one-time' ? 'Tek seferlik' : 'Aylık'}</span>
                  </Label>
                )}
                {email && (
                  <Label className="text-muted-foreground flex justify-between text-sm font-medium">
                    E-posta: <span className="text-primary font-semibold">{email}</span>
                  </Label>
                )}
              </div>
              {success ? (
                <p className="text-muted-foreground pt-1 text-center">
                  Değerli desteğiniz için teşekkür ederiz. Bağışınız başarıyla gerçekleştirildi. Yardımlarınız sayesinde
                  daha fazla kişiye ulaşabileceğiz.
                </p>
              ) : (
                <p className="text-muted-foreground pt-1 text-center">
                  Bağış işlemi tamamlanmadı. Lütfen daha sonra tekrar deneyiniz.
                </p>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/">
                <Button className="p-5 text-white" size={'lg'} variant={'default'}>
                  <Home className="mr-2 h-4 w-4" />
                  Ana sayfa
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default DonatePage
