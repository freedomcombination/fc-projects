'use client'

import { Link } from '@fc/intl/navigation'
import { Button } from '@fc/ui/base/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@fc/ui/base/card'

import { Label } from '@radix-ui/react-dropdown-menu'
import { CheckCircle, Home } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type Props = {
  status: string
  email: string
  amount: string
  type: 'one-time' | 'monthly'
}

const DonationResultCard = ({ amount, email, status, type }: Props) => {
  const t = useTranslations('Donation')
  const success = status === 'success'

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center">
      <Card className="w-96 rounded-lg bg-white shadow">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            {success ? (
              <CheckCircle className="h-32 w-32 p-6 text-green-500" />
            ) : (
              <Image
                alt="Logo"
                className="h-32 rounded-full object-cover"
                height={128}
                src="/images/logo.png"
                width={128}
              />
            )}
          </CardTitle>
          <CardDescription className={`text-center text-xl ${success ? 'text-green-500' : 'text-red-500'}`}>
            {success ? t('thankYou') : t('cancel')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted flex w-full flex-col rounded-lg p-4">
            <Label className="text-md mb-6 font-medium">{t('details')}</Label>
            {amount && (
              <Label className="text-muted-foreground flex justify-between text-sm font-medium">
                {t('amount')} <span className="text-primary font-semibold">{amount} €</span>
              </Label>
            )}
            {type && (
              <Label className="text-muted-foreground flex justify-between text-sm font-medium">
                {t('typeOfDonation')}
                <span className="text-primary font-semibold">{type === 'one-time' ? 'Tek seferlik' : 'Aylık'}</span>
              </Label>
            )}
            {email && (
              <Label className="text-muted-foreground flex justify-between text-sm font-medium">
                {t('email')} <span className="text-primary font-semibold">{email}</span>
              </Label>
            )}
          </div>
          <p className="text-muted-foreground pt-1 text-center">
            {success ? t('thankYouMessage') : t('completeError')}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button className="p-5 text-white" size="lg" variant="default">
              <Home className="mr-2 h-4 w-4" />
              {t('success.backToHome')}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default DonationResultCard
