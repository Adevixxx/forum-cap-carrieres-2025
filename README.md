# Forum Cap Carrières – IMT Atlantique

Site vitrine du **Forum Cap Carrières**, le forum étudiants / entreprises d'IMT Atlantique (campus de Brest).
Site « one-page » bilingue (français / anglais) présentant l'école, le forum, les entreprises partenaires,
les pôles, l'équipe, le programme de la journée et un formulaire de contact.

## Stack technique

- [React 19](https://react.dev) + [Vite 6](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com) (styles globaux dans `src/index.css`)
- [GSAP](https://gsap.com) pour les animations au scroll
- [Three.js](https://threejs.org) via `@react-three/fiber` / `@react-three/drei` pour le logo 3D (desktop uniquement)
- [Swiper](https://swiperjs.com) pour le carrousel de l'équipe
- [i18next](https://www.i18next.com) / `react-i18next` pour les traductions
- [EmailJS](https://www.emailjs.com) pour l'envoi du formulaire de contact (pas de backend)

## Installation

Prérequis : **Node.js 20+** et npm.

```bash
npm install          # installe les dépendances
cp .env.example .env # puis remplir les clés EmailJS (voir plus bas)
npm run dev          # lance le serveur de dev sur http://localhost:5173
```

> ⚠️ Si le dossier `node_modules/` a été copié depuis un autre système (ex. Windows → Linux/Mac),
> supprimez-le et relancez `npm install` : il contient des binaires spécifiques à chaque OS.

### Scripts disponibles

| Commande          | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Serveur de développement avec rechargement à chaud    |
| `npm run build`   | Build de production dans `dist/`                      |
| `npm run preview` | Sert le build de production localement pour le tester |
| `npm run lint`    | Vérifie le code avec ESLint                           |

## Variables d'environnement (formulaire de contact)

Le formulaire de contact envoie les messages via EmailJS. Les clés sont lues depuis un fichier `.env`
à la racine (non versionné, voir `.gitignore`) :

```env
VITE_APP_EMAILJS_SERVICE_ID=...
VITE_APP_EMAILJS_TEMPLATE_ID=...
VITE_APP_EMAILJS_PUBLIC_KEY=...
```

Ces valeurs se trouvent dans le tableau de bord EmailJS du compte du forum (demandez-les à l'équipe précédente).
Le template EmailJS doit utiliser les champs `name`, `email` et `message`.
Sans ces clés le site fonctionne, mais l'envoi du formulaire affiche un message d'erreur.

> Les variables `VITE_*` sont intégrées dans le JavaScript envoyé au navigateur : n'y mettez jamais de secret
> autre que la clé **publique** EmailJS.

## Structure du projet

```
├── index.html                  # Page HTML (titre de l'onglet, favicon)
├── public/                     # Fichiers servis tels quels (accessibles via "/...")
│   ├── documents/brochure.pdf  # Brochure téléchargeable depuis la section « Le Forum »
│   ├── images/                 # Photos, icônes, drapeaux, logos des entreprises (images/logos/)
│   └── models/                 # Logo 3D (.glb) et éclairage HDR de la scène 3D
└── src/
    ├── main.jsx                # Point d'entrée React
    ├── App.jsx                 # Ordre des sections de la page
    ├── index.css               # Styles globaux + classes Tailwind personnalisées
    ├── constants/
    │   ├── index.js            # Données : date du forum, liens du menu, logos, pôles...
    │   ├── i18n.js             # Configuration des langues (français par défaut)
    │   └── locales/            # Tous les textes du site : fr.json et en.json
    ├── components/             # Composants réutilisables (NavBar, Countdown, GlowCard...)
    │   └── models/hero_models/ # Scène 3D du logo (Hero)
    └── sections/               # Une section = un bloc de la page (Hero, Contact, Footer...)
```

## Modifier le contenu (édition suivante)

La plupart des mises à jour se font sans toucher aux composants :

| Je veux modifier…                       | Où ?                                                                                   |
| --------------------------------------- | -------------------------------------------------------------------------------------- |
| La date du forum (compte à rebours)     | `forumDate` dans `src/constants/index.js`                                              |
| Les chiffres clés (édition, nb d'entreprises…) | `stats.items` dans `src/constants/locales/fr.json` **et** `en.json`             |
| N'importe quel texte du site            | `src/constants/locales/fr.json` **et** `en.json` (garder les mêmes clés dans les deux) |
| Le programme de la journée              | `schedule.items` dans les fichiers de traduction (images dans `public/images/`)        |
| Les entreprises partenaires             | Voir ci-dessous                                                                        |
| Les pôles affichés                      | `poles` dans `src/constants/index.js` + `poles.items` dans les traductions             |
| Les photos de l'équipe                  | `teamSlides` dans `src/sections/TeamSlider.jsx` + `team.members` dans les traductions  |
| La brochure PDF                         | Remplacer `public/documents/brochure.pdf`                                              |
| Les réseaux sociaux du footer           | `socialIcons` dans `src/sections/Footer.jsx`                                           |
| Le logo du site / favicon               | `public/images/cc-logo*.png` et `index.html`                                           |

### Ajouter une entreprise partenaire

1. Ajouter son logo dans `public/images/logos/` (PNG, fond transparent de préférence).
2. Dans `src/constants/index.js`, ajouter une entrée dans `logoIconsList1`, `logoIconsList2` **et** `logoIconsList3`
   (les trois lignes défilantes, dans un ordre différent) :
   ```js
   { id: "c_mon_entreprise", imgPath: "/images/logos/mon-entreprise.png", link: "https://..." },
   ```
3. Dans `fr.json` et `en.json`, ajouter dans `logos.items` une entrée avec le **même `id`** :
   ```json
   { "id": "c_mon_entreprise", "name": "MON ENTREPRISE", "description": "..." }
   ```

### Pôles

Seuls les pôles listés dans `poles` (`src/constants/index.js`) sont affichés. Les traductions contiennent aussi
les pôles `startup`, `health` et `transport`, actuellement masqués : il suffit de les ajouter à `poles` pour les afficher
(icônes disponibles : voir `iconMap` dans `src/sections/PolesShowcase.jsx`).
Une fenêtre listant les entreprises de chaque pôle existe aussi (`poleCompanies`, désactivée — voir le commentaire
dans `PolesShowcase.jsx` pour la réactiver).

## Notes techniques

- **Logo 3D** : chargé uniquement sur les appareils avec souris (pas sur mobile/tactile) pour préserver les performances.
  Le modèle est `public/models/logo-optimized.glb` ; position et échelle dans `src/components/models/hero_models/Room.jsx`.
- **Langue** : le français est la langue par défaut (`src/constants/i18n.js`). Le sélecteur de langue est dans la barre de navigation.
- **Build** : le chunk `three` dépasse 500 kB — c'est normal (Three.js), il n'est chargé que pour le logo 3D.

## Déploiement

`npm run build` génère un site statique dans `dist/`, déployable sur n'importe quel hébergeur statique
(Netlify, Vercel, GitHub Pages, serveur Apache/Nginx...). Penser à définir les variables `VITE_APP_EMAILJS_*`
dans l'environnement de build de l'hébergeur (ou dans le `.env` avant de lancer le build).
