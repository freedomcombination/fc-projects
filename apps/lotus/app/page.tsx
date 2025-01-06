import { Button } from '@fc/ui/base/button'
import { LoginForm } from '@fc/ui/components/login-form'
import { ModeToggle } from '@fc/ui/components/mode-toggle'
import '@fc/ui/globals.css'

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold dark:text-red-100 text-red-500">Hello World</h1>
        <Button size="sm">Button</Button>
        <ModeToggle />
        <LoginForm />
      </div>
    </div>
  )
}
