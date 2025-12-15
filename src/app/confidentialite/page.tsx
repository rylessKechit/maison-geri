import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Confidentialite() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-geri-navy/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl font-light text-geri-navy mb-8 tracking-wide">
            Politique de Confidentialité
          </h1>
          <p className="text-geri-navy/60 text-lg font-light leading-relaxed">
            Protection et traitement de vos données personnelles
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12 text-geri-navy/80 leading-relaxed">
            
            {/* Introduction */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Introduction
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  Maison GÉRI s'engage à protéger la confidentialité de vos informations personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données 
                  lorsque vous visitez notre site web ou utilisez nos services.
                </p>
                <p>
                  En utilisant notre site, vous acceptez les pratiques décrites dans cette politique de confidentialité.
                </p>
              </div>
            </div>

            {/* Données collectées */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Données collectées
              </h2>
              <div className="space-y-4 font-light">
                <p><strong>Informations que vous nous fournissez directement :</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nom, prénom, adresse email lors de demandes de contact</li>
                  <li>Numéro de téléphone pour les prises de rendez-vous</li>
                  <li>Préférences et informations concernant vos projets joailliers</li>
                  <li>Correspondances et communications avec notre équipe</li>
                </ul>
                
                <p className="mt-6"><strong>Informations collectées automatiquement :</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Adresse IP et données de navigation</li>
                  <li>Type de navigateur et système d'exploitation</li>
                  <li>Pages visitées et temps passé sur le site</li>
                  <li>Cookies et technologies similaires</li>
                </ul>
              </div>
            </div>

            {/* Utilisation des données */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Utilisation de vos données
              </h2>
              <div className="space-y-4 font-light">
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Répondre à vos demandes de renseignements et prises de rendez-vous</li>
                  <li>Personnaliser nos services selon vos préférences</li>
                  <li>Améliorer l'expérience utilisateur de notre site web</li>
                  <li>Vous informer de nos nouvelles collections (avec votre consentement)</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </div>
            </div>

            {/* Partage des données */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Partage de vos données
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  Maison GÉRI ne vend, ne loue, ni ne partage vos informations personnelles avec des tiers, 
                  sauf dans les cas suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour respecter une obligation légale</li>
                  <li>Avec nos prestataires de services techniques (hébergement, maintenance)</li>
                  <li>En cas de vente ou transfert d'activité (avec notification préalable)</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Cookies et technologies de suivi
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                  Les cookies sont de petits fichiers stockés sur votre appareil qui nous permettent de :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mémoriser vos préférences de navigation</li>
                  <li>Analyser l'utilisation du site pour l'améliorer</li>
                  <li>Personnaliser le contenu affiché</li>
                </ul>
                <p>
                  Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, 
                  mais cela peut affecter certaines fonctionnalités du site.
                </p>
              </div>
            </div>

            {/* Vos droits */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Vos droits
              </h2>
              <div className="space-y-4 font-light">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Droit d'accès :</strong> connaître les données que nous détenons sur vous</li>
                  <li><strong>Droit de rectification :</strong> corriger des informations inexactes</li>
                  <li><strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong>Droit de limitation :</strong> limiter le traitement de vos données</li>
                </ul>
                <p className="mt-6">
                  Pour exercer ces droits, contactez-nous à : 
                  <span className="text-geri-gold"> contact@maison-geri.fr</span>
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Sécurité des données
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles 
                  contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération et la destruction.
                </p>
                <p>
                  Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est 100% sécurisée. 
                  Nous nous efforçons d'utiliser des moyens acceptables pour protéger vos informations personnelles.
                </p>
              </div>
            </div>

            {/* Conservation */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Conservation des données
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités 
                  pour lesquelles elles ont été collectées, ou selon les exigences légales applicables.
                </p>
                <p>
                  Les données de contact sont conservées pendant 3 ans après le dernier contact. 
                  Les données relatives aux commandes sont conservées pendant 10 ans conformément aux obligations comptables.
                </p>
              </div>
            </div>

            {/* Contact et réclamations */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Contact et réclamations
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, 
                  vous pouvez nous contacter :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Email :</strong> contact@maison-geri.fr</li>
                  <li><strong>Délégué à la protection des données :</strong> Géraldine Samuel</li>
                </ul>
                <p>
                  Vous avez également le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) 
                  si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD.
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="font-serif text-2xl font-light text-geri-navy mb-6 tracking-wide">
                Modifications de cette politique
              </h2>
              <div className="space-y-4 font-light">
                <p>
                  Nous pouvons modifier cette politique de confidentialité de temps en temps. 
                  Les modifications seront publiées sur cette page avec la date de mise à jour.
                </p>
                <p>
                  <strong>Dernière mise à jour :</strong> 15 décembre 2025
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