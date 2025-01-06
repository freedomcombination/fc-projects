'use client'

import { useState } from 'react'

import { useLoginMutation } from '@fc/codegen/generates'

export const LoginForm = () => {
  const { mutate: login } = useLoginMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(
      { identifier: email, password },
      {
        onError: (error: any) => {
          setError(error.message)
        },
        onSuccess: (data) => {
          console.log(data)
        },
      },
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
      <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  )
}
