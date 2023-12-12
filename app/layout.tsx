import type { Metadata } from 'next'
import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Telenique',
  description: 'Video streaming platform use to create unique content and share it with the world'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body >{children}</body>
      </html>
    </ClerkProvider>
  )
}
