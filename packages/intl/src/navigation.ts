// Lightweight wrappers around Next.js' navigation APIs

import { ComponentProps, FC } from 'react'

import { createNavigation } from 'next-intl/navigation'
import NextLink from 'next/link'

import { routing } from './routing'

// that will consider the routing configuration
const navigation = createNavigation(routing)

export const { getPathname, permanentRedirect, redirect, usePathname, useRouter } = navigation

const Link = navigation.Link as FC<ComponentProps<typeof NextLink>>

export { Link }
