import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-geri-navy/5 to-geri-gold/5"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-geri-navy mb-8">
            Prenons Rendez-vous
          </h1>
          <p className="text-geri-navy text-xl leading-relaxed max-w-3xl mx-auto">
            Découvrez l'univers GÉRI lors d'une consultation personnalisée dans notre atelier parisien. 
            Géraldine vous accueille pour créer ensemble votre bijou d'exception.
          </p>
        </div>
      </section>

      {/* Formulaire & Informations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulaire */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-geri-navy mb-8">Demande de Rendez-vous</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-geri-navy font-medium mb-2">Prénom *</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-4 py-3 border border-geri-navy/20 rounded-lg focus:border-geri-gold focus:ring-2 focus:ring-geri-gold/20 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-geri-navy font-medium mb-2">Nom *</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-4 py-3 border border-geri-navy/20 rounded-lg focus:border-geri-gold focus:ring-2 focus:ring-geri-gold/20 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-geri-navy font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 border border-geri-navy/20 rounded-lg focus:border-geri-gold focus:ring-2 focus:ring-geri-gold/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-geri-navy font-medium mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 border border-geri-navy/20 rounded-lg focus:border-geri-gold focus:ring-2 focus:ring-geri-gold/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-geri-navy font-medium mb-2">Votre intérêt</label>
                  <select 
                    id="interest"
                    className="w-full px-4 py-3 border border-geri-navy/20 rounded-lg focus:border-geri-gold focus:ring-2 focus:ring-geri-gold/20 transition-colors"
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="bubble">Collection Bubble</option>
                    <option value="kiss-me">Collection Kiss Me</option>
                    <option value="sur-mesure">Création sur mesure</option>
                    <option value="decouverte">Découverte de la maison</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-geri-navy font-medium mb-2">Budget envisagé (optionnel)</label>
                  <select 
                    id="budget"
                    className="w-full px-4 py-3 border border-geri-navy/20 rounded-lg focus:border-geri-gold focus:ring-2 focus:ring-geri-gold/20 transition-colors"
                  >
                    <option value="">Non communiqué</option>
                    <option value="5-10k">5 000 - 10 000 €</option>
                    <option value="10-25k">10 000 - 25 000 €</option>
                    <option value="25-50k">25 000 - 50 000 €</option>
                    <option value="50k+">50 000 € et plus</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-geri-navy font-medium mb-2">Votre message</label>
                  <textarea 
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-geri-navy/20 rounded-lg focus:border-geri-gold focus:ring-2 focus:ring-geri-gold/20 transition-colors resize-none"
                    placeholder="Décrivez-nous votre projet, vos inspirations, ou toute question particulière..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="privacy"
                    className="mt-1 w-5 h-5 text-geri-gold border border-geri-navy/20 rounded focus:ring-geri-gold focus:ring-2"
                    required
                  />
                  <label htmlFor="privacy" className="text-geri-navy/70 text-sm leading-relaxed">
                    J'accepte que mes données soient utilisées pour traiter ma demande de rendez-vous. 
                    Elles ne seront en aucun cas transmises à des tiers. *
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-geri-navy text-white py-4 rounded-lg hover:bg-geri-gold hover:text-geri-navy transition-all duration-300 font-medium tracking-wide text-lg shadow-lg"
                >
                  Envoyer ma demande
                </button>
              </form>

              <p className="text-geri-navy/60 text-sm mt-6 leading-relaxed">
                <strong>Confidentialité garantie :</strong> Toutes vos informations sont traitées avec la plus stricte confidentialité. 
                Nous vous recontacterons dans les 24h pour convenir d'un rendez-vous.
              </p>
            </div>

            {/* Informations */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-geri-navy mb-8">Informations Pratiques</h2>
                
                <div className="space-y-8">
                  {/* Atelier */}
                  <div className="bg-gradient-to-br from-geri-navy/5 to-geri-gold/5 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-geri-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-geri-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-geri-navy mb-3">Atelier Parisien</h3>
                        <p className="text-geri-navy/70 leading-relaxed mb-3">
                          <strong>Sur rendez-vous uniquement</strong><br/>
                          Adresse communiquée lors de la confirmation du rendez-vous<br/>
                          <em>Discrétion et confidentialité garanties</em>
                        </p>
                        <div className="text-sm text-geri-navy/60">
                          <p>• Consultation privée : 1h30</p>
                          <p>• Présentation des collections</p>
                          <p>• Étude personnalisée sur mesure</p>
                          <p>• Visite de l'atelier</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="bg-gradient-to-br from-geri-rose/5 to-geri-gold/5 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-geri-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-geri-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-geri-navy mb-3">Contact Direct</h3>
                        <p className="text-geri-navy/70 leading-relaxed mb-3">
                          <strong>Email :</strong> contact@maison-geri.com<br/>
                          <strong>Réponse :</strong> Sous 24h<br/>
                          <em>Géraldine Samuel répond personnellement</em>
                        </p>
                        <div className="text-sm text-geri-navy/60">
                          <p>• Lundi - Vendredi : 10h - 18h</p>
                          <p>• Samedi : Sur rendez-vous</p>
                          <p>• Fermé dimanche et jours fériés</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Process */}
                  <div className="bg-gradient-to-br from-geri-gold/5 to-geri-navy/5 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-geri-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-geri-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-geri-navy mb-3">Déroulement</h3>
                        <div className="space-y-3 text-geri-navy/70 text-sm">
                          <div className="flex items-center space-x-3">
                            <span className="w-6 h-6 bg-geri-navy/10 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span>Demande en ligne ou contact direct</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="w-6 h-6 bg-geri-rose/10 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span>Confirmation et adresse de l'atelier</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="w-6 h-6 bg-geri-gold/10 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <span>Rendez-vous personnalisé avec Géraldine</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="w-6 h-6 bg-geri-navy/10 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                            <span>Création et suivi de votre projet</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-geri-navy/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-geri-navy mb-12 text-center">Questions Fréquentes</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Le rendez-vous est-il payant ?</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                Non, la consultation découverte est entièrement gratuite et sans engagement. 
                Nous souhaitons que vous puissiez découvrir notre univers en toute sérénité 
                avant de vous engager dans un projet sur mesure.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Combien de temps pour créer un bijou sur mesure ?</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                Le délai varie selon la complexité de la pièce : 4 à 8 semaines pour une création standard, 
                8 à 12 semaines pour une pièce d'exception avec pavage complexe. Nous vous communiquons 
                un planning précis après validation du design.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Puis-je modifier une pièce existante ?</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                Absolument ! Géraldine peut adapter nos créations existantes à vos préférences : 
                modification de taille, changement de pierres, adaptation du métal. 
                Chaque pièce peut être personnalisée selon vos envies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-serif text-xl font-bold text-geri-navy mb-4">Proposez-vous un certificat d'authenticité ?</h3>
              <p className="text-geri-navy/70 leading-relaxed">
                Chaque création GÉRI est accompagnée d'un certificat d'authenticité détaillé, 
                mentionnant les caractéristiques des pierres (certificats gemmologiques), 
                le métal utilisé, et la signature de l'artisan créateur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}