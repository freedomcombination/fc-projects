'use client'

import { Box, ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { NextIntlClientProvider } from 'next-intl'

import messages from '../../../../../../packages/intl/messages/en.json'
import EventParticipationForm from '../../../components/EventParticipationForm/EventParticipationForm'

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="mb-4 text-2xl">Dev: Event Participation Form</h1>
      <ChakraProvider value={defaultSystem}>
        <NextIntlClientProvider locale="en" messages={messages}>
          <Box bg="gray.50" p={4}>
            <EventParticipationForm />
          </Box>
        </NextIntlClientProvider>
      </ChakraProvider>
    </main>
  )
}
