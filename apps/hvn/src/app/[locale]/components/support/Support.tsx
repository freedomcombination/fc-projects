import React from 'react'

import { useTranslations } from 'next-intl'
import DonationForm from '../donation/donation-form'

export const Support = () => {
  const t = useTranslations()

  return (
    <section className="py-16 bg-gray-100" id="support">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-4">{t('Header.support')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <p className="text-lg mb-2">{t('support.value')}</p>
            <a
              className="inline-block bg-primary  text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark transition"
              href="https://www.ing.nl/payreq/m/?trxid=8TRJ718Cfr0xhFhMkq47svD13DsxL7L7"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('support.bankTransfer')}
            </a>
            <div className="mt-2">
              <img alt="ANBI Logo" className="mx-auto mb-1" src="/images/anbi-logo.png" style={{ maxWidth: '100px' }} />
              <p className="text-sm text-gray-700">
                <strong>Stichting Wees de Stem voor Vrijheid </strong>
                <br />
                <strong> (Freedom Combination) </strong>
                <br />
                IBAN: NL79INGB0103801499
                <br />
                BIC: INGBNL2A
              </p>
            </div>
            <p className="mt-2 text-sm text-gray-500">{t('support.improvement')}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <DonationForm />
          </div>
        </div>

      </div>
    </section>
  )
}
