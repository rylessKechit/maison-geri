import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Ultra Minimal */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="container-narrow text-center">
          {/* Main Brand Mark */}
          <div className="mb-16">
            <h1 className="font-display text-6xl md:text-8xl font-light tracking-wider text-primary mb-4">
              GÉRI
            </h1>
            <div className="w-16 h-px bg-accent mx-auto mb-8"></div>
            <p className="text-secondary text-sm tracking-widest uppercase font-medium">
              Joaillerie Française
            </p>
          </div>

          {/* Mission Statement - Refined */}
          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-lg leading-relaxed text-secondary font-light">
              Créations d'exception alliant tradition familiale et vision contemporaine. 
              Chaque pièce exprime l'art de vivre français dans sa forme la plus pure.
            </p>
          </div>

          {/* CTA - Minimal */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/collections" className="btn-primary">
              Découvrir les Collections
            </Link>
            <Link href="/maison" className="btn-secondary">
              Notre Histoire
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Grid - Museum Layout */}
      <section className="section-spacing bg-surface">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl font-light mb-6 text-primary">
              Collections
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mb-8"></div>
            <p className="text-secondary max-w-lg mx-auto">
              Deux univers créatifs qui révèlent chaque facette de la femme moderne
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            
            {/* Collection Bubble */}
            <Link href="/bubble" className="group block">
              <div className="bg-white p-12 hover-lift">
                {/* Product Visual Placeholder - Minimal */}
                <div className="aspect-square bg-surface mb-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border border-border rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xs font-medium text-secondary tracking-wider">BUBBLE</span>
                    </div>
                    <p className="text-xs text-secondary/60 italic">Collection image</p>
                  </div>
                </div>
                
                {/* Collection Info */}
                <div>
                  <h3 className="font-display text-xl font-light mb-4 text-primary group-hover:text-accent transition-colors">
                    Bubble
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed mb-6">
                    L'art de célébrer la joie de vivre. Pierres colorées et compositions uniques 
                    dans un esprit d'élégance spontanée.
                  </p>
                  <div className="flex items-center text-xs font-medium text-secondary group-hover:text-primary transition-colors">
                    <span className="tracking-wide uppercase">Découvrir</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Collection Kiss Me */}
            <Link href="/kiss-me" className="group block">
              <div className="bg-white p-12 hover-lift">
                {/* Product Visual Placeholder - Minimal */}
                <div className="aspect-square bg-surface mb-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border border-border rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xs font-medium text-secondary tracking-wider">KISS ME</span>
                    </div>
                    <p className="text-xs text-secondary/60 italic">Collection image</p>
                  </div>
                </div>
                
                {/* Collection Info */}
                <div>
                  <h3 className="font-display text-xl font-light mb-4 text-primary group-hover:text-accent transition-colors">
                    Kiss Me
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed mb-6">
                    L'audace et la sensualité incarnées. Créations d'exception qui révèlent 
                    la féminité moderne dans toute sa splendeur.
                  </p>
                  <div className="flex items-center text-xs font-medium text-secondary group-hover:text-primary transition-colors">
                    <span className="tracking-wide uppercase">Découvrir</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage Section - Institutional */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Heritage Content */}
            <div>
              <h2 className="font-display text-3xl font-light mb-8 text-primary">
                Quatrième Génération
              </h2>
              <div className="space-y-6 text-secondary leading-relaxed">
                <p>
                  Héritière d'une lignée de joailliers d'exception, Géraldine Samuel 
                  perpétue une tradition d'excellence tout en y insufflant sa vision 
                  résolument contemporaine.
                </p>
                <p>
                  Formée auprès des plus grandes Maisons, elle crée aujourd'hui des pièces 
                  entièrement fabriquées en France, dans le respect des techniques 
                  artisanales transmises de génération en génération.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/maison" className="btn-secondary">
                  Notre Histoire
                </Link>
              </div>
            </div>

            {/* Heritage Visual */}
            <div className="bg-surface p-12">
              <div className="aspect-[3/4] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 border border-border rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-sm font-medium text-secondary">GS</span>
                  </div>
                  <p className="text-xs text-secondary/60 italic">Portrait Géraldine Samuel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Minimal */}
      <section className="section-spacing-sm bg-primary text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-light mb-6">
            Créons Ensemble
          </h2>
          <p className="text-white/80 mb-10 max-w-lg mx-auto">
            Prenez rendez-vous dans notre atelier parisien pour une consultation personnalisée
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-transparent hover:text-white border-white">
            Prendre Rendez-vous
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}