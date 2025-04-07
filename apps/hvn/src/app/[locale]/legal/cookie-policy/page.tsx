import { FaCookie, FaEnvelope, FaInfoCircle } from 'react-icons/fa'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const CookiePolicy = () => {
  const t = useTranslations('legalPages.cookies')
  const privacyt = useTranslations('legalPages.privacy')

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-primary animate-fade-in mb-4 text-4xl font-bold">{t('title')}</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl">{t('content')}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-background rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex items-center">
            <FaCookie className="text-primary mr-4 h-8 w-8" />
            <h2 className="text-2xl font-semibold">{t('cookieTypes.title')}</h2>
          </div>
          <p className="text-muted-foreground">{t('cookieTypes.description')}</p>
        </div>

        <div className="bg-background rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex items-center">
            <FaInfoCircle className="text-primary mr-4 h-8 w-8" />
            <h2 className="text-2xl font-semibold">{t('userConsent.title')}</h2>
          </div>
          <p className="text-muted-foreground">{t('userConsent.description')}</p>
        </div>
      </div>

      <div className="bg-background rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-primary mr-4 h-8 w-8" />
          <h2 className="text-2xl font-semibold">{privacyt('contact.title')}</h2>
        </div>
        <p className="text-muted-foreground">
          {privacyt('contact.description')}{' '}
          <Link
            className="text-primary inline-flex items-center font-medium hover:underline"
            href="mailto:info@harmonievannederland.com"
          >
            info@harmonievannederland.com
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CookiePolicy
