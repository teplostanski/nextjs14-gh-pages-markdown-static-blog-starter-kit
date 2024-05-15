import { Inter } from 'next/font/google'
import './globals.scss'
import Link from 'next/link'
import { ReactNode } from 'react'
import ClientNav from './components/LayoutNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The kitchen of World of Warcraft',
  description: 'My amazing project app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  let header = (
    <header>
      <Link href={'/'}>
        <h1>The kitchen of World of Warcraft</h1>
      </Link>
      <ClientNav />
    </header>
  )

  let footer = (
    <footer>
      <p>
        Create with ❤️{' '}
        <a href='https://github.com/teplostanski/nextjs14-gh-pages-static-blog-template'>
          nextjs14-gh-pages-static-blog-template
        </a>
      </p>
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
