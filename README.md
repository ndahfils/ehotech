# TP N'SIKAN PROJET ESPOIR - Site Web avec Bolt CMS

## 🏗️ Description

Site web moderne et professionnel pour TP N'SIKAN PROJET ESPOIR, entreprise de construction en Côte d'Ivoire. Le site inclut un système de gestion de contenu (CMS) complet pour une administration facile.

## 🎨 Charte Graphique

### Couleurs Principales
- **Vert Principal** : `#4a934a` (primary-500)
- **Rouge Bordeaux** : `#dc2626` (secondary-500)  
- **Gris** : `#6b7280` (neutral-500)

### Comment Modifier les Couleurs
1. **Couleurs globales** : Modifiez le fichier `tailwind.config.js`
2. **Variables CSS** : Utilisez les classes Tailwind `primary-*`, `secondary-*`, `neutral-*`

```css
/* Exemple pour changer la couleur principale */
/* Dans tailwind.config.js, ligne 8-18 */
primary: {
  500: '#votre-nouvelle-couleur', // Changez ici
}
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Installation
```bash
# 1. Cloner le projet
git clone [votre-repo]
cd tp-nsikan-bolt-cms

# 2. Installer les dépendances
npm install

# 3. Démarrer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:5173
```

### Démarrer le CMS (optionnel pour développement local)
```bash
# Dans un autre terminal
npm run cms
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx      # Navigation principale
│   ├── Footer.tsx      # Pied de page
│   ├── HeroSlider.tsx  # Slider d'accueil
│   └── AdminPanel.tsx  # Interface d'administration
├── pages/              # Pages du site
│   ├── Home.tsx        # Page d'accueil
│   ├── About.tsx       # À propos
│   ├── Services.tsx    # Services
│   ├── Projects.tsx    # Projets
│   └── Contact.tsx     # Contact
├── data/               # Données du CMS
│   ├── contact.json    # Informations de contact
│   ├── slides/         # Slides du carousel
│   ├── services/       # Services
│   ├── projects/       # Projets
│   └── team/          # Équipe
└── hooks/              # Hooks React personnalisés
    └── useContentData.ts
```

## ⚙️ Administration du Site

### Interface CMS (Recommandée)
- **URL** : `votre-site.com/admin`
- **Fonctionnalités** :
  - ✅ Gestion des slides d'accueil
  - ✅ Modification des services
  - ✅ Ajout/modification des projets
  - ✅ Gestion de l'équipe
  - ✅ Témoignages clients
  - ✅ Informations de contact

### Interface Admin Personnalisée
- **URL** : `votre-site.com/admin-panel`
- Interface de tableau de bord personnalisée

## 🖼️ Gestion des Images

### Remplacer les Images du Slider
1. **Via CMS** : Aller dans `/admin` → "Slider d'Accueil"
2. **Manuellement** : Modifier les fichiers dans `src/data/slides/`

### Ajouter de Nouvelles Images
```javascript
// Exemple dans src/data/slides/nouveau-slide.md
---
title: "Nouveau Projet"
subtitle: "Description du projet"
description: "Description détaillée..."
image: "/images/uploads/votre-image.jpg"
order: 5
active: true
---
```

### Chemins d'Images Recommandés
- **Images uploadées** : `public/images/uploads/`
- **Images du logo** : `public/logo tp n'sikan.png`
- **Images Pexels** : Utilisez les URLs directes pour les images de démonstration

## 🎯 Personnalisation

### Modifier les Textes
1. **Via CMS** : Interface `/admin` (recommandé)
2. **Directement** : Fichiers dans `src/data/`
3. **Code** : Fichiers des composants dans `src/`

### Ajouter/Supprimer des Sections
- **Services** : Modifier `src/pages/Services.tsx`
- **Projets** : Ajouter via CMS ou modifier `src/data/projects/`
- **Équipe** : Ajouter via CMS ou modifier `src/data/team/`

### Modifier les Menus
```javascript
// Dans src/components/Header.tsx, ligne ~15
const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/a-propos' },
  // Ajoutez vos liens ici
];
```

## 🌐 Déploiement

### Sur Netlify (Recommandé)
1. **Connecter le repo** à Netlify
2. **Configuration automatique** via `netlify.toml`
3. **Activer Netlify Identity** pour le CMS
4. **Inviter des utilisateurs** pour l'administration

### Commandes de Build
```bash
# Build de production
npm run build

# Prévisualisation locale du build
npm run preview
```

### Variables d'Environnement
Aucune variable requise pour le fonctionnement de base.

## 📞 Support et Contact

### Informations de Contact (à modifier)
```json
// Dans src/data/contact.json
{
  "phone_main": "+225 XX XX XX XX XX",
  "email_main": "contact@tpnsikan.com",
  "address": "Abidjan, Côte d'Ivoire"
}
```

### Réseaux Sociaux
- **Facebook** : https://www.facebook.com/tpnsikanprojetespoir
- **Instagram** : À configurer
- **LinkedIn** : À configurer

## 🔧 Développement Avancé

### Ajouter de Nouvelles Pages
1. Créer le fichier dans `src/pages/`
2. Ajouter la route dans `src/App.tsx`
3. Ajouter le lien dans la navigation

### Modifier les Animations
Le site utilise **Framer Motion** pour les animations :
```javascript
// Exemple d'animation
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Contenu animé
</motion.div>
```

### Ajouter des Fonctionnalités CMS
Modifier le fichier `public/admin/config.yml` pour ajouter de nouvelles collections.

## 📋 Checklist de Mise en Production

- [ ] Remplacer toutes les informations de contact
- [ ] Ajouter les vraies images des projets
- [ ] Configurer les réseaux sociaux
- [ ] Tester toutes les fonctionnalités
- [ ] Configurer Netlify Identity
- [ ] Inviter les administrateurs
- [ ] Vérifier le SEO et les métadonnées
- [ ] Tester sur mobile et desktop

---

**Développé avec ❤️ pour TP N'SIKAN PROJET ESPOIR**