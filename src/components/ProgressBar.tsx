"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-[#A0AEC0]">
          Question {current} sur {total}
        </span>
        <span className="text-xs text-[#A0AEC0]">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-1 bg-[#2D3748] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#DDAC63] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
