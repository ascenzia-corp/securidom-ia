const fs = require("fs");
const path = require("path");

// Génère le fichier firebase-config.js depuis les variables d'environnement
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "VOTRE_API_KEY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "VOTRE_PROJET.firebaseapp.com",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "https://VOTRE_PROJET-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "VOTRE_PROJET",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "VOTRE_PROJET.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "VOTRE_APP_ID"
};

const output = `// Fichier généré automatiquement — ne pas modifier manuellement
export const firebaseConfig = ${JSON.stringify(config, null, 2)};
`;

const dest = path.join(__dirname, "public", "icebreaker", "js", "firebase-config.js");
fs.writeFileSync(dest, output, "utf-8");
console.log("✓ firebase-config.js généré");
