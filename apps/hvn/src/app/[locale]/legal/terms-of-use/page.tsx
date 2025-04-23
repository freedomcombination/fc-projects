import { FaBook, FaEnvelope, FaGavel } from 'react-icons/fa'

import { Link } from '@fc/intl/navigation'

import { useTranslations } from 'next-intl'

const TermsOfUse = () => {
  const tTerms = useTranslations('legalPages.terms')
  const tPrivacy = useTranslations('legalPages.privacy')

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-primary animate-fade-in mb-4 text-4xl font-bold">{tTerms('title')}</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl">{tTerms('content')}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-background rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex items-center">
            <FaBook className="text-primary mr-4 h-8 w-8" />
            <h2 className="text-2xl font-semibold">{tTerms('userAgreement.title')}</h2>
          </div>
          <p className="text-muted-foreground">{tTerms('userAgreement.description')}</p>
        </div>

        <div className="bg-background rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex items-center">
            <FaGavel className="text-primary mr-4 h-8 w-8" />
            <h2 className="text-2xl font-semibold">{tTerms('responsibilities.title')}</h2>
          </div>
          <p className="text-muted-foreground">{tTerms('responsibilities.description')}</p>
        </div>
      </div>

      <div className="bg-background rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-4 flex items-center">
          <FaEnvelope className="text-primary mr-4 h-8 w-8" />
          <h2 className="text-2xl font-semibold">{tPrivacy('contact.title')}</h2>
        </div>
        <p className="text-muted-foreground">
          {tPrivacy('contact.description')}
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

export default TermsOfUse
