import { Copy, Landmark } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function SupportBank() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex flex-col items-center gap-6 ">
          <img
            src="/images/logo.png"
            alt="Stichting Logo"
            className="rounded-full object-cover shadow-md h-24"
          />
          <div>
            <h3 className="text-lg font-bold">Stichting Wees de Stem voor Vrijheid</h3>
            <p className="text-sm text-muted-foreground">(Freedom Combination)</p>
          </div>
        </CardTitle>
      </CardHeader>
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
              <Button variant="ghost" className="items-center flex">
                <img
                  src="/images/anbi-logo.png"
                  alt="ANBI Logo"
                  className="h-12 object-cover shadow-md"
                /> Banka yolu ile gönderin.
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
