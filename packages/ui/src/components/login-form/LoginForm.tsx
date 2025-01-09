'use client'

import { useState } from 'react'

import { useLoginMutation } from '@fc/codegen/generates'
import { Button } from '@fc/ui/base/button'
import { Input } from '@fc/ui/base/input'

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
    <form className="flex flex-col gap-4 p-4 border border-slate-100 rounded-lg" onSubmit={handleSubmit}>
      <Input onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
      <Input onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
      <Button type="submit">Login</Button>
      {error && <p>{error}</p>}
    </form>
  )
}
