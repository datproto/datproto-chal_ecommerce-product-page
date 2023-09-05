import './globals.css'
import type {Metadata} from 'next'
import {Kumbh_Sans} from 'next/font/google'
import React from 'react'

const kumbh = Kumbh_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Frontend Mentor | E-commerce product page',
  description: 'Solution for Frontend Mentor challenge: E-commerce product page'
}

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`lg:px-44 lg:pt-7 ${kumbh.className}`}>
    {children}
    </body>
    </html>
  )
}
