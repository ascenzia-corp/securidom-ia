"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "@/lib/questions";
import { buildPayload, submitToGoogleSheets } from "@/lib/submit";
import AscenziaLogo from "./AscenziaLogo";
import SecuridomLogo from "./SecuridomLogo";
import ProgressBar from "./ProgressBar";
import QuestionRenderer from "./QuestionRenderer";

type Screen = "welcome" | "quiz" | "confirmation";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function Quiz() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentIndex];

  const validate = useCallback(() => {
    if (!currentQuestion.required) return true;
    const val = answers[currentQuestion.id];
    if (!val) return false;
    if (typeof val === "string" && !val.trim()) return false;
    if (Array.isArray(val)) {
      if (currentQuestion.type === "dual-text") {
        return val[0]?.trim() && val[1]?.trim();
      }
      if (val.length === 0) return false;
    }
    return true;
  }, [currentQuestion, answers]);

  const handleNext = useCallback(async () => {
    if (!validate()) {
      setError("Ce champ est requis pour continuer");
      return;
    }
    setError("");
    setDirection(1);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Submit
      setIsSubmitting(true);
      const payload = buildPayload(answers);
      await submitToGoogleSheets(payload);
      setIsSubmitting(false);
      setScreen("confirmation");
    }
  }, [currentIndex, answers, validate]);

  const handleBack = useCallback(() => {
    setError("");
    setDirection(-1);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleChange = useCallback(
    (value: string | string[]) => {
      setError("");
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    },
    [currentQuestion]
  );

  const firstName = ((answers.nom as string) || "").split(" ")[0] || "";

  // Welcome Screen
  if (screen === "welcome") {
    return (
      <div className="min-h-[100dvh] flex flex-col px-6">
        {/* Header logos */}
        <div className="flex items-center justify-between pt-6 pb-2">
          <AscenziaLogo className="h-8 opacity-70" />
          <SecuridomLogo className="h-8 opacity-70" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md text-center space-y-8"
        >

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}>
              Préparez votre formation IA
            </h1>
            <p className="text-[#A0AEC0] text-base sm:text-lg leading-relaxed">
              Quelques questions pour personnaliser votre journée.
              <br />
              <span className="text-[#DDAC63]">5 minutes chrono.</span>
            </p>
          </div>

          <button
            onClick={() => setScreen("quiz")}
            className="px-8 py-3.5 bg-[#DDAC63] text-[#1A202C] font-semibold rounded-xl
              hover:bg-[#C9963F] active:scale-95 transition-all duration-200 text-base"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            C&apos;est parti
          </button>

          <p className="text-xs text-[#A0AEC0]/60 pt-4">
            Formation Cadres Augmentés — Sécuridom · Martinique
          </p>
        </motion.div>
        </div>
      </div>
    );
  }

  // Confirmation Screen
  if (screen === "confirmation") {
    return (
      <div className="min-h-[100dvh] flex flex-col px-6">
        {/* Header logos */}
        <div className="flex items-center justify-between pt-6 pb-2">
          <AscenziaLogo className="h-8 opacity-70" />
          <SecuridomLogo className="h-8 opacity-70" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md text-center space-y-6"
        >
          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto rounded-full bg-[#DDAC63]/20 flex items-center justify-center"
          >
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-10 h-10 text-[#DDAC63]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="space-y-4"
          >
            <h1
              className="text-3xl font-bold"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Merci {firstName} !
            </h1>
            <p className="text-[#A0AEC0] leading-relaxed">
              Vos réponses ont bien été enregistrées. Elles nous permettront de
              personnaliser la formation à vos besoins.
            </p>
            <p className="text-[#DDAC63] text-sm font-medium pt-2">
              À très bientôt pour votre journée Cadres Augmentés !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pt-8 space-y-2"
          >
            <AscenziaLogo className="h-7 mx-auto opacity-60" />
            <p className="text-xs text-[#A0AEC0]/50">ascenzia.ai</p>
          </motion.div>
        </motion.div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  const sectionChanged =
    currentIndex === 0 ||
    questions[currentIndex].sectionNumber !==
      questions[currentIndex - 1]?.sectionNumber;

  return (
    <div className="min-h-[100dvh] flex flex-col px-6 py-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <AscenziaLogo className="h-7 opacity-60" />
        <SecuridomLogo className="h-7 opacity-60" />
      </div>

      {/* Progress */}
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      {/* Question Area */}
      <div className="flex-1 flex flex-col justify-center py-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Section label */}
            {sectionChanged && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-medium text-[#DDAC63] uppercase tracking-widest"
              >
                {currentQuestion.section}
              </motion.span>
            )}

            {/* Question title */}
            <h2
              className="text-xl sm:text-2xl font-semibold leading-snug"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {currentQuestion.title}
              {currentQuestion.required && (
                <span className="text-[#DDAC63]/60 ml-1">*</span>
              )}
            </h2>

            {/* Question body */}
            <QuestionRenderer
              question={currentQuestion}
              value={answers[currentQuestion.id] || (
                currentQuestion.type === "dual-text"
                  ? ["", ""]
                  : currentQuestion.type === "multiple" || currentQuestion.type === "multiple-limited"
                    ? []
                    : ""
              )}
              onChange={handleChange}
              error={error}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pb-4 pt-2">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className={`text-sm transition-all duration-200
            ${
              currentIndex === 0
                ? "text-[#A0AEC0]/30 cursor-not-allowed"
                : "text-[#A0AEC0] hover:text-[#F7FAFC]"
            }`}
        >
          ← Retour
        </button>

        <button
          onClick={handleNext}
          disabled={isSubmitting}
          className="px-6 py-2.5 bg-[#DDAC63] text-[#1A202C] font-semibold rounded-xl
            hover:bg-[#C9963F] active:scale-95 transition-all duration-200 text-sm
            disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {isSubmitting
            ? "Envoi…"
            : currentIndex === questions.length - 1
              ? "Terminer"
              : "Suivant →"}
        </button>
      </div>
    </div>
  );
}
