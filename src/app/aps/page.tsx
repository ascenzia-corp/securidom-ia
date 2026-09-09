import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Quiz from "@/components/Quiz";
import { apsBrand } from "@/lib/brands";
import { apsQuestions } from "@/lib/questions-aps";

export const metadata: Metadata = {
  title: "Quiz Pré-Formation IA — APS × Ascenzia",
  description:
    "Préparez votre journée Cadres Augmentés par l'IA. Questionnaire de maturité IA et d'identification des use cases pour les cadres et managers d'APS (Groupe Securidom).",
};

export default function ApsHome() {
  return (
    <main
      className="min-h-[100dvh]"
      style={
        {
          ...apsBrand.cssVars,
          // Fond noir du site apsfrance.fr (au lieu du navy Securidom)
          background: "linear-gradient(135deg, #0B0B0C 0%, #1C1C1F 100%)",
        } as CSSProperties
      }
    >
      <Quiz brand={apsBrand} questions={apsQuestions} />
    </main>
  );
}
