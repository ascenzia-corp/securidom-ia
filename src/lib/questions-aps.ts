import type { Question } from "./questions";

// Questionnaire de maturité IA et d'identification des use cases — APS
// Dupliqué du questionnaire de préformation Securidom, adapté à APS
// (installation et maintenance de systèmes de sécurité — alarme, incendie,
// vidéosurveillance, contrôle d'accès).
export const apsQuestions: Question[] = [
  // Section 1 — Identité
  {
    id: "nom_email",
    section: "Identité",
    sectionNumber: 1,
    type: "dual-text",
    title: "Prénom, Nom et Email",
    label1: "Prénom et Nom",
    label2: "Email professionnel",
    placeholder: "Votre prénom et nom",
    placeholder2: "prenom.nom@apsfrance.fr",
    required: true,
  },
  {
    id: "poste",
    section: "Identité",
    sectionNumber: 1,
    type: "text",
    title: "Votre poste / fonction",
    placeholder: "ex. Chargé d'affaires, Responsable technique, Directeur d'agence…",
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
      "Rédaction de devis, rapports d'intervention, comptes-rendus de chantier, emails récurrents, planification des tournées de maintenance…",
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
      "Des tâches importantes pour atteindre vos objectifs annuels, mais souvent repoussées faute de temps.",
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
      "En quelques lignes, à quoi ressemblera le quotidien d'un manager dans la sécurité électronique dans 3 ans grâce à l'IA ?",
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
