import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600']
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'GÉRI — Joaillerie Française',
    template: '%s — GÉRI'
  },
  description: 'Maison GÉRI — Créations de joaillerie française d\'exception. Quatrième génération d\'artisans joailliers. Collections Bubble et Kiss Me. Entièrement fabriqué en France.',
  keywords: [
    'joaillerie française', 
    'haute joaillerie', 
    'bijoux sur mesure', 
    'GÉRI', 
    'Géraldine Samuel', 
    'joaillier parisien',
    'créations françaises',
    'artisanat français'
  ],
  authors: [{ name: 'Géraldine Samuel', url: 'https://maison-geri.fr' }],
  creator: 'Maison GÉRI',
  publisher: 'Maison GÉRI',
  metadataBase: new URL('https://maison-geri.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://maison-geri.fr',
    siteName: 'Maison GÉRI',
    title: 'GÉRI — Joaillerie Française d\'Exception',
    description: 'Découvrez les créations de Maison GÉRI : joaillerie française d\'exception alliant tradition familiale et vision contemporaine.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maison GÉRI — Joaillerie française d\'exception'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GÉRI — Joaillerie Française',
    description: 'Créations de joaillerie française d\'exception par Géraldine Samuel',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0a0a0a' }
    ]
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased font-body`}>
        <div id="__next" className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}