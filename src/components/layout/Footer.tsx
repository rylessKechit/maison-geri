import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#131B4C] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section principale */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo et description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <Image 
                src="/logo-geri.webp" 
                alt="GÉRI" 
                width={140}
                height={45}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/80 font-light leading-relaxed mb-6">
              Maison de joaillerie française alliant tradition séculaire et vision contemporaine. 
              Chaque création naît dans nos ateliers parisiens.
            </p>
            <p className="text-white/60 text-sm font-light tracking-wide uppercase">
              Depuis 4 générations • Paris
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-serif font-light mb-8 tracking-wide">Navigation</h3>
            <nav className="space-y-4">
              <Link 
                href="/collections" 
                className="group block text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  Toutes les Collections
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link 
                href="/bubble" 
                className="group block text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  Bubble
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link 
                href="/kiss-me" 
                className="group block text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  Kiss Me
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link 
                href="/maison" 
                className="group block text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  Maison GÉRI
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-serif font-light mb-8 tracking-wide">Contact</h3>
            <div className="space-y-6">
              <div>
                <p className="text-white/60 text-sm font-light tracking-wide uppercase mb-2">
                  Atelier Parisien
                </p>
                <p className="text-white/80 font-light">
                  Sur rendez-vous uniquement
                </p>
              </div>
              
              <div>
                <Link 
                  href="mailto:contact@maison-geri.fr"
                  className="group text-white/80 hover:text-white transition-colors duration-300"
                >
                  <span className="relative">
                    contact@maison-geri.fr
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </div>

              <Link 
                href="/contact"
                className="inline-block bg-white/10 hover:bg-white hover:text-[#131B4C] text-white px-8 py-3 transition-all duration-300 font-light tracking-wide border border-white/20 hover:border-white"
              >
                Prendre Rendez-vous
              </Link>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/20"></div>

        {/* Copyright */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm font-light">
            © 2025 Maison GÉRI. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-8 mt-4 md:mt-0">
            <Link 
              href="/mentions-legales" 
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
            >
              Mentions légales
            </Link>
            <Link 
              href="/confidentialite" 
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}