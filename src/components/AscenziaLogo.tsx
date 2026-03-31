"use client";

export default function AscenziaLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Winding road/path */}
      <path
        d="M8 42C10 34 13 26 17 20C21 14 26 10 30 8"
        stroke="#DDAC63"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 42C15 36 17 30 20 24C23 18 27 13 30 11"
        stroke="#DDAC63"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* "ascenzia" text */}
      <text
        x="42"
        y="35"
        fontFamily="Manrope, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="#F7FAFC"
        letterSpacing="1"
      >
        ascenzi
      </text>
      {/* "IA" in gold */}
      <text
        x="155"
        y="35"
        fontFamily="Manrope, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="#DDAC63"
        letterSpacing="1"
      >
        a
      </text>
      {/* Small decorative elements for the "IA" brand mark */}
      <g transform="translate(170, 12)">
        {/* I */}
        <rect x="0" y="4" width="4" height="20" fill="#DDAC63" rx="1" />
        {/* A */}
        <path d="M10 24L17 4L24 24M12 18H22" stroke="#DDAC63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}
