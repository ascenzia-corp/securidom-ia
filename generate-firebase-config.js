const fs = require("fs");
const path = require("path");

// --- Icebreaker config ---
const icebreakerUrl = process.env.NEXT_PUBLIC_ICEBREAKER_WEBHOOK_URL || "VOTRE_WEBHOOK_URL";
const icebreakerDest = path.join(__dirname, "public", "icebreaker", "js", "config.js");
fs.writeFileSync(icebreakerDest, `// Fichier généré automatiquement au build\nexport const WEBHOOK_URL = ${JSON.stringify(icebreakerUrl)};\n`, "utf-8");
console.log("✓ icebreaker config.js généré");

// --- Evaluation config ---
const evaluationUrl = process.env.NEXT_PUBLIC_EVALUATION_WEBHOOK_URL || "VOTRE_WEBHOOK_URL";
const evaluationDest = path.join(__dirname, "public", "evaluation", "js", "config.js");
fs.writeFileSync(evaluationDest, `// Fichier généré automatiquement au build\nexport const WEBHOOK_URL = ${JSON.stringify(evaluationUrl)};\n`, "utf-8");
console.log("✓ evaluation config.js généré");
