'use client'

import { Link } from '@fc/intl/navigation'
import { Button } from '@fc/ui/base/button'
import { Card, CardContent } from '@fc/ui/base/card'

import { Copy } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function SupportBank() {
  const t = useTranslations('Support')
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card className="rounded-lg">
      <CardContent className="space-y-4">
        <div className="bg-muted p-4">
          <label className="text-muted-foreground text-sm font-medium">IBAN</label>
          <div className="flex items-center gap-2">
            <code className="bg-muted flex-1 rounded p-2">NL79INGB0103801499</code>
            <Button onClick={() => copyToClipboard('NL79INGB0103801499')} size="icon" variant="ghost">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-muted p-4">
          <label className="text-muted-foreground text-sm font-medium">BIC</label>
          <div className="flex items-center gap-2">
            <code className="bg-muted flex-1 rounded p-2">INGBNL2A</code>
            <Button onClick={() => copyToClipboard('INGBNL2A')} size="icon" variant="ghost">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-muted py-4">
          <label className="hidden text-sm font-medium">ANBI</label>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.ing.nl/payreq/m/?trxid=8TRJ718Cfr0xhFhMkq47svD13DsxL7L7"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="flex items-center" variant="ghost">
                {t('bankTransfer')}
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
