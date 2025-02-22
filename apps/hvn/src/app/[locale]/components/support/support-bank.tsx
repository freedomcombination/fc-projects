import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SupportBank() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="Stichting Logo"
            className="h-16 w-16 rounded-full object-cover shadow-md"
          />
          <div>
            <h3 className="text-xl font-bold">Stichting Wees de Stem voor Vrijheid</h3>
            <p className="text-sm text-muted-foreground">(Freedom Combination)</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">IBAN</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded bg-muted p-2">NL79INGB0103801499</code>
            <Button variant="ghost" size="icon" onClick={() => copyToClipboard("NL79INGB0103801499")}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">BIC</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded bg-muted p-2">INGBNL2A</code>
            <Button variant="ghost" size="icon" onClick={() => copyToClipboard("INGBNL2A")}>
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

