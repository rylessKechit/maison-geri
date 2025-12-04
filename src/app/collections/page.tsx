import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-geri-rose/5 to-geri-gold/5"></div>
        
        {/* Motifs décoratifs flottants */}
        <div className="absolute top-32 right-16 w-20 h-20 bg-geri-rose/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-geri-gold/25 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-geri-navy/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-geri-rose/15 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full border border-geri-navy/10">
              <div className="w-3 h-3 bg-geri-rose rounded-full animate-pulse"></div>
              <span className="text-geri-navy font-medium">Collections 2025</span>
              <div className="w-3 h-3 bg-geri-gold rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl font-bold text-geri-navy mb-8 tracking-wide">
            Collections
          </h1>
          
          <p className="text-geri-navy text-xl md:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto">
            Découvrez l'univers GÉRI à travers nos collections d'exception. 
            Chaque création raconte une <span className="font-serif font-semibold">histoire</span>, 
            exprime une <span className="font-serif font-semibold text-geri-rose">émotion</span>, 
            révèle une facette de la <span className="font-serif font-semibold text-geri-gold">femme moderne</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-geri-navy text-white px-12 py-4 hover:bg-geri-gold hover:text-geri-navy transition-all duration-500 font-medium tracking-wide text-lg group shadow-xl">
              <span className="group-hover:tracking-wider transition-all duration-300">Explorer les Collections</span>
            </button>
            <Link 
              href="/maison" 
              className="border-2 border-geri-navy text-geri-navy px-12 py-4 hover:bg-geri-navy hover:text-white transition-all duration-300 font-medium tracking-wide text-lg"
            >
              Notre Histoire
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Principales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-geri-navy mb-6">Nos Collections Phares</h2>
            <p className="text-geri-navy/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Des créations uniques qui célèbrent l'art de vivre français, 
              entre tradition joaillière et audace contemporaine
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Collection Bubble */}
            <div className="group">
              <Link href="/bubble">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-geri-rose/10 to-geri-gold/10 p-12 h-[500px] cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-geri-navy/5 group-hover:to-geri-navy/10 transition-all duration-500"></div>
                  
                  {/* Pattern de bulles animées */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-geri-rose/30 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-20 right-20 w-10 h-10 bg-geri-gold/40 rounded-full group-hover:scale-125 transition-transform duration-700" style={{transitionDelay: '0.1s'}}></div>
                  <div className="absolute bottom-16 left-8 w-14 h-14 bg-geri-navy/20 rounded-full group-hover:scale-105 transition-transform duration-600" style={{transitionDelay: '0.2s'}}></div>
                  <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-geri-rose/25 rounded-full group-hover:scale-150 transition-transform duration-800" style={{transitionDelay: '0.15s'}}></div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-end">
                    <div className="mb-6">
                      <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-3 h-3 bg-geri-rose rounded-full"></div>
                        <div className="w-2 h-2 bg-geri-gold rounded-full"></div>
                        <div className="w-4 h-4 bg-geri-navy/30 rounded-full"></div>
                        <span className="text-geri-navy text-sm font-medium">Collection 2025</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-4xl font-bold text-geri-navy mb-6 group-hover:text-geri-gold transition-colors duration-300">
                      Bubble
                    </h3>
                    <p className="text-geri-navy/70 leading-relaxed mb-8 text-lg">
                      Des bulles de couleurs et de lumière qui dansent sur la peau. 
                      Pierres précieuses et semi-précieuses s'assemblent dans une explosion joyeuse 
                      de bonheur et de fantaisie. L'art de célébrer la joie de vivre à la française.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3 text-geri-navy/70">
                        <div className="w-2 h-2 bg-geri-rose rounded-full"></div>
                        <span className="text-sm">Tourmalines roses et saphirs multicolores</span>
                      </div>
                      <div className="flex items-center space-x-3 text-geri-navy/70">
                        <div className="w-2 h-2 bg-geri-gold rounded-full"></div>
                        <span className="text-sm">Pavage diamants et compositions uniques</span>
                      </div>
                      <div className="flex items-center space-x-3 text-geri-navy/70">
                        <div className="w-2 h-2 bg-geri-navy rounded-full"></div>
                        <span className="text-sm">Or blanc et or rose 18 carats</span>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center text-geri-navy group-hover:text-geri-gold transition-colors duration-300">
                      <span className="font-medium text-lg">Découvrir Bubble</span>
                      <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Collection Kiss Me */}
            <div className="group">
              <Link href="/kiss-me">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-geri-navy/10 to-geri-rose/15 p-12 h-[500px] cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-geri-rose/5 group-hover:to-geri-rose/10 transition-all duration-500"></div>
                  
                  {/* Pattern de lèvres stylisé */}
                  <div className="absolute top-12 right-12 w-24 h-12 bg-geri-rose/30 rounded-full transform rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"></div>
                  <div className="absolute bottom-20 left-12 w-20 h-10 bg-geri-gold/25 rounded-full transform -rotate-6 group-hover:scale-125 group-hover:rotate-3 transition-all duration-700" style={{transitionDelay: '0.1s'}}></div>
                  <div className="absolute top-1/3 left-1/4 w-16 h-8 bg-geri-navy/20 rounded-full transform rotate-45 group-hover:scale-105 transition-all duration-600" style={{transitionDelay: '0.2s'}}></div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-end">
                    <div className="mb-6">
                      <div className="inline-flex items-center space-x-3 bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full border border-geri-rose/20">
                        <div className="w-6 h-3 bg-geri-rose rounded-full"></div>
                        <span className="text-geri-navy text-sm font-medium">Collection 2025</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-4xl font-bold text-geri-navy mb-6 group-hover:text-geri-rose transition-colors duration-300">
                      Kiss Me
                    </h3>
                    <p className="text-geri-navy/70 leading-relaxed mb-8 text-lg">
                      L'audace et la sensualité incarnées en bijoux d'exception. 
                      Des lèvres pavées de diamants qui murmurent des secrets de glamour et de mystère. 
                      Une ode à la féminité moderne, entre sophistication parisienne et sensualité assumée.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3 text-geri-navy/70">
                        <div className="w-2 h-2 bg-geri-rose rounded-full"></div>
                        <span className="text-sm">Diamants blancs et rubis roses d'exception</span>
                      </div>
                      <div className="flex items-center space-x-3 text-geri-navy/70">
                        <div className="w-2 h-2 bg-geri-gold rounded-full"></div>
                        <span className="text-sm">Pavage haute couture signature GÉRI</span>
                      </div>
                      <div className="flex items-center space-x-3 text-geri-navy/70">
                        <div className="w-2 h-2 bg-geri-navy rounded-full"></div>
                        <span className="text-sm">Or blanc et platine pour l'éternité</span>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center text-geri-navy group-hover:text-geri-rose transition-colors duration-300">
                      <span className="font-medium text-lg">Découvrir Kiss Me</span>
                      <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Collections à Venir */}
      <section className="py-20 bg-gradient-to-br from-geri-navy/5 to-geri-gold/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-geri-navy mb-6">Collections à Venir</h2>
            <p className="text-geri-navy/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Un aperçu des créations futures qui enrichiront bientôt l'univers GÉRI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Macaron Collection */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-white transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-geri-gold/20 to-geri-rose/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-geri-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Macaron</h3>
              <p className="text-geri-navy/70 leading-relaxed mb-4 text-sm">
                L'art pâtissier français réinterprété en joaillerie. Des créations gourmandes 
                qui célèbrent l'excellence culinaire française.
              </p>
              <span className="text-geri-gold text-sm font-medium">Collection 2026</span>
            </div>

            {/* Zen Collection */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-white transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-geri-navy/20 to-geri-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-geri-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Zen</h3>
              <p className="text-geri-navy/70 leading-relaxed mb-4 text-sm">
                Lignes épurées et minimalisme contemporain. L'essence même de l'élégance 
                moderne dans sa forme la plus pure.
              </p>
              <span className="text-geri-gold text-sm font-medium">Collection 2026</span>
            </div>

            {/* Provence Collection */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-white transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-geri-rose/20 to-geri-navy/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-geri-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Provence</h3>
              <p className="text-geri-navy/70 leading-relaxed mb-4 text-sm">
                Hommage aux racines familiales entre Paris et Provence. Des créations 
                qui capturent la beauté des paysages du Sud de la France.
              </p>
              <span className="text-geri-gold text-sm font-medium">Collection 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Savoir-Faire GÉRI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-geri-navy mb-6">Le Savoir-Faire GÉRI</h2>
            <p className="text-geri-navy/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Chaque collection GÉRI naît de l'alliance parfaite entre tradition joaillière française 
              et vision créative contemporaine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-geri-rose/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-geri-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-geri-navy mb-4">Création Sur Mesure</h3>
              <p className="text-geri-navy/70 text-sm leading-relaxed">
                Chaque pièce est unique, créée selon vos désirs et votre personnalité. 
                Consultation personnalisée avec Géraldine Samuel.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-geri-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-geri-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-geri-navy mb-4">Pierres d'Exception</h3>
              <p className="text-geri-navy/70 text-sm leading-relaxed">
                Sélection rigoureuse par nos gemmologues. Chaque pierre est choisie 
                pour sa qualité exceptionnelle et son éclat unique.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-geri-navy/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-geri-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-geri-navy mb-4">Atelier Parisien</h3>
              <p className="text-geri-navy/70 text-sm leading-relaxed">
                Fabrication entièrement française dans notre atelier parisien. 
                Maîtres joailliers formés aux techniques traditionnelles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-geri-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-geri-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-geri-navy mb-4">Garantie d'Excellence</h3>
              <p className="text-geri-navy/70 text-sm leading-relaxed">
                Certificat d'authenticité, garantie internationale et service après-vente 
                pour préserver l'éclat de vos créations GÉRI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="py-20 bg-gradient-to-br from-geri-navy to-geri-navy/90">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Créons Ensemble Votre Bijou d'Exception
          </h2>
          <p className="text-white/80 text-lg mb-12 leading-relaxed">
            Prenez rendez-vous dans notre atelier parisien pour découvrir nos collections 
            et créer votre pièce unique avec Géraldine Samuel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-geri-gold text-geri-navy px-12 py-4 hover:bg-white hover:text-geri-navy transition-all duration-300 font-medium tracking-wide text-lg shadow-xl"
            >
              Prendre Rendez-vous
            </Link>
            <Link 
              href="/maison" 
              className="border-2 border-white text-white px-12 py-4 hover:bg-white hover:text-geri-navy transition-all duration-300 font-medium tracking-wide text-lg"
            >
              Découvrir Maison GÉRI
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}