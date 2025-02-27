'use client'

import { Mail, MapPin, Phone } from 'lucide-react'

export interface ContactProps {
  phone?: string
  email?: string
  address?: string
  title?: string
}

export function Contact({ address, email, phone, title }: ContactProps) {
  return (
    <div className="p-12 text-center w-full">
      <h2 className="mb-16 text-3xl font-semibold text-primary">{title}</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-4">
          <a className="flex flex-col items-center space-y-4 hover:text-primary" href={`tel:${phone}`}>
            <Phone className="h-12 w-12 text-primary" />
            {phone}
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <a className="flex flex-col items-center space-y-4 hover:text-primary" href={`mailto:${email}`}>
            <Mail className="h-12 w-12 text-primary" />
            {email}
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <span className="flex flex-col items-center space-y-4 hover:text-primary">
            <MapPin className="h-12 w-12 text-primary" />
            {address}
          </span>
        </div>
      </div>
    </div>
  )
}
