import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anirudh Reddy Mosra | Full Stack Developer & Innovator',
  description: 'Anirudh Reddy Mosra - Full Stack Developer showcasing innovative projects in agriculture technology, interactive gaming, AI systems, and data science.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Python', 'Node.js', 'AI', 'Web Development'],
  authors: [{ name: 'Anirudh Reddy Mosra' }],
  creator: 'Anirudh Reddy Mosra',
  publisher: 'Anirudh Reddy Mosra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anirudhreddymosra.vercel.app',
    title: 'Anirudh Reddy Mosra | Full Stack Developer',
    description: 'Showcasing innovative projects across agriculture, gaming, AI, and data science.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
