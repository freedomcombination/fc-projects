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
    <div className="w-full p-12 text-center">
      <h2 className="text-primary mb-16 text-3xl font-semibold">{title}</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-4">
          <a className="hover:text-primary flex flex-col items-center space-y-4" href={`tel:${phone}`}>
            <Phone className="text-primary h-12 w-12" />
            {phone}
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <a className="hover:text-primary flex flex-col items-center space-y-4" href={`mailto:${email}`}>
            <Mail className="text-primary h-12 w-12" />
            {email}
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <span className="hover:text-primary flex flex-col items-center space-y-4">
            <MapPin className="text-primary h-12 w-12" />
            {address}
          </span>
        </div>
      </div>
    </div>
  )
}
