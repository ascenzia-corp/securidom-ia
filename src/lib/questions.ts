export type QuestionType =
  | "text"
  | "single"
  | "multiple"
  | "scale"
  | "textarea"
  | "dual-text"
  | "multiple-limited";

export interface Question {
  id: string;
  section: string;
  sectionNumber: number;
  type: QuestionType;
  title: string;
  instruction?: string;
  examples?: string;
  placeholder?: string;
  placeholder2?: string;
  options?: string[];
  scaleLabels?: { emoji: string; label: string }[];
  maxSelections?: number;
  required?: boolean;
  showOtherField?: boolean;
  minRows?: number;
  showCharCount?: boolean;
}

export const questions: Question[] = [
  // Section 1 — Identité
  {
    id: "nom",
    section: "Identité",
    sectionNumber: 1,
    type: "text",
    title: "Prénom et Nom",
    placeholder: "Votre prénom et nom",
    required: true,
  },
  {
    id: "poste",
    section: "Identité",
    sectionNumber: 1,
    type: "text",
    title: "Votre poste / fonction",
    placeholder: "ex. Directeur d'agence, Responsable exploitation…",
    required: true,
  },
  {
    id: "anciennete",
    section: "Identité",
    sectionNumber: 1,
    type: "single",
    title: "Depuis combien de temps occupez-vous ce poste ?",
    options: ["Moins d'1 an", "1-3 ans", "3-5 ans", "Plus de 5 ans"],
    required: true,
  },
  // Section 2 — Votre rapport à l'IA
  {
    id: "usage_ia",
    section: "Votre rapport à l'IA",
    sectionNumber: 2,
    type: "single",
    title: "Avez-vous déjà utilisé un outil d'IA ?",
    options: [
      "Jamais",
      "J'ai testé une fois",
      "J'utilise occasionnellement",
      "J'utilise régulièrement",
    ],
    required: true,
  },
  {
    id: "outils_ia",
    section: "Votre rapport à l'IA",
    sectionNumber: 2,
    type: "multiple",
    title: "Si oui, le(s)quel(s) ?",
    options: ["ChatGPT", "Claude", "Gemini", "Copilot", "Mistral"],
    showOtherField: true,
    required: false,
  },
  {
    id: "sentiment_ia",
    section: "Votre rapport à l'IA",
    sectionNumber: 2,
    type: "scale",
    title: "Comment décririez-vous votre sentiment vis-à-vis de l'IA ?",
    scaleLabels: [
      { emoji: "😰", label: "Inquiet" },
      { emoji: "😐", label: "Prudent" },
      { emoji: "🤔", label: "Curieux" },
      { emoji: "😊", label: "Enthousiaste" },
      { emoji: "🚀", label: "Impatient" },
    ],
    required: true,
  },
  {
    id: "crainte_ia",
    section: "Votre rapport à l'IA",
    sectionNumber: 2,
    type: "single",
    title: "Quelle est votre principale crainte concernant l'IA ?",
    options: [
      "Remplacement des emplois",
      "Fiabilité des réponses",
      "Confidentialité des données",
      "Complexité d'utilisation",
      "Je n'ai pas de crainte particulière",
    ],
    required: true,
  },
  // Section 3 — Vos tâches
  {
    id: "taches_repetitives",
    section: "Vos tâches",
    sectionNumber: 3,
    type: "dual-text",
    title: "Citez 2 tâches chronophages et répétitives à fort volume",
    instruction:
      "Des tâches que vous réalisez régulièrement, qui prennent du temps et qui se ressemblent d'une fois à l'autre.",
    examples:
      "Rédaction de comptes-rendus, emails récurrents, rapports d'activité, synthèses hebdomadaires…",
    placeholder: "Décrivez brièvement…",
    placeholder2: "Décrivez brièvement…",
    required: true,
  },
  {
    id: "taches_strategiques",
    section: "Vos tâches",
    sectionNumber: 3,
    type: "dual-text",
    title: "Citez 2 tâches stratégiques liées à vos objectifs annuels",
    instruction:
      "Des tâches importantes pour atteindre vos objectifs 2025, mais souvent repoussées faute de temps.",
    examples:
      "Préparation d'un bilan, suivi d'un projet clé, analyse de performance, communication interne…",
    placeholder: "Décrivez brièvement…",
    placeholder2: "Décrivez brièvement…",
    required: true,
  },
  // Section 4 — Votre vision
  {
    id: "vision_directeur_3ans",
    section: "Votre vision",
    sectionNumber: 4,
    type: "textarea",
    title:
      "En quelques lignes, à quoi ressemblera le quotidien d'un directeur d'agence de sécurité dans 3 ans grâce à l'IA ?",
    instruction:
      "Pas de bonne ou mauvaise réponse. Laissez parler votre imagination.",
    minRows: 5,
    showCharCount: true,
    required: true,
  },
  // Section 5 — Attentes
  {
    id: "attentes_formation",
    section: "Attentes",
    sectionNumber: 5,
    type: "multiple-limited",
    title: "Qu'attendez-vous le plus de cette journée de formation ?",
    instruction: "Choisissez jusqu'à 3 réponses.",
    options: [
      "Comprendre ce qu'est vraiment l'IA",
      "Découvrir des outils concrets",
      "Identifier des gains de temps dans mon quotidien",
      "Savoir cadrer l'usage de l'IA dans mon équipe",
      "Préparer une feuille de route IA pour mon service",
      "Échanger avec mes collègues sur le sujet",
    ],
    maxSelections: 3,
    required: true,
  },
];
