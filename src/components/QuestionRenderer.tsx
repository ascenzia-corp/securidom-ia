"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Question } from "@/lib/questions";

interface Props {
  question: Question;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  error?: string;
}

export default function QuestionRenderer({
  question,
  value,
  onChange,
  error,
}: Props) {
  const [otherText, setOtherText] = useState("");

  switch (question.type) {
    case "text":
      return (
        <div className="space-y-3">
          <input
            type="text"
            value={(value as string) || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder}
            className="w-full px-4 py-3 bg-[#2D3748]/60 text-[#F7FAFC] rounded-xl
              placeholder-[#A0AEC0]/60 outline-none focus:ring-2 focus:ring-[#DDAC63]/50
              transition-all duration-200"
          />
          {error && (
            <p className="text-sm text-[#DDAC63]/80">{error}</p>
          )}
        </div>
      );

    case "single":
      return (
        <div className="space-y-3">
          {question.options?.map((option) => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200
                ${
                  value === option
                    ? "bg-[#DDAC63]/20 text-[#DDAC63] ring-1 ring-[#DDAC63]/40"
                    : "bg-[#2D3748]/40 text-[#F7FAFC] hover:bg-[#2D3748]/60"
                }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${
                      value === option
                        ? "border-[#DDAC63]"
                        : "border-[#A0AEC0]/40"
                    }`}
                >
                  {value === option && (
                    <div className="w-2 h-2 rounded-full bg-[#DDAC63]" />
                  )}
                </div>
                <span className="text-sm">{option}</span>
              </div>
            </button>
          ))}
          {error && (
            <p className="text-sm text-[#DDAC63]/80">{error}</p>
          )}
        </div>
      );

    case "multiple": {
      const selected = Array.isArray(value) ? value : [];
      const toggleOption = (option: string) => {
        if (selected.includes(option)) {
          onChange(selected.filter((s) => s !== option));
        } else {
          onChange([...selected, option]);
        }
      };
      const toggleOther = () => {
        const otherVal = `Autre: ${otherText}`;
        const hasOther = selected.some((s) => s.startsWith("Autre:"));
        if (hasOther) {
          onChange(selected.filter((s) => !s.startsWith("Autre:")));
        } else if (otherText.trim()) {
          onChange([...selected.filter((s) => !s.startsWith("Autre:")), otherVal]);
        }
      };

      return (
        <div className="space-y-3">
          {question.options?.map((option) => (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200
                ${
                  selected.includes(option)
                    ? "bg-[#DDAC63]/20 text-[#DDAC63] ring-1 ring-[#DDAC63]/40"
                    : "bg-[#2D3748]/40 text-[#F7FAFC] hover:bg-[#2D3748]/60"
                }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0
                    ${
                      selected.includes(option)
                        ? "bg-[#DDAC63] border-[#DDAC63]"
                        : "border-[#A0AEC0]/40"
                    }`}
                >
                  {selected.includes(option) && (
                    <svg className="w-3 h-3 text-[#1A202C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm">{option}</span>
              </div>
            </button>
          ))}
          {question.showOtherField && (
            <div className="flex gap-2 items-center">
              <button
                onClick={toggleOther}
                className={`flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center
                  ${
                    selected.some((s) => s.startsWith("Autre:"))
                      ? "bg-[#DDAC63] border-[#DDAC63]"
                      : "border-[#A0AEC0]/40"
                  }`}
              >
                {selected.some((s) => s.startsWith("Autre:")) && (
                  <svg className="w-3 h-3 text-[#1A202C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              <input
                type="text"
                value={otherText}
                onChange={(e) => {
                  setOtherText(e.target.value);
                  if (e.target.value.trim() && selected.some((s) => s.startsWith("Autre:"))) {
                    onChange([
                      ...selected.filter((s) => !s.startsWith("Autre:")),
                      `Autre: ${e.target.value}`,
                    ]);
                  }
                }}
                onBlur={() => {
                  if (otherText.trim()) {
                    const without = selected.filter((s) => !s.startsWith("Autre:"));
                    onChange([...without, `Autre: ${otherText}`]);
                  }
                }}
                placeholder="Autre (précisez)…"
                className="flex-1 px-4 py-3 bg-[#2D3748]/40 text-[#F7FAFC] rounded-xl
                  placeholder-[#A0AEC0]/60 outline-none focus:ring-2 focus:ring-[#DDAC63]/50
                  transition-all duration-200 text-sm"
              />
            </div>
          )}
          {error && (
            <p className="text-sm text-[#DDAC63]/80">{error}</p>
          )}
        </div>
      );
    }

    case "multiple-limited": {
      const sel = Array.isArray(value) ? value : [];
      const max = question.maxSelections || 3;
      const toggle = (option: string) => {
        if (sel.includes(option)) {
          onChange(sel.filter((s) => s !== option));
        } else if (sel.length < max) {
          onChange([...sel, option]);
        }
      };

      return (
        <div className="space-y-3">
          {question.instruction && (
            <p className="text-sm text-[#A0AEC0] mb-2">{question.instruction}</p>
          )}
          {question.options?.map((option) => {
            const isSelected = sel.includes(option);
            const isDisabled = !isSelected && sel.length >= max;
            return (
              <button
                key={option}
                onClick={() => toggle(option)}
                disabled={isDisabled}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200
                  ${
                    isSelected
                      ? "bg-[#DDAC63]/20 text-[#DDAC63] ring-1 ring-[#DDAC63]/40"
                      : isDisabled
                        ? "bg-[#2D3748]/20 text-[#A0AEC0]/40 cursor-not-allowed"
                        : "bg-[#2D3748]/40 text-[#F7FAFC] hover:bg-[#2D3748]/60"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0
                      ${
                        isSelected
                          ? "bg-[#DDAC63] border-[#DDAC63]"
                          : "border-[#A0AEC0]/40"
                      }`}
                  >
                    {isSelected && (
                      <svg className="w-3 h-3 text-[#1A202C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm">{option}</span>
                </div>
              </button>
            );
          })}
          {error && (
            <p className="text-sm text-[#DDAC63]/80">{error}</p>
          )}
        </div>
      );
    }

    case "scale":
      return (
        <div className="space-y-3">
          <div className="flex justify-between gap-2 sm:gap-4">
            {question.scaleLabels?.map((item, idx) => (
              <button
                key={idx}
                onClick={() => onChange(item.label)}
                className={`flex-1 flex flex-col items-center gap-2 py-4 px-2 rounded-xl transition-all duration-200
                  ${
                    value === item.label
                      ? "bg-[#DDAC63]/20 ring-1 ring-[#DDAC63]/40 scale-105"
                      : "bg-[#2D3748]/40 hover:bg-[#2D3748]/60"
                  }`}
              >
                <span className="text-2xl sm:text-3xl">{item.emoji}</span>
                <span
                  className={`text-xs ${
                    value === item.label
                      ? "text-[#DDAC63]"
                      : "text-[#A0AEC0]"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
          {error && (
            <p className="text-sm text-[#DDAC63]/80">{error}</p>
          )}
        </div>
      );

    case "dual-text": {
      const vals = Array.isArray(value) ? value : ["", ""];
      return (
        <div className="space-y-4">
          {question.instruction && (
            <p className="text-sm text-[#A0AEC0]">{question.instruction}</p>
          )}
          {question.examples && (
            <p className="text-sm text-[#A0AEC0]/60 italic">
              {question.examples}
            </p>
          )}
          <div className="space-y-3">
            <div>
              <label className="text-xs text-[#A0AEC0] mb-1 block">
                Tâche 1
              </label>
              <input
                type="text"
                value={vals[0] || ""}
                onChange={(e) => onChange([e.target.value, vals[1] || ""])}
                placeholder={question.placeholder}
                className="w-full px-4 py-3 bg-[#2D3748]/60 text-[#F7FAFC] rounded-xl
                  placeholder-[#A0AEC0]/60 outline-none focus:ring-2 focus:ring-[#DDAC63]/50
                  transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-xs text-[#A0AEC0] mb-1 block">
                Tâche 2
              </label>
              <input
                type="text"
                value={vals[1] || ""}
                onChange={(e) => onChange([vals[0] || "", e.target.value])}
                placeholder={question.placeholder2 || question.placeholder}
                className="w-full px-4 py-3 bg-[#2D3748]/60 text-[#F7FAFC] rounded-xl
                  placeholder-[#A0AEC0]/60 outline-none focus:ring-2 focus:ring-[#DDAC63]/50
                  transition-all duration-200"
              />
            </div>
          </div>
          {error && (
            <p className="text-sm text-[#DDAC63]/80">{error}</p>
          )}
        </div>
      );
    }

    case "textarea": {
      const text = (value as string) || "";
      return (
        <div className="space-y-3">
          {question.instruction && (
            <p className="text-sm text-[#A0AEC0]">{question.instruction}</p>
          )}
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => onChange(e.target.value)}
              rows={question.minRows || 5}
              placeholder={question.placeholder || "Écrivez ici…"}
              className="w-full px-4 py-3 bg-[#2D3748]/60 text-[#F7FAFC] rounded-xl
                placeholder-[#A0AEC0]/60 outline-none focus:ring-2 focus:ring-[#DDAC63]/50
                transition-all duration-200 resize-none"
            />
            {question.showCharCount && (
              <span className="absolute bottom-3 right-4 text-xs text-[#A0AEC0]/50">
                {text.length} caractères
              </span>
            )}
          </div>
          {error && (
            <p className="text-sm text-[#DDAC63]/80">{error}</p>
          )}
        </div>
      );
    }

    default:
      return null;
  }
}
