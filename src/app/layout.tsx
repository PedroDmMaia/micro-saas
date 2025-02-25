import './globals.css'

import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  weight: ['400', '500', '700'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${redHatDisplay.className} bg-backgound-primary text-content-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
