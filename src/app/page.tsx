import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-geri-rose/5 to-geri-navy/10"></div>
        
        {/* Motifs décoratifs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-geri-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-geri-rose/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Logo principal */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-geri-navy to-geri-navy/80 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white font-serif text-4xl font-bold">G</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-geri-rose rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">é</span>
              </div>
            </div>
          </div>

          <h1 className="font-serif text-7xl md:text-8xl font-bold text-geri-navy mb-6 tracking-wide">
            GÉRI
          </h1>
          
          <p className="text-geri-navy/60 text-lg md:text-xl tracking-[0.3em] uppercase mb-8">
            Jewellery & Fine Jewellery
          </p>
          
          <p className="text-geri-navy text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Créations joaillières françaises alliant <span className="font-serif font-medium">élégance</span>, 
            <span className="font-serif font-medium text-geri-rose"> humour</span> et 
            <span className="font-serif font-medium text-geri-gold"> sensualité</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/collections" 
              className="bg-geri-navy text-white px-12 py-4 hover:bg-geri-gold hover:text-geri-navy transition-all duration-500 font-medium tracking-wide text-lg group"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">Découvrir les Collections</span>
            </Link>
            <Link 
              href="/maison" 
              className="border-2 border-geri-navy text-geri-navy px-12 py-4 hover:bg-geri-navy hover:text-white transition-all duration-300 font-medium tracking-wide text-lg"
            >
              Notre Histoire
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-geri-navy/60">
            <span className="text-sm tracking-wider">Défiler</span>
            <div className="w-6 h-10 border-2 border-geri-navy/30 rounded-full relative">
              <div className="w-1 h-3 bg-geri-navy/60 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-geri-navy mb-6">Nos Collections</h2>
            <p className="text-geri-navy/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Chaque collection raconte une histoire, exprime une émotion, révèle une facette de la femme moderne.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Collection Bubble */}
            <div className="group cursor-pointer">
              <Link href="/bubble">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-geri-rose/10 to-geri-gold/10 p-12 h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-geri-navy/5 group-hover:to-geri-navy/10 transition-all duration-500"></div>
                  
                  {/* Pattern de bulles */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-geri-rose/20 rounded-full"></div>
                  <div className="absolute top-20 right-20 w-8 h-8 bg-geri-gold/30 rounded-full"></div>
                  <div className="absolute bottom-16 left-8 w-12 h-12 bg-geri-navy/10 rounded-full"></div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-end">
                    <h3 className="font-serif text-3xl font-bold text-geri-navy mb-4 group-hover:text-geri-gold transition-colors duration-300">
                      Collection Bubble
                    </h3>
                    <p className="text-geri-navy/70 leading-relaxed mb-6">
                      Des bulles de couleurs et de lumière qui dansent sur la peau. 
                      Pierres précieuses et semi-précieuses s'assemblent dans une explosion joyeuse.
                    </p>
                    <div className="inline-flex items-center text-geri-navy group-hover:text-geri-gold transition-colors duration-300">
                      <span className="font-medium">Découvrir</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Collection Kiss Me */}
            <div className="group cursor-pointer">
              <Link href="/kiss-me">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-geri-navy/5 to-geri-rose/10 p-12 h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-geri-rose/5 group-hover:to-geri-rose/10 transition-all duration-500"></div>
                  
                  {/* Pattern de lèvres stylisé */}
                  <div className="absolute top-12 right-12 w-20 h-10 bg-geri-rose/20 rounded-full transform rotate-12"></div>
                  <div className="absolute bottom-20 left-12 w-16 h-8 bg-geri-gold/20 rounded-full transform -rotate-12"></div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-end">
                    <h3 className="font-serif text-3xl font-bold text-geri-navy mb-4 group-hover:text-geri-rose transition-colors duration-300">
                      Collection Kiss Me
                    </h3>
                    <p className="text-geri-navy/70 leading-relaxed mb-6">
                      L'audace et la sensualité incarnées en bijoux. Des lèvres pavées de diamants 
                      qui murmurent des secrets de glamour et de mystère.
                    </p>
                    <div className="inline-flex items-center text-geri-navy group-hover:text-geri-rose transition-colors duration-300">
                      <span className="font-medium">Découvrir</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="py-20 bg-gradient-to-br from-geri-navy/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-geri-navy mb-8">
                Savoir-Faire Français d'Exception
              </h2>
              <div className="space-y-6 text-geri-navy/80 leading-relaxed">
                <p>
                  Héritière de la quatrième génération de joailliers, <strong>Géraldine Samuel</strong> perpétue 
                  une tradition d'excellence tout en y apportant sa vision contemporaine.
                </p>
                <p>
                  Chaque pièce GÉRI est entièrement créée en France, dans le respect des techniques 
                  artisanales transmises de génération en génération.
                </p>
                <p className="font-serif text-lg text-geri-navy italic">
                  "Aussi loin que je me souvienne, j'ai toujours eu des gemmes et des bijoux devant les yeux"
                </p>
              </div>
              <Link 
                href="/maison" 
                className="inline-block mt-8 border-b-2 border-geri-gold text-geri-navy hover:text-geri-gold transition-colors duration-300 pb-1 font-medium"
              >
                Découvrir notre histoire
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-geri-rose/10 to-geri-gold/10 rounded-2xl p-8 h-96">
                <div className="h-full flex items-center justify-center">
                  {/* Placeholder pour image artisan/atelier */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-geri-navy/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-12 h-12 text-geri-navy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-geri-navy/60 italic">Image de l'atelier<br />à ajouter ici</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}