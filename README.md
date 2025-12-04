# 💎 Maison GÉRI - Site Web Officiel

Site web de luxe pour la Maison GÉRI, créations de joaillerie française d'exception par Géraldine Samuel.

## ✨ Fonctionnalités

### 🏠 **Page d'Accueil**

- Hero section avec identité visuelle forte
- Présentation des collections phares (Bubble & Kiss Me)
- Section savoir-faire français

### 💍 **Collections**

- **Collection Bubble** : Joie de vivre, pierres colorées, bulles de bonheur
- **Collection Kiss Me** : Sensualité et audace, lèvres pavées de diamants
- Page générale des collections avec aperçu des futures créations

### 👩‍🎨 **Maison GÉRI**

- Histoire complète de Géraldine Samuel (4ème génération)
- Héritage familial et parcours d'excellence
- Philosophie créative : Élégance, Humour, Sensualité
- Présentation de l'atelier parisien

### 📞 **Contact & Rendez-vous**

- Formulaire de demande de rendez-vous personnalisé
- Informations pratiques (atelier, horaires)
- FAQ complète
- Process de création détaillé

## 🎨 **Identité Visuelle**

### Palette de Couleurs

```css
--color-geri-navy: #1e293b   /* Bleu marine signature */
--color-geri-rose: #f1a2b0   /* Rose poudré élégant */
--color-geri-gold: #d4af37   /* Or raffiné */
```

### Typographie

- **Headers** : Playfair Display (serif élégant)
- **Body** : Inter (sans-serif moderne)
- Style luxury avec attention aux détails

### Design System

- Esthétique française sophistiquée
- Animations subtiles et interactions fluides
- Responsive design mobile-first
- Accessibilité intégrée

## 🛠 **Technologies Utilisées**

- **Next.js 15** - Framework React moderne
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling avancé avec @theme
- **Google Fonts** - Playfair Display & Inter
- **Responsive Design** - Mobile-first approach

## 📦 **Installation**

```bash
# Cloner le projet
cd maison-geri

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build
npm start
```

## 📁 **Structure du Projet**

```
src/
├── app/                    # App Router Next.js 15
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout racine
│   ├── globals.css        # Styles globaux & thème
│   ├── collections/       # Page collections générale
│   ├── bubble/            # Collection Bubble
│   ├── kiss-me/          # Collection Kiss Me
│   ├── maison/           # Histoire Géraldine Samuel
│   └── contact/          # Contact & RDV
└── components/
    └── layout/
        ├── Header.tsx     # Navigation responsive
        └── Footer.tsx     # Footer avec liens
```

## 🎯 **Pages Créées**

### ✅ **Terminé**

1. **Accueil** (`/`) - Hero + aperçu collections
2. **Collection Bubble** (`/bubble`) - Page complète joyeuse
3. **Collection Kiss Me** (`/kiss-me`) - Page sensuelle & audacieuse
4. **Maison GÉRI** (`/maison`) - Histoire de Géraldine Samuel
5. **Collections** (`/collections`) - Vue d'ensemble
6. **Contact** (`/contact`) - RDV & informations

### 🎨 **Design Features**

- Animations CSS natives (bulles flottantes, hover effects)
- Patterns visuels par collection (bulles pour Bubble, lèvres pour Kiss Me)
- Gradients et effets de profondeur
- Micro-interactions et feedback utilisateur
- Loading states et transitions fluides

## 📸 **Images Nécessaires**

### **Priority 1 - Essentiel**

- Logo GÉRI haute résolution (SVG vectoriel)
- Portrait professionnel Géraldine Samuel
- Photos bijoux Collection Bubble (fond blanc + lifestyle)
- Photos bijoux Collection Kiss Me (artistique + détails)

### **Priority 2 - Important**

- Photos atelier parisien et outils joaillerie
- Images process création (sertissage, pavage)
- Photos pierres précieuses (diamants, rubis, saphirs)
- Certificats et authentifications

### **Priority 3 - Améliorations**

- Photos lifestyle collections portées
- Détails macro des pavages
- Ambiance atelier et création
- Photos Provence (inspiration familiale)

## 🚀 **Prochaines Étapes Recommandées**

### **Phase 1 - Finalisation**

1. **Intégration images réelles** (remplacer placeholders)
2. **Optimisations SEO** (métadonnées, sitemap)
3. **Tests responsive** sur tous devices
4. **Optimisation performances** (images, fonts)

### **Phase 2 - Améliorations**

1. **Animations avancées** (scroll-triggered, parallax)
2. **Formulaire contact** fonctionnel (API/backend)
3. **Galerie interactive** avec zoom et 360°
4. **Blog/Actualités** section (optionnel)

### **Phase 3 - Fonctionnalités**

1. **Système de rendez-vous** en ligne
2. **Espace client** privé
3. **Configurateur bijoux** sur mesure
4. **Multi-langue** (FR/EN)

## 📱 **Compatibilité**

- ✅ Chrome/Edge (moderne)
- ✅ Firefox (moderne)
- ✅ Safari (iOS/macOS)
- ✅ Mobile (iOS/Android)
- ✅ Tablet (iPad, Android)

## 🔧 **Configuration**

### **Tailwind CSS v4**

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

### **Next.js**

- App Router activé
- TypeScript configuré
- Optimisation images automatique
- Compression et minification

## 📞 **Support Technique**

Pour toute question technique ou modification :

- Vérifier la documentation Next.js 15
- Consulter la doc Tailwind CSS v4
- Tests sur différents navigateurs recommandés

---

**Créé avec ❤️ pour Maison GÉRI**  
_Joaillerie française d'exception depuis 4 générations_
