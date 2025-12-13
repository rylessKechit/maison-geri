import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <h3 className="font-display text-xl font-light tracking-wider text-primary">
                GÉRI
              </h3>
            </Link>
            <p className="text-sm text-secondary leading-relaxed mb-6 max-w-xs">
              Maison de joaillerie française créant des pièces d'exception 
              dans le respect des traditions artisanales.
            </p>
            <p className="text-xs text-secondary/60 tracking-wide uppercase">
              Entièrement fabriqué en France
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-primary mb-6 tracking-wide uppercase">
              Navigation
            </h4>
            <nav className="space-y-4">
              <Link href="/collections" className="block text-sm text-secondary hover:text-primary transition-colors">
                Collections
              </Link>
              <Link href="/bubble" className="block text-sm text-secondary hover:text-primary transition-colors">
                Bubble
              </Link>
              <Link href="/kiss-me" className="block text-sm text-secondary hover:text-primary transition-colors">
                Kiss Me
              </Link>
              <Link href="/maison" className="block text-sm text-secondary hover:text-primary transition-colors">
                Maison
              </Link>
              <Link href="/contact" className="block text-sm text-secondary hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-primary mb-6 tracking-wide uppercase">
              Atelier Parisien
            </h4>
            <div className="space-y-4 text-sm text-secondary">
              <p>Sur rendez-vous uniquement</p>
              <p>
                <a href="mailto:contact@maison-geri.fr" className="hover:text-primary transition-colors">
                  contact@maison-geri.fr
                </a>
              </p>
              <div className="pt-4">
                <Link href="/contact" className="btn-primary text-xs">
                  Prendre Rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-secondary/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Maison GÉRI. Tous droits réservés.
          </p>
          
          {/* Legal Links */}
          <div className="flex space-x-6 text-xs text-secondary/60">
            <a href="#" className="hover:text-secondary transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}