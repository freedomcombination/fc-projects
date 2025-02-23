import { Button } from '@fc/ui/base/button'
import { Card, CardContent, CardHeader, CardTitle } from '@fc/ui/base/card'

import { Copy } from 'lucide-react'

export function SupportBank() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <img alt="Stichting Logo" className="h-16 w-16 rounded-full object-cover shadow-md" src="/images/logo.png" />
          <div>
            <h3 className="text-xl font-bold">Harmonie van Nederland</h3>
            <p className="text-sm text-muted-foreground">(Stichting Wees de Stem voor Vrijheid)</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">IBAN</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded bg-muted p-2">NL79INGB0103801499</code>
            <Button onClick={() => copyToClipboard('NL79INGB0103801499')} size="icon" variant="ghost">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">BIC</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded bg-muted p-2">INGBNL2A</code>
            <Button onClick={() => copyToClipboard('INGBNL2A')} size="icon" variant="ghost">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Sayfamızı size daha iyi hizmet sunmak için sürekli olarak geliştiriyoruz.
        </p>
      </CardContent>
    </Card>
  )
}
