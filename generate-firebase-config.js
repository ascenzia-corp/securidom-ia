const fs = require("fs");
const path = require("path");

// Génère le fichier config.js pour l'icebreaker depuis les variables d'environnement
const webhookUrl = process.env.NEXT_PUBLIC_ICEBREAKER_WEBHOOK_URL || "VOTRE_WEBHOOK_URL";

const output = `// Fichier généré automatiquement au build — ne pas modifier manuellement
export const WEBHOOK_URL = ${JSON.stringify(webhookUrl)};
`;

const dest = path.join(__dirname, "public", "icebreaker", "js", "config.js");
fs.writeFileSync(dest, output, "utf-8");
console.log("✓ icebreaker config.js généré");
