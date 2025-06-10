const fs = require("fs");
const path = require("path");

// Configuration des images Open Graph
const ogConfig = {
  width: 1200,
  height: 630,
  backgroundColor: "#2563eb",
  secondaryColor: "#3b82f6",
  textColor: "#ffffff",
  fontFamily: "Inter, sans-serif",
  fontSize: {
    title: 48,
    subtitle: 24,
  },
};

// Créer le dossier public/og s'il n'existe pas
const ogDir = path.join(process.cwd(), "public", "og");
if (!fs.existsSync(ogDir)) {
  fs.mkdirSync(ogDir, { recursive: true });
}

// Générer les images Open Graph pour chaque page
const pages = [
  {
    name: "home",
    title: "Arthur Kameni",
    subtitle: "Full Stack Developer",
  },
  {
    name: "about",
    title: "À propos",
    subtitle: "Arthur Kameni - Développeur Full Stack",
  },
  {
    name: "projects",
    title: "Projets",
    subtitle: "Portfolio de Développement",
  },
  {
    name: "experience",
    title: "Expérience",
    subtitle: "Parcours Professionnel",
  },
  {
    name: "contact",
    title: "Contact",
    subtitle: "Discutons de vos projets",
  },
];

console.log("Génération des images Open Graph...");

pages.forEach((page) => {
  const svgContent = `
<svg width="${ogConfig.width}" height="${ogConfig.height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Dégradé linéaire pour le fond -->
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${ogConfig.backgroundColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${ogConfig.secondaryColor};stop-opacity:1" />
    </linearGradient>
  </defs>
  <!-- Fond avec dégradé -->
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <!-- Bordure subtile -->
  <rect x="10" y="10" width="${ogConfig.width - 20}" height="${ogConfig.height - 20}" fill="none" stroke="${ogConfig.textColor}" stroke-width="2" opacity="0.2"/>
  <!-- Motif minimaliste (inspiré des échecs) -->
  <g opacity="0.1">
    <rect x="50" y="50" width="100" height="100" fill="${ogConfig.textColor}"/>
    <rect x="150" y="150" width="100" height="100" fill="${ogConfig.textColor}"/>
    <rect x="1050" y="50" width="100" height="100" fill="${ogConfig.textColor}"/>
    <rect x="950" y="150" width="100" height="100" fill="${ogConfig.textColor}"/>
  </g>
  <!-- Titre avec ombre portée -->
  <text x="50%" y="35%" text-anchor="middle" fill="${ogConfig.textColor}" font-family="${ogConfig.fontFamily}" font-size="${ogConfig.fontSize.title}" font-weight="bold" filter="url(#shadow)">
    ${page.title}
  </text>
  <!-- Sous-titre avec ombre portée -->
  <text x="50%" y="50%" text-anchor="middle" fill="${ogConfig.textColor}" font-family="${ogConfig.fontFamily}" font-size="${ogConfig.fontSize.subtitle}" opacity="0.9">
    ${page.subtitle}
  </text>
  <!-- Filtre pour ombre portée -->
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="2" dy="2" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.5"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
</svg>
  `;

  const filePath = path.join(ogDir, `${page.name}.svg`);
  fs.writeFileSync(filePath, svgContent);
  console.log(`✅ Généré: ${filePath}`);
});

console.log("Images Open Graph générées avec succès!");
