import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibe',
  description: 'Shopping assistant for online products',
  icons: {
    icon: [
      {
        url: '/icons/VIBE_LOGO.png',
        sizes: 'any'
      }
    ],
    apple: [
      {
        url: '/icons/VIBE_LOGO.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
