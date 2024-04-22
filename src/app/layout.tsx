import { Inter } from 'next/font/google'
import './globals.scss'
import Link from 'next/link'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Bubbly Baker',
  description: 'My amazing project app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  let header = (
    <header>
      <Link href={'/'}>
        <h1>The Bubbly Baker</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>Made with 💛</p>
    </footer>
  )
  return (
    <html lang='en'>
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
