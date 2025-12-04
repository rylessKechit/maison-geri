import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-geri-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-geri-gold to-geri-rose rounded-full flex items-center justify-center">
                <span className="text-geri-navy font-serif text-xl font-bold">G</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wide">GÉRI</h3>
                <p className="text-xs text-white/60 tracking-widest uppercase">Jewellery & Fine Jewellery</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Maison GÉRI crée des bijoux d'exception alliant élégance française, humour et sensualité. 
              Chaque pièce est entièrement fabriquée en France dans le respect des traditions joaillières.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-geri-gold transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.804L12.017 8.6l6.584 6.584c-.568 1.074-1.719 1.804-3.016 1.804H8.449z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-geri-gold transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Collections</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/bubble" className="text-white/80 hover:text-geri-gold transition-colors duration-300">
                  Collection Bubble
                </Link>
              </li>
              <li>
                <Link href="/kiss-me" className="text-white/80 hover:text-geri-gold transition-colors duration-300">
                  Collection Kiss Me
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-white/80 hover:text-geri-gold transition-colors duration-300">
                  Toutes les collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-white/80">
              <div>
                <p className="font-medium">Atelier Paris</p>
                <p className="text-sm">Sur rendez-vous uniquement</p>
              </div>
              <div>
                <p>Email: contact@maisonGeri.fr</p>
              </div>
              <div>
                <Link href="/contact" className="inline-block bg-geri-gold text-geri-navy px-6 py-2 rounded-md hover:bg-geri-rose transition-colors duration-300 font-medium">
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Maison GÉRI. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Mentions légales
            </Link>
            <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}