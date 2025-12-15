import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-geri-navy/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl font-light text-geri-navy mb-8 tracking-wide">
            Mentions Légales
          </h1>
          <p className="text-geri-navy/60 text-lg font-light leading-relaxed">
            Informations légales concernant Maison GÉRI
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12 text-geri-navy/80 leading-relaxed">
            
            {/* Éditeur du site */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Éditeur du site
              </h2>
              <div className="space-y-4 font-light">
                <p><strong>Raison sociale :</strong> Maison GÉRI</p>
                <p><strong>Forme juridique :</strong> SARL</p>
                <p><strong>Directrice de la publication :</strong> Géraldine Samuel</p>
                <p><strong>Email :</strong> contact@maison-geri.fr</p>
                <p><strong>Siège social :</strong> Paris, France</p>
              </div>
            </div>

            {/* Hébergeur */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Hébergement
              </h2>
              <div className="space-y-4 font-light">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-geri-gold hover:text-geri-navy transition-colors">vercel.com</a></p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Propriété intellectuelle
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La marque GÉRI, les logos, et tous les éléments de design sont la propriété exclusive de Maison GÉRI. 
                  Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.
                </p>
              </div>
            </div>

            {/* Protection des données */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Protection des données personnelles
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
                  de rectification, de portabilité et d'effacement de vos données.
                </p>
                <p>
                  Pour exercer ces droits ou pour toute question sur le traitement de vos données, 
                  vous pouvez nous contacter à : <span className="text-geri-gold">contact@maison-geri.fr</span>
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Limitation de responsabilité
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                  mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, 
                  merci de nous le signaler par email en décrivant le problème de la manière la plus précise possible.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Droit applicable et juridiction
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  Les présentes mentions légales du site sont régies par les lois françaises et 
                  toute contestation ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci 
                  seront de la compétence exclusive des tribunaux français.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}