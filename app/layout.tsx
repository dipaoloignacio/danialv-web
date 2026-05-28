import type { Metadata } from 'next'
import { Montserrat, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['500', '700'],
})

export const metadata: Metadata = {
  title: 'DANI ALV | DJ Profesional & Instructor',
  description: 'DJ Profesional e Instructor de DJ en Mendoza, Argentina. Clases online y presenciales, eventos privados, sets en vivo.',
  keywords: 'DJ Mendoza, clases de DJ, instructor DJ Argentina, eventos privados DJ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-background text-on-background overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
