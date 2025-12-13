'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Header - Style Louis Vuitton avec fond bleu GÉRI */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-geri-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Hamburger Menu - Gauche - Blanc sur bleu */}
            <button 
              className="flex items-center space-x-2 text-white hover:text-geri-accent transition-colors duration-300"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-sm font-medium tracking-wide uppercase">Menu</span>
            </button>

            {/* Logo Centré - Blanc */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
              <Image 
                src="/logo-geri.webp" 
                alt="GÉRI" 
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto transition-opacity duration-300 hover:opacity-80"
                priority
              />
            </Link>

            {/* Contact - Droite - Blanc sur bleu */}
            <Link 
              href="/contact"
              className="text-sm font-medium tracking-wide text-white hover:text-geri-accent transition-colors duration-300 uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Menu Overlay - Style Louis Vuitton */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute left-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
            {/* Menu Header avec fond bleu */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-geri-navy">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image 
                  src="/logo-geri.webp" 
                  alt="GÉRI" 
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <button 
                className="text-white hover:text-geri-accent transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Navigation */}
            <nav className="p-6">
              <div className="space-y-8">
                
                {/* Collections */}
                <div>
                  <h3 className="text-lg font-display font-light text-primary mb-4">Collections</h3>
                  <div className="space-y-3 ml-4">
                    <Link 
                      href="/collections" 
                      className="block text-secondary hover:text-primary transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Toutes les Collections
                    </Link>
                    <Link 
                      href="/bubble" 
                      className="block text-secondary hover:text-primary transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Bubble
                    </Link>
                    <Link 
                      href="/kiss-me" 
                      className="block text-secondary hover:text-primary transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Kiss Me
                    </Link>
                  </div>
                </div>

                {/* Maison */}
                <div>
                  <Link 
                    href="/maison" 
                    className="block text-lg font-display font-light text-primary hover:text-accent transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    La Maison
                  </Link>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-display font-light text-primary mb-4">Services</h3>
                  <div className="space-y-3 ml-4">
                    <Link 
                      href="/contact" 
                      className="block text-secondary hover:text-primary transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Prendre Rendez-vous
                    </Link>
                    <Link 
                      href="/contact#sur-mesure" 
                      className="block text-secondary hover:text-primary transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Création sur Mesure
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="space-y-4">
                  <p className="text-xs text-secondary/60 tracking-wide uppercase">
                    Atelier Parisien
                  </p>
                  <p className="text-sm text-secondary">
                    Sur rendez-vous uniquement
                  </p>
                  <Link 
                    href="mailto:contact@maison-geri.fr"
                    className="text-sm text-secondary hover:text-primary transition-colors duration-300"
                  >
                    contact@maison-geri.fr
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}