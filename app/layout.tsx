import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';

const barlow = Barlow({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900" ], variable: "--font-barlow", });

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
    <html lang="en" className={`${barlow.className}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
