import type { Metadata } from 'next'
import { Inter, Lato, Roboto_Flex } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", });
const lato = Lato({ subsets: ["latin"], weight: ["400"], variable: "--font-lato", });
const roboto_flex = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto-flex", });

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
    <html lang="en" className={`${inter.className} ${lato.variable} ${roboto_flex.variable}`}>
      <body>{children}</body>
    </html>
  )
}
