import { FaEnvelope, FaShieldAlt, FaUserShield } from 'react-icons/fa'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const PrivacyPolicy = () => {
  const t = useTranslations('legalPages.privacy')

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4 animate-fade-in">{t('title')}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t('content')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-background border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <FaUserShield className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold">{t('userInformation.title')}</h2>
          </div>
          <p className="text-muted-foreground">{t('userInformation.description')}</p>
        </div>

        <div className="bg-background border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-2xl font-semibold">{t('userRights.title')}</h2>
          </div>
          <p className="text-muted-foreground">{t('userRights.description')}</p>
        </div>
      </div>

      <div className="bg-background border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <FaEnvelope className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-2xl font-semibold">{t('contact.title')}</h2>
        </div>
        <p className="text-muted-foreground">
          {t('contact.description')}
          <Link
            className="text-primary hover:underline font-medium inline-flex items-center"
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
