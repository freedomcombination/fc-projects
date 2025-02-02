import { Link } from '@fc/intl/navigation'

import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('HomePage')

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold dark:text-red-100 text-red-500">{t('title')}</h1>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}
