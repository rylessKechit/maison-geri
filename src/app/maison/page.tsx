import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function MaisonPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Section principale - Texte + Image */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="font-serif text-6xl font-light text-geri-navy mb-10 tracking-wide">
                Maison GÉRI
              </h1>
              <div className="space-y-8 text-geri-navy/80 leading-relaxed font-light text-lg">
                <p>
                  <strong className="font-medium">Quatrième génération</strong> d'une lignée de joailliers d'exception, 
                  Géraldine Samuel perpétue l'héritage français de la haute joaillerie tout en 
                  y insufflant sa vision résolument moderne.
                </p>
                <p>
                  Petite-fille de <strong className="font-medium text-geri-gold">Fred Samuel</strong>, 
                  fondateur de la mythique Maison Fred, elle a grandi entourée de gemmes et 
                  de créations extraordinaires, forgeant sa passion dès son plus jeune âge.
                </p>
                <blockquote className="font-serif text-2xl italic text-geri-navy border-l border-geri-gold/30 pl-8 my-12 font-light">
                  "Aussi loin que je me souvienne, j'ai toujours eu des gemmes et des bijoux devant les yeux"
                  <cite className="block text-base font-normal mt-4 not-italic tracking-wider">— Géraldine Samuel</cite>
                </blockquote>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <Image 
                  src="/geraldine-samuel-portrait.jpeg" 
                  alt="Géraldine Samuel - Créatrice GÉRI" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-geri-gold/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* L'Héritage */}
      <section className="py-32 bg-gradient-to-br from-geri-navy/3 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl font-light text-geri-navy mb-8 tracking-wide">
              Un Héritage d'Exception
            </h2>
            <p className="text-geri-navy/60 text-lg font-light max-w-3xl mx-auto leading-relaxed">
              Quatre générations de passion, d'innovation et d'excellence 
              dans l'art de la joaillerie française
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">Fred Samuel</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                Fondateur de la Maison Fred, établit les bases d'une tradition joaillière d'exception 
                et révolutionne l'approche créative des bijoux de luxe.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">L'Évolution</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                Deux générations perpétuent et enrichissent l'héritage, développant le savoir-faire 
                et transmettant à Géraldine les secrets de cet art ancestral.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">La Renaissance</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                Géraldine Samuel crée GÉRI, alliant tradition familiale et vision contemporaine. 
                Une approche moderne du luxe, empreinte d'élégance et de sensualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl font-light text-geri-navy mb-8 tracking-wide">
              Un Parcours d'Excellence
            </h2>
            <p className="text-geri-navy/60 text-lg font-light max-w-3xl mx-auto leading-relaxed">
              Formation internationale et expériences prestigieuses 
              qui façonnent la vision unique de Géraldine Samuel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">Formation Excellence</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                Études de commerce à Paris, formation en gemmologie à Los Angeles. 
                Double expertise alliant vision stratégique et connaissance technique des pierres précieuses.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">Expériences Prestigieuses</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                Collaborations avec les plus grandes Maisons : Breguet pour l'horlogerie d'exception 
                et Lorenz Bäumer pour la haute joaillerie.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">Naissance de GÉRI</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                Création de sa propre vision du luxe moderne, signature unique d'élégance, 
                d'humour et de sensualité dans chaque création.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="py-32 bg-gradient-to-br from-geri-navy/3 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl font-light text-geri-navy mb-8 tracking-wide">
              Philosophie Créative
            </h2>
            <p className="text-geri-navy/60 text-lg font-light max-w-3xl mx-auto leading-relaxed">
              Trois piliers fondamentaux guident chaque création GÉRI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">Élégance</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                L'art français de vivre sublimé. Une sophistication naturelle 
                qui transcende les modes et révèle l'élégance parisienne intemporelle.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">Humour</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                L'esprit français par excellence. Cette pointe d'impertinence 
                et de légèreté qui révèle la personnalité pétillante de celle qui les porte.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-xl font-light text-geri-navy mb-4 tracking-wide">Sensualité</h3>
              <p className="text-geri-navy/70 font-light leading-relaxed">
                La féminité assumée et moderne. Une sensualité délicate 
                qui célèbre la femme dans toute sa splendeur naturelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl font-light text-geri-navy mb-8 tracking-wide">
            Rencontrer Géraldine Samuel
          </h2>
          <p className="text-geri-navy/60 text-lg font-light mb-12 leading-relaxed">
            Découvrez l'univers GÉRI lors d'un rendez-vous personnalisé dans notre atelier parisien. 
            Géraldine vous accueille pour partager sa passion et créer ensemble votre bijou d'exception.
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