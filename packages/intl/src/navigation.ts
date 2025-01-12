// Lightweight wrappers around Next.js' navigation APIs

import { createNavigation } from 'next-intl/navigation'

import { routing } from './routing'

// that will consider the routing configuration
const navigation = createNavigation(routing)

export const { useRouter, usePathname, getPathname, permanentRedirect, redirect, Link } = navigation
