# Quiz Pré-Formation IA — Sécuridom × Ascenzia

Quiz web destiné aux cadres et managers de Sécuridom, à remplir avant la formation « Cadres Augmentés par l'IA ».

## Version APS (filiale du Groupe Securidom)

Le même questionnaire existe aux couleurs d'APS (apsfrance.fr) sur la route **`/aps`** :

- Même app, même projet Vercel, même webhook Google Sheets — aucune variable d'environnement à modifier.
- Les réponses arrivent dans le même Google Sheet, distinguées par la colonne **Entreprise** (« Securidom » ou « APS »). Pour que cette colonne soit remplie, redéployez le Google Apps Script (`google-apps-script.js` mis à jour) : Apps Script > Déployer > Gérer les déploiements > Modifier > Nouvelle version. Sans redéploiement, les réponses APS arrivent quand même, mais sans la colonne Entreprise.
- La charte APS (rouge `#E30613`, fond noir, logo) se règle dans `src/lib/brands.ts` et `src/app/aps/page.tsx`. Le logo est `public/logo-aps.svg` (recréation approchée — remplacez le fichier par le logo officiel en gardant le même nom).
- Les questions APS sont dans `src/lib/questions-aps.ts` (libellés adaptés : domaine email, exemples de postes et de tâches).

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
