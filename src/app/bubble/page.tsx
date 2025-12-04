import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function BubblePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background animé avec bulles */}
        <div className="absolute inset-0 bg-gradient-to-br from-geri-rose/10 via-white to-geri-gold/5"></div>
        
        {/* Bulles flottantes animées */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-geri-rose/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-geri-gold/25 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-geri-navy/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-geri-rose/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-18 h-18 bg-geri-gold/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full">
              <div className="w-4 h-4 bg-geri-rose rounded-full"></div>
              <div className="w-3 h-3 bg-geri-gold rounded-full"></div>
              <div className="w-5 h-5 bg-geri-navy/20 rounded-full"></div>
              <span className="text-geri-navy font-medium">Collection 2025</span>
            </div>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl font-bold text-geri-navy mb-6">
            Bubble
          </h1>
          
          <p className="text-geri-navy text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Des bulles de couleurs et de lumière qui dansent sur la peau. 
            Une explosion joyeuse de <span className="text-geri-rose font-semibold">pierres précieuses</span> et 
            <span className="text-geri-gold font-semibold"> semi-précieuses</span> dans une symphonie de bonheur.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-geri-navy text-white px-12 py-4 hover:bg-geri-rose transition-all duration-300 font-medium tracking-wide text-lg group">
              <span className="group-hover:tracking-wider transition-all duration-300">Découvrir la Collection</span>
            </button>
            <Link 
              href="#pieces" 
              className="border-2 border-geri-gold text-geri-gold px-12 py-4 hover:bg-geri-gold hover:text-white transition-all duration-300 font-medium tracking-wide text-lg"
            >
              Voir les Pièces
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophie Collection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-geri-rose/10 to-geri-gold/10 rounded-3xl p-12 h-96">
                  {/* Pattern de bulles artistiques */}
                  <div className="relative h-full">
                    <div className="absolute top-8 left-8 w-16 h-16 border-4 border-geri-rose/30 rounded-full"></div>
                    <div className="absolute top-16 right-12 w-12 h-12 bg-geri-gold/20 rounded-full"></div>
                    <div className="absolute bottom-12 left-12 w-20 h-20 border-2 border-geri-navy/20 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-8 h-8 bg-geri-rose/40 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-geri-navy/10 to-geri-gold/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="font-serif text-3xl text-geri-navy/60">GÉRI</span>
                        </div>
                        <p className="text-geri-navy/60 italic">Photos des bijoux Bubble<br />à ajouter ici</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl font-bold text-geri-navy mb-8">
                L'Art de la Joie
              </h2>
              <div className="space-y-6 text-geri-navy/80 leading-relaxed">
                <p>
                  La collection <strong>Bubble</strong> capture l'essence même de la joie de vivre à la française. 
                  Chaque pièce évoque l'effervescence du champagne, la légèreté des bulles de savon dans un jardin parisien.
                </p>
                <p>
                  <span className="text-geri-rose font-semibold">Tourmalines roses</span>, 
                  <span className="text-geri-gold font-semibold"> saphirs jaunes</span> et 
                  <span className="text-geri-navy font-semibold"> diamants</span> s'assemblent dans un kaléidoscope de couleurs, 
                  créant des compositions uniques qui changent selon la lumière et le mouvement.
                </p>
                <blockquote className="font-serif text-lg text-geri-navy italic border-l-4 border-geri-gold pl-6">
                  "Chaque bulle raconte une histoire de bonheur, une promesse de moments précieux à vivre."
                  <cite className="block text-sm font-normal mt-2">— Géraldine Samuel</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les Pièces */}
      <section id="pieces" className="py-20 bg-gradient-to-br from-geri-rose/5 to-geri-gold/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-geri-navy mb-6">Les Pièces Bubble</h2>
            <p className="text-geri-navy/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Une sélection de créations où chaque bulle est une note dans une mélodie colorée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collier Bubble */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="h-64 bg-gradient-to-br from-geri-rose/10 to-geri-gold/10 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  {/* Pattern de bulles pour le produit */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-geri-rose/30 rounded-full"></div>
                  <div className="absolute top-8 right-6 w-6 h-6 bg-geri-gold/40 rounded-full"></div>
                  <div className="absolute bottom-6 left-8 w-10 h-10 bg-geri-navy/20 rounded-full"></div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-geri-navy/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-geri-navy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="8" r="3"/>
                      </svg>
                    </div>
                    <p className="text-geri-navy/60 text-sm italic">Photo du collier Bubble<br />à ajouter ici</p>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-geri-navy mb-2">Collier Bubble Grande Parure</h3>
                <p className="text-geri-navy/70 mb-4 leading-relaxed">
                  Collier plastron avec cascade de bulles multicolores. Tourmalines, saphirs et diamants.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-geri-navy font-semibold">Sur mesure</span>
                  <button className="text-geri-gold hover:text-geri-rose transition-colors duration-300">
                    Détails →
                  </button>
                </div>
              </div>
            </div>

            {/* Boucles d'oreilles Bubble */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="h-64 bg-gradient-to-br from-geri-navy/5 to-geri-rose/10 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-6 right-4 w-6 h-6 bg-geri-rose/40 rounded-full"></div>
                  <div className="absolute bottom-4 left-6 w-8 h-8 bg-geri-gold/30 rounded-full"></div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-geri-navy/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-geri-navy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="9" cy="9" r="7"/>
                        <circle cx="15" cy="15" r="3"/>
                      </svg>
                    </div>
                    <p className="text-geri-navy/60 text-sm italic">Photo des boucles d'oreilles<br />à ajouter ici</p>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-geri-navy mb-2">Boucles d'Oreilles Bubble</h3>
                <p className="text-geri-navy/70 mb-4 leading-relaxed">
                  Grappes de bulles pendantes, disponibles en trois harmonies colorées.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-geri-navy font-semibold">Sur mesure</span>
                  <button className="text-geri-gold hover:text-geri-rose transition-colors duration-300">
                    Détails →
                  </button>
                </div>
              </div>
            </div>

            {/* Bracelet Bubble */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="h-64 bg-gradient-to-br from-geri-gold/5 to-geri-navy/5 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-8 left-8 w-10 h-10 bg-geri-gold/25 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-6 h-6 bg-geri-rose/35 rounded-full"></div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-geri-navy/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-geri-navy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 12l10 10 10-10-10-10zM12 8v8"/>
                      </svg>
                    </div>
                    <p className="text-geri-navy/60 text-sm italic">Photo du bracelet Bubble<br />à ajouter ici</p>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-geri-navy mb-2">Bracelet Bubble</h3>
                <p className="text-geri-navy/70 mb-4 leading-relaxed">
                  Chaîne délicate ponctuée de bulles de couleurs, légère comme un souffle.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-geri-navy font-semibold">Sur mesure</span>
                  <button className="text-geri-gold hover:text-geri-rose transition-colors duration-300">
                    Détails →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-geri-navy mb-6">Savoir-Faire d'Exception</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-geri-rose/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-geri-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Création sur Mesure</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                Chaque pièce Bubble est unique, créée selon vos désirs et votre personnalité. 
                Consultation personnalisée pour définir votre composition idéale.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-geri-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-geri-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Pierres Sélectionnées</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                Nos gemmologues sélectionnent personnellement chaque pierre pour sa qualité exceptionnelle, 
                sa couleur unique et son éclat parfait.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-geri-navy/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-geri-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Fabrication Française</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                Entièrement réalisée dans nos ateliers parisiens par des maîtres joailliers, 
                chaque pièce respecte les traditions d'excellence française.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-geri-navy to-geri-navy/90">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Créons Ensemble Votre Bijou Bubble
          </h2>
          <p className="text-white/80 text-lg mb-12 leading-relaxed">
            Prenez rendez-vous dans notre atelier parisien pour une consultation personnalisée. 
            Découvrez comment votre vision peut prendre vie à travers nos créations sur mesure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-geri-gold text-geri-navy px-12 py-4 hover:bg-white hover:text-geri-navy transition-all duration-300 font-medium tracking-wide text-lg"
            >
              Prendre Rendez-vous
            </Link>
            <Link 
              href="/collections" 
              className="border-2 border-white text-white px-12 py-4 hover:bg-white hover:text-geri-navy transition-all duration-300 font-medium tracking-wide text-lg"
            >
              Autres Collections
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}