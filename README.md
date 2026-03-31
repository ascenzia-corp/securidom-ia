# Quiz Pré-Formation IA — Sécuridom × Ascenzia

Quiz web destiné aux cadres et managers de Sécuridom, à remplir avant la formation « Cadres Augmentés par l'IA ».

## Déploiement en 3 étapes

### 1. Configurer Google Sheets

1. Créez un Google Spreadsheet vierge
2. Allez dans **Extensions > Apps Script**
3. Collez le contenu du fichier `google-apps-script.js`
4. Cliquez **Déployer > Nouveau déploiement**
5. Type : **Application Web** — Exécuter en tant que : **Moi** — Accès : **Tout le monde**
6. Copiez l'URL du déploiement

### 2. Déployer sur Vercel

1. Poussez ce repo sur GitHub
2. Connectez le repo à [Vercel](https://vercel.com)
3. Ajoutez la variable d'environnement :
   - `NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL` = l'URL copiée à l'étape 1.6

### 3. C'est prêt !

Partagez l'URL Vercel aux participants.

## Développement local

```bash
npm install
cp .env.example .env.local
# Éditez .env.local avec votre URL webhook
npm run dev
```

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion
- Google Sheets (via Apps Script webhook)
