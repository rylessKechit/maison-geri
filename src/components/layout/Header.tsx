'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Changer le background seulement quand on sort complètement du hero (100vh)
      setIsScrolled(window.scrollY > window.innerHeight - 100)
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
      {/* Header - avec changement transparent/bleu */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hover:bg-[#131B4C] ${
        isScrolled ? 'bg-[#131B4C]' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Hamburger Menu - Gauche - Blanc */}
            <button 
              className="flex items-center space-x-2 text-white hover:text-geri-accent transition-colors duration-300 cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-sm font-medium tracking-wide uppercase">Menu</span>
            </button>

            {/* Logo Centré - MAISON GÉRI */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
              <Image 
                src="/logo-geri.webp" 
                alt="GÉRI" 
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto transition-opacity duration-300 hover:opacity-80"
                priority
              />
            </Link>

            {/* Contact - Droite - Blanc */}
            <Link 
              href="/contact"
              className="text-sm font-medium tracking-wide text-white hover:text-geri-accent transition-colors duration-300 uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Menu Overlay - avec transitions */}
      <div className={`fixed inset-0 z-[100] transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Background Overlay */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute left-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
            {/* Menu Header avec fond bleu */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-[#131B4C]">
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
                className="text-white hover:text-geri-accent transition-colors p-2 cursor-pointer"
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
              <div className="space-y-2">
                
                {/* Toutes les Collections */}
                <Link 
                  href="/collections" 
                  className="group flex items-center justify-between py-3 text-xl font-display font-light text-primary hover:text-accent transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    Toutes les Collections
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Bubble */}
                <Link 
                  href="/bubble" 
                  className="group flex items-center justify-between py-3 text-xl font-display font-light text-primary hover:text-accent transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    Bubble
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Kiss Me */}
                <Link 
                  href="/kiss-me" 
                  className="group flex items-center justify-between py-3 text-xl font-display font-light text-primary hover:text-accent transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    Kiss Me
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Maison GÉRI */}
                <Link 
                  href="/maison" 
                  className="group flex items-center justify-between py-3 text-xl font-display font-light text-primary hover:text-accent transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    Maison GÉRI
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Contact */}
                <Link 
                  href="/contact" 
                  className="group flex items-center justify-between py-3 text-xl font-display font-light text-primary hover:text-accent transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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
    </>
  )
}