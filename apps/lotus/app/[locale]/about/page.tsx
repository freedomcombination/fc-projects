import { Link } from '@fc/intl/navigation'

import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('HomePage')

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-red-500 dark:text-red-100">{t('title')}</h1>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}
