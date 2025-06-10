# Système SEO - Portfolio Arthur Kameni

## Vue d'ensemble

Ce document décrit le système de gestion des métadonnées SEO mis en place pour le portfolio d'Arthur Kameni. Le système est conçu pour optimiser le référencement naturel et l'apparence des liens partagés sur les réseaux sociaux.

## Structure des fichiers

### Configuration SEO
- `lib/seo.ts` - Configuration SEO en français
- `lib/seo-en.ts` - Configuration SEO en anglais
- `scripts/generate-og-images.js` - Script de génération des images Open Graph

### Métadonnées dynamiques
- `app/sitemap.ts` - Sitemap XML dynamique
- `app/robots.ts` - Fichier robots.txt dynamique
- `app/manifest.ts` - Manifest PWA

### Images Open Graph
- `public/og/` - Images SVG optimisées pour les réseaux sociaux

## Fonctionnalités

### 1. Métadonnées dynamiques par page

Chaque page utilise des métadonnées spécifiques :

```typescript
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  if (locale === "en") {
    return generateMetadataEn(seoConfigsEn.home);
  }
  
  return generateMetadataFr(seoConfigs.home);
}
```

### 2. Support multilingue

- **Français** : Métadonnées optimisées pour le marché canadien francophone
- **Anglais** : Métadonnées optimisées pour le marché international

### 3. Images Open Graph

Images SVG générées automatiquement pour chaque page :
- `home.svg` - Page d'accueil
- `about.svg` - Page À propos
- `projects.svg` - Page Projets
- `experience.svg` - Page Expérience
- `contact.svg` - Page Contact

### 4. Sitemap XML

Sitemap dynamique incluant toutes les pages dans les deux langues avec :
- Priorités de référencement
- Fréquences de mise à jour
- Dates de dernière modification

### 5. Robots.txt

Configuration optimisée pour les moteurs de recherche :
- Autorisation de l'indexation
- Exclusion des dossiers sensibles
- Référence au sitemap

### 6. Manifest PWA

Support pour les Progressive Web Apps :
- Icônes adaptatives
- Thème cohérent
- Configuration d'installation

## Configuration des métadonnées

### Structure SEOConfig

```typescript
interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    type: "website" | "article" | "book" | "profile" | ...;
    images: string[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
}
```

### Métadonnées générées

Pour chaque page, le système génère :
- **Title** : Titre optimisé pour le SEO
- **Description** : Description concise et attractive
- **Keywords** : Mots-clés pertinents
- **Open Graph** : Métadonnées pour Facebook, LinkedIn, etc.
- **Twitter Cards** : Métadonnées pour Twitter
- **Canonical URLs** : URLs canoniques
- **Alternates** : Versions linguistiques alternatives
- **Robots** : Instructions pour les moteurs de recherche

## Optimisations SEO

### 1. Mots-clés ciblés

- **Français** : développeur full-stack, React, Next.js, TypeScript, Ottawa, Canada
- **Anglais** : full-stack developer, React, Next.js, TypeScript, Ottawa, Canada

### 2. Descriptions optimisées

- Longueur optimale (150-160 caractères)
- Incluent des appels à l'action
- Mettent en avant les compétences clés

### 3. Images optimisées

- Format SVG pour les images Open Graph
- Dimensions optimales (1200x630px)
- Alt text descriptif
- Compression optimisée

### 4. Structure des URLs

- URLs propres et descriptives
- Support multilingue
- Redirections appropriées

## Utilisation

### Ajouter une nouvelle page

1. Créer la page dans `app/[locale]/`
2. Ajouter les métadonnées dans `lib/seo.ts` et `lib/seo-en.ts`
3. Implémenter la fonction `generateMetadata`
4. Générer une image Open Graph si nécessaire

### Modifier les métadonnées

1. Éditer la configuration dans `lib/seo.ts` ou `lib/seo-en.ts`
2. Tester avec les outils de validation SEO
3. Vérifier l'apparence sur les réseaux sociaux

### Générer de nouvelles images Open Graph

```bash
node scripts/generate-og-images.js
```

## Outils de validation

### Tests recommandés

1. **Google Rich Results Test** : Validation des métadonnées structurées
2. **Facebook Sharing Debugger** : Test des Open Graph
3. **Twitter Card Validator** : Test des Twitter Cards
4. **Google Search Console** : Monitoring du référencement
5. **Lighthouse** : Audit SEO complet

### Métriques à surveiller

- **Core Web Vitals** : Performance, accessibilité, SEO
- **Indexation** : Nombre de pages indexées
- **Trafic organique** : Visiteurs venant des moteurs de recherche
- **Taux de clic** : CTR des résultats de recherche

## Maintenance

### Mises à jour régulières

- Vérifier les métadonnées tous les 3 mois
- Mettre à jour les mots-clés selon les tendances
- Optimiser les descriptions selon les performances
- Générer de nouvelles images si nécessaire

### Monitoring

- Surveiller les erreurs dans Google Search Console
- Analyser les performances de référencement
- Ajuster la stratégie selon les résultats

## Support

Pour toute question concernant le système SEO, consulter :
- La documentation Next.js sur les métadonnées
- Les guides SEO de Google
- Les spécifications Open Graph
- Les spécifications Twitter Cards 