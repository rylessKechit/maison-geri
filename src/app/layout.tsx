import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'GÉRI - Joaillerie & Haute Joaillerie',
    template: '%s | GÉRI'
  },
  description: 'Maison GÉRI - Créations de joaillerie française d\'exception alliant élégance, humour et sensualité. Collections Bubble et Kiss Me, créations sur mesure par Géraldine Samuel.',
  keywords: [
    'joaillerie française', 
    'haute joaillerie', 
    'bijoux sur mesure', 
    'GÉRI', 
    'Géraldine Samuel', 
    'collection Bubble', 
    'collection Kiss Me',
    'bijoux Paris',
    'diamants',
    'pierres précieuses',
    'création bijoux',
    'joaillier parisien'
  ],
  authors: [{ name: 'Géraldine Samuel' }],
  creator: 'Maison GÉRI',
  publisher: 'Maison GÉRI',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://maison-geri.fr',
    siteName: 'Maison GÉRI',
    title: 'GÉRI - Joaillerie & Haute Joaillerie Française',
    description: 'Découvrez l\'univers GÉRI : créations de joaillerie française d\'exception alliant élégance, humour et sensualité.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maison GÉRI - Joaillerie française d\'exception'
      }
    ]
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
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1e293b' }
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
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  )
}