import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Style Louis Vuitton */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        {/* Image de fond avec placeholder sombre */}
        <div className="absolute inset-0">
          <Image 
              src="/hero.jpeg" 
              alt="Maison GÉRI" 
              fill 
              className="object-cover" 
              priority 
            />
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"></div>
          
          {/* Texture subtile pour enrichir l'effet */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-geri-navy/40 via-transparent to-geri-rose/10"></div>
          </div>
          
          {/* Overlay pour assurer la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"></div>
        </div>
        
        {/* Contenu principal - juste la flèche */}
        <div className="relative z-10 text-center mb-32 px-6">
          {/* Contenu supprimé - juste l'espace pour la flèche en bas */}
        </div>

        {/* Flèche de scroll */}
        <a 
          href="#collections"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </a>
      </section>

      {/* Collections Preview */}
      <section id="collections" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl font-light text-geri-navy mb-8 tracking-wide">Nos Collections</h2>
            <p className="text-geri-navy/60 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Chaque création révèle une facette de l'art de vivre français, 
              entre tradition séculaire et vision contemporaine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Collection Bubble */}
            <div className="group cursor-pointer">
              <Link href="/bubble">
                <div className="relative w-full h-100 mb-8 overflow-hidden">
                  {/* Image collection Bubble */}
                  <Image 
                    src="/bubble-collection.jpeg" 
                    alt="Collection Bubble" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-3xl font-light text-geri-navy mb-4 group-hover:text-geri-gold transition-colors duration-300">
                    Bubble
                  </h3>
                  <div className="inline-flex items-center text-geri-navy group-hover:text-geri-gold transition-colors duration-300">
                    <span className="font-light tracking-wide">Découvrir</span>
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Collection Kiss Me */}
            <div className="group cursor-pointer">
              <Link href="/kiss-me">
                <div className="relative w-full h-100 mb-8 overflow-hidden">
                  {/* Image collection Kiss Me */}
                  <Image 
                    src="/kiss-me-collection.png" 
                    alt="Collection Kiss Me" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-3xl font-light text-geri-navy mb-4 group-hover:text-geri-rose transition-colors duration-300">
                    Kiss Me
                  </h3>
                  <div className="inline-flex items-center text-geri-navy group-hover:text-geri-rose transition-colors duration-300">
                    <span className="font-light tracking-wide">Découvrir</span>
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="py-32 bg-gradient-to-br from-geri-navy/3 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-5xl font-light text-geri-navy mb-10 tracking-wide">
                L'Art Français
              </h2>
              <div className="space-y-8 text-geri-navy/80 leading-relaxed font-light text-lg">
                <p>
                  <strong className="font-medium">Quatrième génération</strong> d'une lignée de joailliers d'exception, 
                  Géraldine Samuel perpétue l'héritage français de la haute joaillerie.
                </p>
                <p>
                  Chaque création GÉRI est fabriquée en Thaïlande par des artisans experts, 
                  respectant les plus hauts standards de qualité de la joaillerie internationale.
                </p>
                <blockquote className="font-serif text-2xl italic text-geri-navy border-l border-geri-gold/30 pl-8 my-12 font-light">
                  "Aussi loin que je me souvienne, j'ai toujours eu des gemmes et des bijoux devant les yeux"
                  <cite className="block text-base font-normal mt-4 not-italic tracking-wider">— Géraldine Samuel</cite>
                </blockquote>
              </div>
              <Link 
                href="/maison" 
                className="inline-flex items-center mt-10 text-geri-navy hover:text-geri-gold transition-colors duration-300 font-light tracking-wide"
              >
                <span>Notre Histoire</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-geri-rose/10 to-geri-gold/10 aspect-square relative overflow-hidden">
                {/* Image de l'atelier */}
                <Image 
                  src="/art-francais.jpeg" 
                  alt="Atelier GÉRI" 
                  fill 
                  className="object-cover" 
                />
                {/* Overlay léger pour maintenir la cohérence */}
                <div className="absolute inset-0 bg-gradient-to-br from-geri-rose/10 to-geri-gold/10"></div>
              </div>
              {/* Élément décoratif subtil */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-geri-gold/20"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}