import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", });

export const metadata: Metadata = {
  title: 'Ville Kangas',
  description: 'Ville Kangas Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
