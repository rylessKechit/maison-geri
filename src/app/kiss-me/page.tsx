import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function KissMePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-geri-navy/20 via-geri-rose/10 to-black/5"></div>
        
        {/* Motifs de lèvres */}
        <div className="absolute top-1/4 left-1/5 w-24 h-12 bg-geri-rose/20 rounded-full transform rotate-12 blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-8 bg-geri-rose/30 rounded-full transform -rotate-12 blur-sm"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-geri-navy mb-6">
            Kiss Me
          </h1>
          <p className="text-geri-navy text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
            L'audace et la <span className="text-geri-rose font-bold">sensualité</span> incarnées en bijoux. 
            Des lèvres pavées de <span className="text-geri-gold font-bold">diamants</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-geri-rose text-white px-12 py-4 hover:bg-geri-navy transition-all duration-500 font-medium">
              Explorer Kiss Me
            </button>
            <Link href="#collection" className="border-2 border-geri-rose text-geri-rose px-12 py-4 hover:bg-geri-rose hover:text-white transition-all duration-300">
              Les Créations
            </Link>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-5xl font-bold text-geri-navy mb-16 text-center">Les Créations Kiss Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Collier Kiss Me */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <div className="h-80 bg-gradient-to-br from-geri-rose/10 to-geri-navy/5 rounded-2xl mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-12 bg-geri-rose/20 rounded-full mx-auto mb-6"></div>
                  <p className="text-geri-navy/60 italic">Photo collier Kiss Me</p>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-geri-navy mb-4">Collier Kiss Me Statement</h3>
              <p className="text-geri-navy/70 mb-6">Pièce maîtresse avec lèvres pavées de diamants blancs et rubis roses.</p>
              <div className="flex items-center justify-between">
                <span className="text-geri-navy font-semibold">Sur consultation</span>
                <button className="text-geri-rose hover:text-geri-navy">Découvrir →</button>
              </div>
            </div>

            {/* Boucles d'oreilles Kiss Me */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <div className="h-80 bg-gradient-to-br from-geri-gold/10 to-geri-rose/10 rounded-2xl mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex space-x-4 justify-center mb-6">
                    <div className="w-8 h-4 bg-geri-rose/30 rounded-full"></div>
                    <div className="w-8 h-4 bg-geri-gold/30 rounded-full"></div>
                  </div>
                  <p className="text-geri-navy/60 italic">Photo boucles d'oreilles</p>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-geri-navy mb-4">Boucles d'Oreilles Kiss Me</h3>
              <p className="text-geri-navy/70 mb-6">Puces délicates en forme de lèvres, entièrement pavées.</p>
              <div className="flex items-center justify-between">
                <span className="text-geri-navy font-semibold">Sur consultation</span>
                <button className="text-geri-rose hover:text-geri-navy">Découvrir →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-geri-rose">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Osez Kiss Me</h2>
          <p className="text-white/90 text-lg mb-12">
            Révélez votre sensualité avec une création Kiss Me unique.
          </p>
          <Link href="/contact" className="bg-white text-geri-rose px-12 py-4 hover:bg-geri-gold hover:text-white transition-all duration-300 font-medium">
            Prendre Rendez-vous
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}