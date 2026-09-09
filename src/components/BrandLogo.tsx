"use client";

import { useState } from "react";

interface Props {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

// Affiche le logo de la marque ; si le fichier principal est absent
// (ex. logo officiel pas encore ajouté au repo), bascule sur le fallback.
export default function BrandLogo({ src, fallbackSrc, alt, className }: Props) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (fallbackSrc && current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
