// =============================================================
// SCORING — Logique de scoring partagée entre toutes les pages
// =============================================================

// Les 10 questions regroupées en 5 axes (2 questions par axe)
export const QUESTIONS = [
  "Je pourrais expliquer la différence entre IA prédictive et IA générative à un collègue.",
  "Je connais au moins 3 outils d'IA générative par leur nom et leurs usages principaux.",
  "J'utilise un outil d'IA (ChatGPT, Claude, Copilot…) au moins une fois par semaine dans mon travail.",
  "J'ai déjà automatisé ou accéléré une tâche professionnelle grâce à un outil d'IA.",
  "Je fais confiance aux réponses d'une IA pour m'aider à prendre des décisions professionnelles.",
  "Je vérifie systématiquement les réponses d'une IA avant de les utiliser.",
  "Je vois clairement comment l'IA pourrait transformer mon métier dans les 2 prochaines années.",
  "J'ai déjà identifié des processus dans mon service qui pourraient être améliorés par l'IA.",
  "Je suis enthousiaste à l'idée d'apprendre à mieux utiliser les outils d'IA.",
  "Je serais prêt(e) à consacrer 30 minutes par semaine pour monter en compétence sur l'IA."
];

export const AXES = [
  { id: "connaissance", label: "Connaissance", questions: [0, 1] },
  { id: "usage", label: "Usage", questions: [2, 3] },
  { id: "confiance", label: "Confiance", questions: [4, 5] },
  { id: "vision", label: "Vision stratégique", questions: [6, 7] },
  { id: "appetence", label: "Appétence technique", questions: [8, 9] }
];

// Calcule le score moyen par axe
export function computeScores(answers) {
  const scores = {};
  for (const axe of AXES) {
    const vals = axe.questions.map((i) => answers[i] || 0);
    scores[axe.id] = vals.reduce((a, b) => a + b, 0) / vals.length;
  }
  return scores;
}

// Calcule le score global (moyenne des 5 axes)
export function computeGlobal(scores) {
  const vals = Object.values(scores);
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

// Retourne le label et le message de maturité
export function getLabel(globalScore) {
  if (globalScore < 2.0) {
    return {
      label: "Observateur",
      message: "Vous découvrez l'IA, et c'est le bon moment pour commencer."
    };
  } else if (globalScore < 3.0) {
    return {
      label: "Curieux",
      message: "Vous avez les bases, cette formation va vous donner les clés."
    };
  } else if (globalScore < 4.0) {
    return {
      label: "Praticien",
      message: "Vous êtes déjà actif, passons à la vitesse supérieure."
    };
  } else if (globalScore < 4.5) {
    return {
      label: "Avancé",
      message: "Solide maîtrise, vous pouvez devenir ambassadeur IA."
    };
  } else {
    return {
      label: "Augmenté",
      message: "Vous êtes déjà un cadre augmenté, partagez vos pratiques !"
    };
  }
}

// Labels pour les distributions
export const MATURITY_LABELS = ["Observateur", "Curieux", "Praticien", "Avancé", "Augmenté"];

export function getMaturityIndex(globalScore) {
  if (globalScore < 2.0) return 0;
  if (globalScore < 3.0) return 1;
  if (globalScore < 4.0) return 2;
  if (globalScore < 4.5) return 3;
  return 4;
}
