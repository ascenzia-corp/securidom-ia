"use client";

export default function AscenziaLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized road/path icon */}
      <path
        d="M12 32C14 20 20 12 28 8C24 14 20 22 18 32"
        stroke="#DDAC63"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Text: ascenzia */}
      <text
        x="38"
        y="28"
        fontFamily="Manrope, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill="#F7FAFC"
        letterSpacing="0.5"
      >
        ascenzia
      </text>
      {/* IA accent */}
      <text
        x="136"
        y="28"
        fontFamily="Manrope, sans-serif"
        fontWeight="800"
        fontSize="18"
        fill="#DDAC63"
      >

      </text>
    </svg>
  );
}
