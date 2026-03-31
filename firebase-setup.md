# Configuration Firebase — Guide pas-à-pas

Ce guide explique comment créer un projet Firebase gratuit pour l'application Ice Breaker.

## Étape 1 — Créer le projet Firebase

1. Allez sur [console.firebase.google.com](https://console.firebase.google.com)
2. Cliquez **Ajouter un projet**
3. Nom du projet : `icebreaker-securidom`
4. **Désactivez** Google Analytics (pas nécessaire)
5. Cliquez **Créer le projet**

## Étape 2 — Créer la base de données Realtime

1. Dans le menu gauche, cliquez **Build** → **Realtime Database**
2. Cliquez **Créer une base de données**
3. Choisissez la région **europe-west1 (Belgium)**
4. Sélectionnez **Démarrer en mode test**
5. Cliquez **Activer**

> ⚠️ Le mode test autorise la lecture/écriture pour tous pendant **30 jours**. C'est suffisant pour la formation. Pour prolonger, modifiez les règles dans l'onglet "Règles" de la Realtime Database :
>
> ```json
> {
>   "rules": {
>     ".read": true,
>     ".write": true
>   }
> }
> ```

## Étape 3 — Enregistrer une application web

1. Dans la page d'accueil du projet, cliquez l'icône **Web** (`</>`)
2. Nom de l'application : `icebreaker`
3. **Ne cochez pas** Firebase Hosting
4. Cliquez **Enregistrer l'application**
5. Firebase affiche un bloc de configuration comme celui-ci :

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB...",
  authDomain: "icebreaker-securidom.firebaseapp.com",
  databaseURL: "https://icebreaker-securidom-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "icebreaker-securidom",
  storageBucket: "icebreaker-securidom.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Étape 4 — Copier la configuration

1. Copiez l'objet `firebaseConfig` affiché par Firebase
2. Ouvrez le fichier `public/icebreaker/js/firebase-config.js`
3. Remplacez les valeurs placeholder par les vôtres
4. Sauvegardez

## C'est prêt !

Déployez sur Vercel ou testez en local avec :
```bash
npx serve public
```

L'application est maintenant connectée à votre base Firebase et la synchronisation temps réel fonctionne.
