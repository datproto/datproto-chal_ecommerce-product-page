import './globals.css'
import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import React from 'react'

const kumbh = Kumbh_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kumbh.className}>{children}</body>
    </html>
  )
}
