import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function BubblePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Style accueil avec image sombre */}
      <section className="relative h-screen flex items-end justify-start overflow-hidden">
        {/* Image de fond sombre */}
        <div className="absolute inset-0">
          <Image 
            src="/bubble-hero.jpeg" 
            alt="Collection Bubble" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"></div>
          
          {/* Texture subtile */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-geri-navy/40 via-transparent to-geri-rose/10"></div>
          </div>
          
          {/* Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"></div>
        </div>
        
        {/* Texte en bas à gauche */}
        <div className="relative z-10 max-w-lg mb-20 ml-8 md:ml-16 px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-6 tracking-wide">
            Bubble
          </h1>
          <p className="text-white/80 text-lg font-light leading-relaxed">
            L'effervescence de la joie dans un kaléidoscope 
            de pierres précieuses multicolores.
          </p>
        </div>

        {/* Flèche de scroll */}
        <a 
          href="#content"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </a>
      </section>

      {/* Contenu principal */}
      <section id="content" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-5xl font-light text-geri-navy mb-10 tracking-wide">
                L'Art de la Joie
              </h2>
              <div className="space-y-8 text-geri-navy/80 leading-relaxed font-light text-lg">
                <p>
                  La collection <strong className="font-medium">Bubble</strong> capture l'essence même de la joie de vivre à la française. 
                  Chaque pièce évoque l'effervescence du champagne, la légèreté des bulles de savon dans un jardin parisien.
                </p>
                <p>
                  Tourmalines roses, saphirs jaunes et diamants s'assemblent dans un kaléidoscope de couleurs, 
                  créant des compositions uniques qui changent selon la lumière et le mouvement.
                </p>
                <blockquote className="font-serif text-2xl italic text-geri-navy border-l border-geri-gold/30 pl-8 my-12 font-light">
                  "Chaque bulle raconte une histoire de bonheur, une promesse de moments précieux à vivre."
                  <cite className="block text-base font-normal mt-4 not-italic tracking-wider">— Géraldine Samuel</cite>
                </blockquote>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-geri-rose/10 to-geri-gold/10 aspect-square relative overflow-hidden">
                <Image 
                  src="/bubble-detail.jpeg" 
                  alt="Détail Bubble" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-geri-rose/10 to-geri-gold/10"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-geri-gold/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="py-32 bg-gradient-to-br from-geri-navy/3 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl font-light text-geri-navy mb-8 tracking-wide">
              Savoir-Faire d'Exception
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">Création sur Mesure</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                Chaque pièce Bubble est unique, créée selon vos désirs et votre personnalité. 
                Consultation personnalisée pour définir votre composition idéale.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">Pierres Sélectionnées</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                Nos gemmologues sélectionnent personnellement chaque pierre pour sa qualité exceptionnelle, 
                sa couleur unique et son éclat parfait.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">Fabrication Experte</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                Entièrement réalisée par des artisans experts, 
                chaque pièce respecte les traditions d'excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl font-light text-geri-navy mb-8 tracking-wide">
            Créons Ensemble Votre Bijou Bubble
          </h2>
          <p className="text-geri-navy/60 text-lg font-light mb-12 leading-relaxed">
            Prenez rendez-vous dans notre atelier parisien pour une consultation personnalisée. 
            Découvrez comment votre vision peut prendre vie.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block bg-geri-navy text-white px-12 py-4 hover:bg-geri-gold hover:text-geri-navy transition-all duration-300 font-light tracking-wide"
          >
            Prendre Rendez-vous
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}