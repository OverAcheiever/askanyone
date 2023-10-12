import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import localFont from "next/font/local"

const inter = Inter({ subsets: ['latin'], variable: "--inter" })

const clash = localFont({
  src: "../public/fonts/clash.ttf",
})

export const metadata = {
  title: "askanyone",
  description:
    ""
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${clash.className} ${inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
