"use client"
import { Mail, MapPin, Phone } from "lucide-react"

export interface ContactProps {
  phone?: string
  email?: string
  address?: string
  title?: string
  className?: string
}

export function Contact({
  address = "Merkez Mah. Destek Cad. No:1, İstanbul",
  className,
  email = "info@lotusvdmedia.nl",
  phone = "+90 (212) 555 0000",
  title = "Bize Ulaşın",
}: ContactProps) {
  return (
    <div className="p-12 text-center w-full">
      <h2 className="mb-16 text-3xl font-semibold text-[#B8860B]">{title}</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-4">
          <Phone className="h-12 w-12 text-[#B8860B]" />
          <a className="text-gray-200 hover:text-[#B8860B] transition-colors" href={`tel:${phone}`}>
            {phone}
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <Mail className="h-12 w-12 text-[#B8860B]" />
          <a className="text-gray-200 hover:text-[#B8860B] transition-colors" href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <MapPin className="h-12 w-12 text-[#B8860B]" />
          <span className="text-gray-200">{address}</span>
        </div>
      </div>
    </div>
  )
}

