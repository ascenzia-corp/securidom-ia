export interface QuizData {
  timestamp: string;
  nom: string;
  poste: string;
  anciennete: string;
  usage_ia: string;
  outils_ia: string[];
  sentiment_ia: string;
  crainte_ia: string;
  tache_repetitive_1: string;
  tache_repetitive_2: string;
  tache_strategique_1: string;
  tache_strategique_2: string;
  vision_directeur_3ans: string;
  attentes_formation: string[];
}

export function buildPayload(
  answers: Record<string, string | string[]>
): QuizData {
  const reps = answers.taches_repetitives as unknown as string[];
  const strats = answers.taches_strategiques as unknown as string[];

  return {
    timestamp: new Date().toISOString(),
    nom: (answers.nom as string) || "",
    poste: (answers.poste as string) || "",
    anciennete: (answers.anciennete as string) || "",
    usage_ia: (answers.usage_ia as string) || "",
    outils_ia: Array.isArray(answers.outils_ia)
      ? (answers.outils_ia as string[])
      : [],
    sentiment_ia: (answers.sentiment_ia as string) || "",
    crainte_ia: (answers.crainte_ia as string) || "",
    tache_repetitive_1: Array.isArray(reps) ? reps[0] || "" : "",
    tache_repetitive_2: Array.isArray(reps) ? reps[1] || "" : "",
    tache_strategique_1: Array.isArray(strats) ? strats[0] || "" : "",
    tache_strategique_2: Array.isArray(strats) ? strats[1] || "" : "",
    vision_directeur_3ans: (answers.vision_directeur_3ans as string) || "",
    attentes_formation: Array.isArray(answers.attentes_formation)
      ? (answers.attentes_formation as string[])
      : [],
  };
}

export async function submitToGoogleSheets(data: QuizData): Promise<boolean> {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) {
    console.warn("NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL is not configured");
    return false;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // no-cors returns opaque response, so we just trust it went through
    return true;
  } catch (error) {
    console.error("Failed to submit to Google Sheets:", error);
    // Store locally as fallback
    try {
      localStorage.setItem(
        `quiz_backup_${Date.now()}`,
        JSON.stringify(data)
      );
    } catch {
      // localStorage might not be available
    }
    return false;
  }
}
