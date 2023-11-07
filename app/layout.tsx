import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './provider'
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auto Verkhaufen',
  description: 'Auto verkaufen, Seit 2016 bieten wir hier direkt unkomplizierte und schnelle Autokäufe an. Vertrauen Sie uns, wenn Sie Ihr Auto einfach und reibungslos verkaufen möchten.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        {children}
        <Analytics />
      </Providers>
      </body>
    </html>
  )
}
