import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

import { ThemeProvider } from '@/components/theme-provider'

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
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body>
          <ThemeProvider
           attribute='class'
           forcedTheme='dark'
           storageKey='telenique-theme'
          >
            <Toaster theme='light' position='bottom-center' />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
