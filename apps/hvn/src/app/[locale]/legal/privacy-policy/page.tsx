import { FaEnvelope, FaShieldAlt, FaUserShield } from 'react-icons/fa'

import { Link } from '@fc/intl/navigation'

import { useTranslations } from 'next-intl'

const PrivacyPolicy = () => {
  const t = useTranslations('legalPages.privacy')

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-primary animate-fade-in mb-4 text-4xl font-bold">{t('title')}</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl">{t('content')}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-background rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex items-center">
            <FaUserShield className="text-primary mr-4 h-8 w-8" />
            <h2 className="text-2xl font-semibold">{t('userInformation.title')}</h2>
          </div>
          <p className="text-muted-foreground">{t('userInformation.description')}</p>
        </div>

        <div className="bg-background rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex items-center">
            <FaShieldAlt className="text-primary mr-4 h-8 w-8" />
            <h2 className="text-2xl font-semibold">{t('userRights.title')}</h2>
          </div>
          <p className="text-muted-foreground">{t('userRights.description')}</p>
        </div>
      </div>

      <div className="bg-background rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-primary mr-4 h-8 w-8" />
          <h2 className="text-2xl font-semibold">{t('contact.title')}</h2>
        </div>
        <p className="text-muted-foreground">
          {t('contact.description')}
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

export default PrivacyPolicy
