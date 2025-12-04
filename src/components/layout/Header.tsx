'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-geri-navy/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-geri-navy to-geri-navy/80 rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-xl font-bold">G</span>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-geri-navy tracking-wide">GÉRI</h1>
              <p className="text-xs text-geri-navy/60 tracking-widest uppercase">Jewellery & Fine Jewellery</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link href="/collections" className="text-geri-navy hover:text-geri-gold transition-colors duration-300 font-medium tracking-wide">
              Collections
            </Link>
            <Link href="/bubble" className="text-geri-navy hover:text-geri-gold transition-colors duration-300 font-medium tracking-wide">
              Bubble
            </Link>
            <Link href="/kiss-me" className="text-geri-navy hover:text-geri-gold transition-colors duration-300 font-medium tracking-wide">
              Kiss Me
            </Link>
            <Link href="/maison" className="text-geri-navy hover:text-geri-gold transition-colors duration-300 font-medium tracking-wide">
              Maison
            </Link>
            <Link href="/contact" className="text-geri-navy hover:text-geri-gold transition-colors duration-300 font-medium tracking-wide">
              Contact
            </Link>
          </nav>

          {/* Menu Mobile */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-geri-navy transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-geri-navy transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-geri-navy transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Menu Mobile Ouvert */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pt-6 border-t border-geri-navy/10">
            <div className="flex flex-col space-y-4">
              <Link href="/collections" className="text-geri-navy hover:text-geri-gold transition-colors duration-300 font-medium tracking-wide py-2">
                Collections
              </Link>
              <Link href="/bubble" className="text-geri-navy hover:text-geri-gold transition-colors duration-300 font-medium tracking-wide py-2">
                Bubble
              </Link>
              <Link href="/kiss-me" className="text-geri-navy hover:text-geri-gold transition-colors duration-300 font-medium tracking-wide py-2">
                Kiss Me
              </Link>
              <Link href="/maison" className="text-geri-navy hover:text-geri-gold transition-colors duration-300 font-medium tracking-wide py-2">
                Maison
              </Link>
              <Link href="/contact" className="text-geri-navy hover:text-geri-gold transition-colors duration-300 font-medium tracking-wide py-2">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}