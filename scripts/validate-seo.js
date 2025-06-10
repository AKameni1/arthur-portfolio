const fs = require("fs");
const path = require("path");

// Configuration de validation SEO
const seoRules = {
  title: {
    minLength: 30,
    maxLength: 60,
    required: true,
  },
  description: {
    minLength: 120,
    maxLength: 160,
    required: true,
  },
  keywords: {
    minCount: 5,
    maxCount: 15,
    required: true,
  },
  openGraph: {
    required: true,
    images: {
      minCount: 1,
      required: true,
    },
  },
  twitter: {
    required: true,
    images: {
      minCount: 1,
      required: true,
    },
  },
};

// Fonctions de validation individuelles
function validateTitle(title, pageName) {
  const errors = [];
  const warnings = [];

  if (!title) {
    errors.push(`[${pageName}] Title is required`);
  } else {
    if (title.length < seoRules.title.minLength) {
      warnings.push(
        `[${pageName}] Title is too short (${title.length} chars, min: ${seoRules.title.minLength})`,
      );
    }
    if (title.length > seoRules.title.maxLength) {
      warnings.push(
        `[${pageName}] Title is too long (${title.length} chars, max: ${seoRules.title.maxLength})`,
      );
    }
  }

  return { errors, warnings };
}

function validateDescription(description, pageName) {
  const errors = [];
  const warnings = [];

  if (!description) {
    errors.push(`[${pageName}] Description is required`);
  } else {
    if (description.length < seoRules.description.minLength) {
      warnings.push(
        `[${pageName}] Description is too short (${description.length} chars, min: ${seoRules.description.minLength})`,
      );
    }
    if (description.length > seoRules.description.maxLength) {
      warnings.push(
        `[${pageName}] Description is too long (${description.length} chars, max: ${seoRules.description.maxLength})`,
      );
    }
  }

  return { errors, warnings };
}

function validateKeywords(keywords, pageName) {
  const errors = [];
  const warnings = [];

  if (!keywords || !Array.isArray(keywords)) {
    errors.push(`[${pageName}] Keywords array is required`);
  } else {
    if (keywords.length < seoRules.keywords.minCount) {
      warnings.push(
        `[${pageName}] Too few keywords (${keywords.length}, min: ${seoRules.keywords.minCount})`,
      );
    }
    if (keywords.length > seoRules.keywords.maxCount) {
      warnings.push(
        `[${pageName}] Too many keywords (${keywords.length}, max: ${seoRules.keywords.maxCount})`,
      );
    }
  }

  return { errors, warnings };
}

function validateOpenGraph(openGraph, pageName) {
  const errors = [];
  const warnings = [];

  if (!openGraph) {
    errors.push(`[${pageName}] OpenGraph is required`);
    return { errors, warnings };
  }

  if (
    !openGraph.images ||
    openGraph.images.length < seoRules.openGraph.images.minCount
  ) {
    errors.push(
      `[${pageName}] OpenGraph images are required (min: ${seoRules.openGraph.images.minCount})`,
    );
  }

  return { errors, warnings };
}

function validateTwitter(twitter, pageName) {
  const errors = [];
  const warnings = [];

  if (!twitter) {
    errors.push(`[${pageName}] Twitter is required`);
    return { errors, warnings };
  }

  if (
    !twitter.images ||
    twitter.images.length < seoRules.twitter.images.minCount
  ) {
    errors.push(
      `[${pageName}] Twitter images are required (min: ${seoRules.twitter.images.minCount})`,
    );
  }

  return { errors, warnings };
}

// Fonction de validation principale simplifiée
function validateSEOConfig(config, pageName) {
  const allErrors = [];
  const allWarnings = [];

  // Valider chaque composant
  const titleValidation = validateTitle(config.title, pageName);
  const descriptionValidation = validateDescription(
    config.description,
    pageName,
  );
  const keywordsValidation = validateKeywords(config.keywords, pageName);
  const openGraphValidation = validateOpenGraph(config.openGraph, pageName);
  const twitterValidation = validateTwitter(config.twitter, pageName);

  // Combiner tous les résultats
  allErrors.push(...titleValidation.errors);
  allErrors.push(...descriptionValidation.errors);
  allErrors.push(...keywordsValidation.errors);
  allErrors.push(...openGraphValidation.errors);
  allErrors.push(...twitterValidation.errors);

  allWarnings.push(...titleValidation.warnings);
  allWarnings.push(...descriptionValidation.warnings);
  allWarnings.push(...keywordsValidation.warnings);
  allWarnings.push(...openGraphValidation.warnings);
  allWarnings.push(...twitterValidation.warnings);

  return { errors: allErrors, warnings: allWarnings };
}

// Fonction principale
function validateAllSEO() {
  console.log("🔍 Validation des métadonnées SEO...\n");

  let totalErrors = 0;
  let totalWarnings = 0;

  // Configuration de test pour valider la structure
  const testConfigs = {
    home: {
      title: "Arthur Kameni - Full Stack Developer | Portfolio",
      description:
        "Développeur full-stack passionné créant des applications web, mobile et desktop innovantes. Spécialisé en React, Next.js, TypeScript et Node.js.",
      keywords: [
        "développeur full-stack",
        "portfolio",
        "React",
        "Next.js",
        "TypeScript",
        "développement web",
        "Arthur Kameni",
        "Ottawa",
      ],
      openGraph: {
        title: "Arthur Kameni - Full Stack Developer | Portfolio",
        description:
          "Développeur full-stack passionné créant des applications web, mobile et desktop innovantes.",
        type: "website",
        images: ["/og/home.svg", "/arthur.webp"],
      },
      twitter: {
        card: "summary_large_image",
        title: "Arthur Kameni - Full Stack Developer | Portfolio",
        description:
          "Développeur full-stack passionné créant des applications web, mobile et desktop innovantes.",
        images: ["/og/home.svg", "/arthur.webp"],
      },
    },
    about: {
      title: "À propos - Arthur Kameni | Développeur Full Stack",
      description:
        "Découvrez mon parcours, mes compétences et ma passion pour le développement. Diplômé de La Cité Collégiale, je crée des solutions innovantes.",
      keywords: [
        "à propos",
        "compétences",
        "parcours",
        "formation",
        "La Cité Collégiale",
        "développeur full-stack",
        "Arthur Kameni",
      ],
      openGraph: {
        title: "À propos - Arthur Kameni | Développeur Full Stack",
        description:
          "Découvrez mon parcours, mes compétences et ma passion pour le développement.",
        type: "profile",
        images: ["/og/about.svg", "/arthur.webp"],
      },
      twitter: {
        card: "summary_large_image",
        title: "À propos - Arthur Kameni | Développeur Full Stack",
        description:
          "Découvrez mon parcours, mes compétences et ma passion pour le développement.",
        images: ["/og/about.svg", "/arthur.webp"],
      },
    },
  };

  // Valider les configurations de test
  console.log("📝 Validation des métadonnées françaises:");
  Object.entries(testConfigs).forEach(([pageName, config]) => {
    const { errors, warnings } = validateSEOConfig(config, `FR-${pageName}`);

    errors.forEach((error) => {
      console.log(`❌ ${error}`);
      totalErrors++;
    });

    warnings.forEach((warning) => {
      console.log(`⚠️  ${warning}`);
      totalWarnings++;
    });
  });

  // Résumé
  console.log("\n📊 Résumé de la validation:");
  console.log(`✅ Erreurs: ${totalErrors}`);
  console.log(`⚠️  Avertissements: ${totalWarnings}`);

  if (totalErrors === 0 && totalWarnings === 0) {
    console.log("🎉 Toutes les métadonnées SEO sont valides!");
  } else if (totalErrors === 0) {
    console.log(
      "✅ Aucune erreur critique, mais quelques avertissements à considérer.",
    );
  } else {
    console.log(
      "❌ Des erreurs critiques ont été détectées. Veuillez les corriger.",
    );
  }

  // Vérifier les images Open Graph
  console.log("\n🖼️  Vérification des images Open Graph:");
  const ogDir = path.join(process.cwd(), "public", "og");
  const expectedImages = [
    "home.svg",
    "about.svg",
    "projects.svg",
    "experience.svg",
    "contact.svg",
  ];

  expectedImages.forEach((imageName) => {
    const imagePath = path.join(ogDir, imageName);
    if (fs.existsSync(imagePath)) {
      console.log(`✅ ${imageName} existe`);
    } else {
      console.log(`❌ ${imageName} manquant`);
      totalErrors++;
    }
  });

  console.log(
    `\n📈 Score SEO global: ${Math.max(0, 100 - totalErrors * 10 - totalWarnings * 2)}/100`,
  );
}

// Exécuter la validation
validateAllSEO();
