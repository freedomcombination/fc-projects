import config from '@payload-config'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

import { User } from '@/payload-types'

// Get authenticated user in server components
// TODO: Investigate why getMeUser approach is preferred or is't the same thing under the hood
export const getMe = async (args?: { nullUserRedirect?: string; validUserRedirect?: string }) => {
  const { nullUserRedirect, validUserRedirect } = args || {}

  const payload = await getPayload({ config })
  const requestHeaders = await headers()

  // Authenticate by passing request headers
  const { user } = await payload.auth({ headers: requestHeaders })

  if (validUserRedirect && user) {
    redirect(validUserRedirect)
  }

  if (nullUserRedirect && !user) {
    redirect(nullUserRedirect)
  }

  const cookieStore = await cookies()
  const token = cookieStore.get('payload-token')?.value

  // NOTE: Consider security implications of this approach.
  return { me: user as null | User, token: token || null }
}
