import { Link } from '@fc/intl/navigation'

import Image from 'next/image'

export const Logo = () => {
  return (
    <Link className="text-muted-foreground hover:text-primary transition-colors" href={'/#home'}>
      <Image alt="Logo" className="rounded-full object-contain" height={50} src="/images/logo.png" width={50} />
    </Link>
  )
}
