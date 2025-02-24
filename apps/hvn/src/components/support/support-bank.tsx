import { Button } from '@fc/ui/base/button'
import { Card, CardContent, CardHeader, CardTitle } from '@fc/ui/base/card'

import { Copy, Landmark } from 'lucide-react'
import Link from 'next/link'

export function SupportBank() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card className="rounded-lg">
      <CardContent className="space-y-4">
        <div className="bg-muted p-4">
          <label className="text-sm font-medium text-muted-foreground">IBAN</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded bg-muted p-2">NL79INGB0103801499</code>
            <Button onClick={() => copyToClipboard('NL79INGB0103801499')} size="icon" variant="ghost">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-muted p-4">
          <label className="text-sm font-medium text-muted-foreground">BIC</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded bg-muted p-2">INGBNL2A</code>
            <Button onClick={() => copyToClipboard('INGBNL2A')} size="icon" variant="ghost">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-muted py-4">
          <label className="text-sm font-medium hidden">ANBI</label>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.ing.nl/payreq/m/?trxid=8TRJ718Cfr0xhFhMkq47svD13DsxL7L7"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="items-center flex" variant="ghost">
                <img alt="ANBI Logo" className="h-12 object-cover shadow-md" src="/images/anbi-logo.png" /> Banka yolu
                ile gönderin.
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
