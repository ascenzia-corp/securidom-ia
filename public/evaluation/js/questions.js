// Questions et scoring pour le quiz d'évaluation (version JS pour pages statiques)

export const MODULES = [
  { id: "m1", label: "État des lieux de l'IA", questions: [0,1,2,3,4] },
  { id: "m2", label: "Maîtriser les LLM", questions: [5,6,7,8,9] },
  { id: "m3", label: "Identifier ses cas d'usage", questions: [10,11,12] },
  { id: "m4", label: "Feuille de route", questions: [13,14] },
];

export const QUESTIONS = [
  {
    id: 1, module: "m1",
    text: "Quelle est la différence principale entre l'IA prédictive et l'IA générative ?",
    options: [
      "L'IA prédictive est plus récente que l'IA générative",
      "L'IA prédictive analyse des patterns pour anticiper, l'IA générative crée du contenu nouveau",
      "L'IA générative est plus fiable que l'IA prédictive",
      "Il n'y a pas de différence, ce sont des synonymes"
    ],
    correct: 1,
    explanation: "L'IA prédictive détecte des patterns dans les données existantes pour faire des prédictions (ex: maintenance prédictive). L'IA générative crée du contenu nouveau : texte, images, code (ex: ChatGPT, Claude)."
  },
  {
    id: 2, module: "m1",
    text: "Qu'est-ce qu'une « hallucination » dans le contexte des LLM ?",
    options: [
      "Un bug qui fait planter le logiciel",
      "Une réponse inventée que l'IA présente avec assurance comme étant vraie",
      "Un message d'erreur affiché par l'IA",
      "Une fonctionnalité expérimentale des modèles"
    ],
    correct: 1,
    explanation: "Les LLM peuvent générer des informations fausses avec un ton très convaincant. C'est pourquoi la vérification humaine reste indispensable."
  },
  {
    id: 3, module: "m1",
    text: "Pourquoi la souveraineté des données est-elle importante pour une entreprise de sécurité ?",
    options: [
      "Pour payer moins cher les services cloud",
      "Pour garantir que les données sensibles restent sous contrôle juridique maîtrisé",
      "Pour avoir un internet plus rapide",
      "Ce n'est pas important, le cloud est toujours sécurisé"
    ],
    correct: 1,
    explanation: "Dans le secteur de la sécurité, les données clients (plans de sûreté, rapports d'intervention) sont confidentielles. L'hébergement européen et les outils respectant le RGPD sont essentiels."
  },
  {
    id: 4, module: "m1",
    text: "Qu'est-ce qu'un agent IA ?",
    options: [
      "Un robot physique qui remplace un agent de sécurité",
      "Un système IA autonome capable de planifier et exécuter des tâches complexes",
      "Un employé spécialisé en intelligence artificielle",
      "Un antivirus nouvelle génération"
    ],
    correct: 1,
    explanation: "Un agent IA est un système qui reçoit un objectif, planifie les étapes, utilise des outils et livre un résultat — de façon autonome. C'est l'évolution naturelle des chatbots."
  },
  {
    id: 5, module: "m1",
    text: "Parmi ces affirmations, laquelle est FAUSSE ?",
    options: [
      "L'IA peut aider à rédiger des rapports plus rapidement",
      "L'IA peut remplacer totalement le jugement humain sur les décisions critiques",
      "L'IA peut analyser de grandes quantités de données",
      "L'IA nécessite des données de qualité pour fonctionner correctement"
    ],
    correct: 1,
    explanation: "L'IA est un outil d'aide à la décision, pas un remplaçant du jugement humain. Sur les décisions critiques (sécurité des personnes, conformité légale), l'humain reste indispensable."
  },
  {
    id: 6, module: "m2",
    text: "Quel est le premier réflexe à avoir avant d'utiliser un LLM grand public ?",
    options: [
      "Vérifier la vitesse de sa connexion internet",
      "S'assurer de ne pas saisir de données confidentielles ou personnelles",
      "Fermer toutes les autres applications",
      "Mettre à jour son navigateur"
    ],
    correct: 1,
    explanation: "Règle d'or : ne JAMAIS saisir de données personnelles, confidentielles ou stratégiques dans un LLM grand public. Les données peuvent être utilisées pour l'entraînement des modèles."
  },
  {
    id: 7, module: "m2",
    text: "Qu'est-ce qu'un « Projet Claude » ?",
    options: [
      "Un logiciel de gestion de projet",
      "Un espace Claude avec des instructions permanentes et des fichiers de contexte",
      "Un cours en ligne sur l'IA",
      "Un nouveau réseau social"
    ],
    correct: 1,
    explanation: "Un Projet Claude permet de donner à l'IA un contexte permanent (procédures, données de référence) via des instructions système et des fichiers. L'IA « connaît » alors votre métier."
  },
  {
    id: 8, module: "m2",
    text: "Dans un prompt, que signifie « few-shot » ?",
    options: [
      "Utiliser l'IA pendant quelques secondes seulement",
      "Fournir quelques exemples du résultat attendu dans le prompt",
      "Poser plusieurs questions en même temps",
      "Demander à l'IA de faire moins d'erreurs"
    ],
    correct: 1,
    explanation: "Le few-shot consiste à montrer 2-3 exemples de ce que vous attendez. L'IA comprend alors le format, le ton et le niveau de détail souhaités."
  },
  {
    id: 9, module: "m2",
    text: "Quelle est la meilleure pratique quand l'IA donne une réponse insatisfaisante ?",
    options: [
      "Changer d'outil immédiatement",
      "Itérer en précisant ce qui ne va pas et ce que vous attendez",
      "Réécrire le même prompt en majuscules",
      "Abandonner et faire le travail manuellement"
    ],
    correct: 1,
    explanation: "L'itération est la clé. Dites à l'IA ce qui manque : « C'est trop long, concentre-toi sur les 3 points clés » ou « Reformule avec un ton plus professionnel »."
  },
  {
    id: 10, module: "m2",
    text: "Parmi ces outils, lequel est français ?",
    options: [
      "ChatGPT (OpenAI)",
      "Gemini (Google)",
      "Mistral",
      "Claude (Anthropic)"
    ],
    correct: 2,
    explanation: "Mistral AI est une entreprise française fondée en 2023. C'est le seul LLM souverain européen parmi les leaders du marché. Important pour les enjeux de souveraineté des données."
  },
  {
    id: 11, module: "m3",
    text: "Dans la méthode DOIT, que représente le « D » ?",
    options: ["Données", "Douleur", "Déploiement", "Durée"],
    correct: 1,
    explanation: "D = Douleur. C'est l'intensité du problème ressenti au quotidien. Plus la douleur est forte (note élevée), plus le cas d'usage a de potentiel."
  },
  {
    id: 12, module: "m3",
    text: "Un cas d'usage avec un score DOIT de 400 (D=4, O=5, I=4, T=5) se classe dans quel quadrant ?",
    options: ["À éviter", "Petites victoires", "Quick Win", "Projet stratégique"],
    correct: 2,
    explanation: "Score > 200 avec un effort faible = Quick Win. Ce cas d'usage est fréquent (O=5), douloureux (D=4), impactant (I=4) et techniquement faisable (T=5)."
  },
  {
    id: 13, module: "m3",
    text: "Quel est le critère principal pour distinguer un Quick Win d'un Projet Stratégique ?",
    options: [
      "Le coût du projet",
      "Le rapport entre l'effort de mise en œuvre et l'impact attendu",
      "Le nombre de personnes impliquées",
      "La technologie utilisée"
    ],
    correct: 1,
    explanation: "La matrice effort/impact est l'outil clé. Quick Win = fort impact, faible effort. Projet stratégique = fort impact, effort élevé (nécessite planification)."
  },
  {
    id: 14, module: "m4",
    text: "Dans la feuille de route 30/60/90 jours, que fait-on dans les 30 premiers jours ?",
    options: [
      "On déploie des agents IA complexes",
      "On lance les Quick Wins pour prouver la valeur rapidement",
      "On rédige un cahier des charges complet",
      "On attend l'approbation de la direction"
    ],
    correct: 1,
    explanation: "Les 30 premiers jours servent à créer un « wow moment » rapide. Déployez Claude Projects, automatisez un rapport, testez sur un cas réel. Prouvez la valeur avant de structurer."
  },
  {
    id: 15, module: "m4",
    text: "Quel est le piège le plus courant quand on démarre avec l'IA en entreprise ?",
    options: [
      "Commencer trop petit",
      "Vouloir tout automatiser d'un coup",
      "Former trop de personnes",
      "Mesurer trop de KPIs"
    ],
    correct: 1,
    explanation: "Le piège n°1 est de vouloir tout faire en même temps. Commencez par 2-3 Quick Wins, prouvez la valeur, puis élargissez. « Process First, Technology Second. »"
  }
];

export function computeScore(answers) {
  return answers.filter(a => a === 1).length;
}

export function computeModuleScores(answers) {
  const result = {};
  for (const mod of MODULES) {
    const correct = mod.questions.filter(i => answers[i] === 1).length;
    result[mod.id] = { correct, total: mod.questions.length };
  }
  return result;
}

export function getResultMessage(score) {
  if (score >= 13) return "Excellent ! Vous êtes un cadre augmenté !";
  if (score >= 10) return "Très bien ! Quelques points à consolider.";
  if (score >= 7) return "Bien ! Revoyez les modules pour progresser.";
  return "L'IA s'apprend en faisant — continuez à pratiquer !";
}
