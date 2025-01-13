import { routing } from '@fc/intl/routing'

import createMiddleware from 'next-intl/middleware'

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|nl|tr)/:path*'],
}
