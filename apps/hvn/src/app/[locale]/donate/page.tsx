import { Hero } from '@/components/hero/Hero'
import { Button } from '@fc/ui/base/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@fc/ui/base/card'
import { Label } from '@radix-ui/react-dropdown-menu'
import { CheckCircle, Home } from 'lucide-react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'

type DonatePageProps = {
  searchParams: Promise<{
    status: string
    email: string
    amount: string
    type: 'one-time' | 'monthly'
  }>
}

const DonatePage = async ({ searchParams }: DonatePageProps) => {
  const { status, email, amount, type } = await searchParams

  if (!status) {
    redirect('/')
  }

  const success = status === 'success'

  return (
    <main className="relative">
      {/* Hero section */}
      <section className="relative min-h-screen bg-gradient-to-b from-primary to-secondary" id="home">
        <Hero />
        <div className="absolute z-10 top-0 left-0 right-0 bottom-0  flex justify-center items-center">
          <Card className="w-96 bg-white shadow rounded-lg">
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                {success ? (
                  <CheckCircle className="w-32 h-32 p-6 text-green-500" />
                ) : (
                  <img
                    alt="Harmonie van Nederland Logo"
                    className="rounded-full object-cover h-32"
                    src="/images/logo.png"
                  />
                )}
              </CardTitle>
              {success ? (
                <CardDescription className="text-center text-xl  text-green-500">Teşekkürler</CardDescription>
              ) : (
                <CardDescription className="text-center text-xl  text-red-500">İşlem iptal edildi</CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col w-full rounded-lg bg-muted p-4">
                <Label className="text-md font-medium mb-6">Bağış detaylar:</Label>

                {amount && (
                  <Label className="text-sm font-medium flex justify-between text-muted-foreground">
                    Bağış miktarı: <span className="font-semibold text-primary">{amount} €</span>
                  </Label>
                )}
                {type && (
                  <Label className="text-sm font-medium flex justify-between text-muted-foreground">
                    Bağış süresi:{' '}
                    <span className="font-semibold text-primary">{type === 'one-time' ? 'Tek seferlik' : 'Aylık'}</span>
                  </Label>
                )}
                {email && (
                  <Label className="text-sm font-medium flex justify-between text-muted-foreground">
                    E-posta: <span className="font-semibold text-primary">{email}</span>
                  </Label>
                )}
              </div>
              {success ? (
                <p className="text-muted-foreground text-center pt-1">
                  Değerli desteğiniz için teşekkür ederiz. Bağışınız başarıyla gerçekleştirildi. Yardımlarınız sayesinde
                  daha fazla kişiye ulaşabileceğiz.
                </p>
              ) : (
                <p className="text-muted-foreground text-center pt-1">
                  Bağış işlemi tamamlanmadı. Lütfen daha sonra tekrar deneyiniz.
                </p>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/">
                <Button className="text-white p-5" variant={'default'} size={'lg'}>
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
