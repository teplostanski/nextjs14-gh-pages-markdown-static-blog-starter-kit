'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ClientNav() {
  const router = useRouter()

  return (
    <nav>
      <button onClick={() => router.back()}>Back</button>
      <Link href={'/'}>
        <button>Home</button>
      </Link>
    </nav>
  )
}
