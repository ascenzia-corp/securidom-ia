"use client";

export default function SecuridomLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Red arc above text */}
      <path
        d="M10 20C50 4 130 2 210 16"
        stroke="#E53E3E"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* "SECURI" in red */}
      <text
        x="6"
        y="46"
        fontFamily="Arial Black, Impact, sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#E53E3E"
        letterSpacing="1.5"
      >
        SECURI
      </text>
      {/* "DOM" in gray */}
      <text
        x="138"
        y="46"
        fontFamily="Arial Black, Impact, sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#8B95A5"
        letterSpacing="1.5"
      >
        DOM
      </text>
    </svg>
  );
}
