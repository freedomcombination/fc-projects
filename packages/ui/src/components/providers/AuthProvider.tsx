'use client'

import React, { createContext, useState } from 'react'

import { useLoginMutation } from '@fc/codegen/generates'
import type { User } from '@fc/types/payload-types'

import type { Permissions } from 'payload'

const Context = createContext({})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<null | User>()
  const [permissions, setPermissions] = useState<null | Permissions>(null)

  const loginMutation = useLoginMutation()

  return (
    <Context.Provider
      value={{
        loginMutation,
        permissions,
        setPermissions,
        setUser,
        user,
      }}
    >
      {children}
    </Context.Provider>
  )
}
