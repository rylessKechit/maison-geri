import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function MaisonPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-geri-navy/10 via-white to-geri-gold/5"></div>
        
        {/* Motifs décoratifs élégants */}
        <div className="absolute top-32 right-20 w-40 h-40 bg-geri-rose/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-geri-gold/15 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait de Géraldine */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-geri-navy/5 to-geri-rose/10 rounded-3xl p-12 h-96 lg:h-[500px] relative overflow-hidden shadow-2xl">
                  {/* Éléments décoratifs autour du portrait */}
                  <div className="absolute top-8 right-8 w-6 h-6 bg-geri-gold/30 rounded-full"></div>
                  <div className="absolute bottom-12 left-8 w-8 h-8 bg-geri-rose/25 rounded-full"></div>
                  <div className="absolute top-1/2 right-12 w-4 h-4 bg-geri-navy/20 rounded-full"></div>
                  
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-geri-navy/10 to-geri-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <span className="font-serif text-4xl text-geri-navy/60">GS</span>
                      </div>
                      <p className="text-geri-navy/60 italic">Portrait de Géraldine Samuel<br />Créatrice & Directrice Artistique</p>
                    </div>
                  </div>
                </div>
                
                {/* Sceau authentique */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-geri-rose rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-serif text-xl font-bold">G</span>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-geri-navy/10">
                  <div className="w-3 h-3 bg-geri-gold rounded-full"></div>
                  <span className="text-geri-navy font-medium">Maison GÉRI</span>
                </div>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl font-bold text-geri-navy mb-8">
                Géraldine Samuel
              </h1>
              
              <div className="space-y-6 text-geri-navy/80 text-lg leading-relaxed">
                <p>
                  <strong>Quatrième génération</strong> d'une lignée de joailliers d'exception, 
                  Géraldine Samuel incarne l'héritage français de la haute joaillerie tout en 
                  y insufflant sa vision résolument moderne.
                </p>
                <p>
                  Petite-fille de <span className="text-geri-gold font-semibold">Fred Samuel</span>, 
                  fondateur de la mythique Maison Fred, elle a grandi entourée de gemmes et 
                  de créations extraordinaires, forgeant sa passion dès son plus jeune âge.
                </p>
                <blockquote className="font-serif text-xl italic text-geri-navy border-l-4 border-geri-rose pl-6 my-8">
                  "Aussi loin que je me souvienne, j'ai toujours eu des gemmes et des bijoux devant les yeux"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'Héritage Familial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-geri-navy mb-6">Un Héritage d'Exception</h2>
            <p className="text-geri-navy/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Quatre générations de passion, d'innovation et d'excellence dans l'art de la joaillerie française
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 1ère génération */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-geri-navy/10 to-geri-gold/10 rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <span className="font-serif text-2xl text-geri-navy/60">I</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-geri-gold rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Les Fondations</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                <strong>Fred Samuel</strong> fonde la Maison Fred et établit les bases 
                d'une tradition joaillière d'exception, révolutionnant l'approche 
                créative des bijoux de luxe.
              </p>
            </div>

            {/* 2ème & 3ème génération */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-geri-rose/10 to-geri-navy/10 rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <span className="font-serif text-2xl text-geri-navy/60">II-III</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-geri-rose rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2-3</span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">L'Évolution</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                La famille perpétue et enrichit l'héritage, développant le savoir-faire 
                et transmettant à Géraldine les secrets de cet art ancestral, 
                entre Paris et Provence.
              </p>
            </div>

            {/* 4ème génération - Géraldine */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-geri-gold/20 to-geri-rose/15 rounded-full mx-auto flex items-center justify-center shadow-xl border-4 border-geri-gold/30">
                  <span className="font-serif text-3xl text-geri-navy font-bold">G</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-geri-navy rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">La Renaissance</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                <strong>Géraldine Samuel</strong> crée GÉRI, alliant tradition familiale 
                et vision contemporaine. Une approche moderne du luxe, 
                <em>imbued with élégance, humour, and sensualité.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Le Parcours de Géraldine */}
      <section className="py-20 bg-gradient-to-br from-geri-navy/5 to-geri-rose/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-geri-navy mb-8">
                Un Parcours d'Excellence
              </h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-geri-gold pl-6">
                  <h3 className="font-serif text-xl font-bold text-geri-navy mb-3">Formation Business & Gemmologie</h3>
                  <p className="text-geri-navy/70 leading-relaxed">
                    Études de commerce à <strong>Paris</strong>, puis formation en gemmologie à 
                    <strong>Los Angeles</strong>. Une double expertise unique alliant vision 
                    stratégique et connaissance technique des pierres précieuses.
                  </p>
                </div>

                <div className="border-l-4 border-geri-rose pl-6">
                  <h3 className="font-serif text-xl font-bold text-geri-navy mb-3">Expériences Prestigieuses</h3>
                  <p className="text-geri-navy/70 leading-relaxed">
                    Collaborations avec les plus grandes Maisons : <strong>Breguet</strong> pour 
                    l'horlogerie d'exception et <strong>Lorenz Bäumer</strong> pour la haute joaillerie. 
                    Des expériences qui affinent sa vision de l'art et de la mode.
                  </p>
                </div>

                <div className="border-l-4 border-geri-navy pl-6">
                  <h3 className="font-serif text-xl font-bold text-geri-navy mb-3">Naissance de GÉRI</h3>
                  <p className="text-geri-navy/70 leading-relaxed">
                    Fort de ces expériences, Géraldine crée sa propre vision du luxe moderne : 
                    <strong>entièrement fabriquée en France</strong>, chaque pièce GÉRI 
                    porte sa signature unique d'élégance, d'humour et de sensualité.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline visuelle */}
            <div className="relative">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-geri-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-geri-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-geri-navy">Paris & Los Angeles</h4>
                    <p className="text-geri-navy/60 text-sm">Formation business & gemmologie</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-geri-rose/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-geri-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-geri-navy">Breguet & Lorenz Bäumer</h4>
                    <p className="text-geri-navy/60 text-sm">Expériences maisons prestigieuses</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-geri-navy/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-geri-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-geri-navy">Création de GÉRI</h4>
                    <p className="text-geri-navy/60 text-sm">Vision moderne du luxe français</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie Créative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-geri-navy mb-6">Philosophie Créative</h2>
            <p className="text-geri-navy/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Découvrez les valeurs et la vision qui guident chaque création GÉRI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Élégance */}
            <div className="text-center">
              <div className="w-20 h-20 bg-geri-navy/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-geri-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Élégance</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                L'art français de vivre sublimé. Chaque ligne, chaque courbe répond aux 
                codes de l'élégance parisienne, intemporelle et raffinée. Une sophistication 
                naturelle qui transcende les modes.
              </p>
            </div>

            {/* Humour */}
            <div className="text-center">
              <div className="w-20 h-20 bg-geri-rose/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-geri-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Humour</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                L'esprit français par excellence. Nos créations ont cette pointe d'impertinence, 
                cette légèreté qui fait sourire. Des clins d'œil subtils qui révèlent 
                la personnalité pétillante de celle qui les porte.
              </p>
            </div>

            {/* Sensualité */}
            <div className="text-center">
              <div className="w-20 h-20 bg-geri-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-geri-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Sensualité</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                La féminité assumée et moderne. Nos bijoux épousent les courbes, caressent la peau, 
                révèlent la beauté naturelle. Une sensualité délicate qui célèbre 
                la femme dans toute sa splendeur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'Atelier Parisien */}
      <section className="py-20 bg-gradient-to-br from-geri-gold/5 to-geri-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-geri-gold/10 rounded-3xl p-12 h-96 relative overflow-hidden shadow-2xl">
                  {/* Outils de joaillerie stylisés */}
                  <div className="absolute top-8 right-8 w-12 h-2 bg-geri-gold/30 rounded-full transform rotate-45"></div>
                  <div className="absolute bottom-12 left-8 w-8 h-8 border-2 border-geri-rose/30 rounded-full"></div>
                  <div className="absolute top-16 left-12 w-6 h-6 bg-geri-navy/20 rounded-full"></div>
                  
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-geri-navy/10 to-geri-gold/10 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <svg className="w-16 h-16 text-geri-navy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                        </svg>
                      </div>
                      <p className="text-geri-navy/60 italic">Photos de l'atelier parisien<br />& outils traditionnels</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl font-bold text-geri-navy mb-8">
                L'Atelier Parisien
              </h2>
              
              <div className="space-y-6 text-geri-navy/80 leading-relaxed">
                <p>
                  Au cœur de Paris, dans un atelier baigné de lumière naturelle, 
                  Géraldine Samuel et son équipe de maîtres joailliers donnent vie 
                  à chaque création GÉRI.
                </p>
                
                <p>
                  <strong>Entièrement fabriqués en France</strong>, nos bijoux respectent 
                  les traditions séculaires de la joaillerie parisienne. Chaque geste, 
                  chaque technique perpétue un savoir-faire d'exception transmis de 
                  génération en génération.
                </p>

                <div className="bg-geri-gold/10 rounded-xl p-6 my-8">
                  <h4 className="font-serif text-lg font-bold text-geri-navy mb-4">Notre Processus de Création</h4>
                  <ul className="space-y-3 text-geri-navy/70">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-geri-gold rounded-full"></div>
                      <span>Consultation personnalisée et design sur mesure</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-geri-rose rounded-full"></div>
                      <span>Sélection minutieuse des pierres par nos gemmologues</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-geri-navy rounded-full"></div>
                      <span>Façonnage artisanal et sertissage d'exception</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-geri-gold rounded-full"></div>
                      <span>Finitions haute couture et contrôle qualité</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-geri-navy/60 italic">
                  Chaque pièce GÉRI nécessite entre 15 et 150 heures de travail artisanal, 
                  selon la complexité du design et la densité du pavage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rencontrer Géraldine */}
      <section className="py-20 bg-geri-navy">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Rencontrer Géraldine Samuel
          </h2>
          <p className="text-white/80 text-lg mb-12 leading-relaxed">
            Découvrez l'univers GÉRI lors d'un rendez-vous personnalisé dans notre atelier parisien. 
            Géraldine vous accueille pour partager sa passion et créer ensemble votre bijou d'exception.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-geri-gold text-geri-navy px-12 py-4 hover:bg-white hover:text-geri-navy transition-all duration-300 font-medium tracking-wide text-lg shadow-xl"
            >
              Prendre Rendez-vous
            </Link>
            <Link 
              href="/collections" 
              className="border-2 border-white text-white px-12 py-4 hover:bg-white hover:text-geri-navy transition-all duration-300 font-medium tracking-wide text-lg"
            >
              Découvrir les Collections
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold text-white mb-4">Consultation Privée</h3>
              <p className="text-white/80 leading-relaxed">
                Rendez-vous sur mesure pour découvrir nos collections et créer votre bijou unique. 
                Durée : 1h30 • Sur rendez-vous uniquement
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold text-white mb-4">Atelier Paris</h3>
              <p className="text-white/80 leading-relaxed">
                Visite de l'atelier et rencontre avec nos artisans joailliers. 
                Découvrez les secrets de fabrication de nos créations d'exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}