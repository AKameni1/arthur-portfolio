# Arthur Kameni – Portfolio

Bienvenue sur le portfolio de **Arthur Kameni**, développeur full-stack passionné par la création d'applications web, mobiles et desktop innovantes.

---

## 🚀 Aperçu

- **Framework** : Next.js 14 (App Router)
- **Langages** : TypeScript, React
- **SEO** : Métadonnées dynamiques, Open Graph, Twitter Cards, Sitemap, robots.txt
- **Multilingue** : Français 🇫🇷 & Anglais 🇬🇧 (i18n)
- **UI/UX** : Tailwind CSS, animations Framer Motion
- **Accessibilité** : Thème sombre/clair, responsive design

---

## ✨ Fonctionnalités principales

- **Pages dynamiques** : Accueil, À propos, Projets, Expérience, Contact, 404 personnalisée
- **SEO avancé** :
  - Métadonnées par page (title, description, keywords)
  - Images Open Graph générées automatiquement
  - Sitemap XML et robots.txt dynamiques
  - Manifest PWA
- **Internationalisation** :
  - Détection et gestion de la langue (fr/en)
  - Contenus traduits (Next-Intl)
- **Performance** :
  - Chargement optimisé
  - Images responsives
- **Accessibilité** :
  - Navigation clavier
  - Contraste élevé
  - Composants accessibles

---

## 🛠️ Installation & développement

1. **Cloner le repo**
   ```bash
   git clone https://github.com/AKameni1/arthur-portfolio.git
   cd arthur-portfolio
   ```
2. **Installer les dépendances**
   ```bash
   pnpm install
   # ou npm install
   ```
3. **Lancer le serveur de dev**
   ```bash
   pnpm dev
   # ou npm run dev
   ```
4. **Accéder à l'app**
   - Ouvre [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Build & déploiement

- **Générer les images Open Graph automatiquement avant chaque build**
- **Build de production**
  ```bash
  pnpm build
  # ou npm run build
  ```
- **Démarrer en production**
  ```bash
  pnpm start
  # ou npm run start
  ```
- **Déploiement**
  - Compatible Vercel, Netlify, Render, etc.
  - Variables d'environnement à définir :
    - `NEXT_PUBLIC_BASE_URL` (ex: https://arthur-portfolio.vercel.app)

---

## 🧩 Structure du projet

```
├── app/                # Pages Next.js (App Router)
│   ├── [locale]/       # Pages multilingues (fr/en)
│   ├── not-found.tsx   # Page 404 personnalisée
│   ├── sitemap.ts      # Sitemap dynamique
│   ├── robots.ts       # robots.txt dynamique
│   └── manifest.ts     # Manifest PWA
├── components/         # Composants UI réutilisables
├── lib/                # SEO, utilitaires, configs
├── public/og/          # Images Open Graph générées
├── scripts/            # Scripts SEO (génération, validation)
├── messages/           # Fichiers de traduction (fr/en)
├── constants/          # Constantes globales
├── ...
```

---

## 🧑‍💻 Contribution

1. Fork le repo
2. Crée une branche (`feature/ma-fonctionnalite`)
3. Commit tes changements
4. Ouvre une Pull Request

---

## 🛡️ Qualité & bonnes pratiques

- **Linting** : ESLint, Prettier
- **Validation SEO** :
  ```bash
  node scripts/validate-seo.js
  ```
- **Tests recommandés** :
  - Google Rich Results Test
  - Facebook Sharing Debugger
  - Twitter Card Validator
  - Lighthouse (SEO, accessibilité)

---

## 📄 Licence

Ce projet est open-source sous licence MIT.

---

## 🙋‍♂️ Contact

- [arthur.kamenitchualeu@gmail.com](mailto:arthur.kamenitchualeu@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/arthur-kameni-0a8ba4291/)

---

**Bon code et bonne visite !** 🚀
