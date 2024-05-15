'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@mui/material'
import styles from './LayoutNav.module.scss'

export default function ClientNav() {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <Button variant='contained' onClick={() => router.back()}>
        Back
      </Button>
      <Link href={'/'}>
        <Button variant='outlined'>Home</Button>
      </Link>
    </nav>
  )
}
