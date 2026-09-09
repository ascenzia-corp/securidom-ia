export interface Brand {
  id: string;
  /** Nom affiché (alt du logo) */
  name: string;
  /** Valeur envoyée dans la colonne « Entreprise » du Google Sheet */
  entreprise: string;
  logoSrc: string;
  /** Fichier de repli si logoSrc est absent du dépôt */
  logoFallbackSrc?: string;
  /** Affiche le logo atténué (opacité réduite) dans l'en-tête */
  dimLogo?: boolean;
  /** Texte de pied de page sur l'écran d'accueil */
  footer: string;
  /**
   * Surcharge des couleurs d'accent (variables CSS).
   * Les valeurs par défaut (Securidom, or #DDAC63) sont définies dans globals.css.
   */
  cssVars?: Record<string, string>;
}

export const securidomBrand: Brand = {
  id: "securidom",
  name: "Securidom",
  entreprise: "Securidom",
  logoSrc: "/logo-securidom.png",
  dimLogo: true,
  footer: "Formation Cadres Augmentés — Sécuridom · Martinique",
};

export const apsBrand: Brand = {
  id: "aps",
  name: "APS",
  entreprise: "APS",
  // Déposer le logo officiel sous public/logo-aps.webp : il sera utilisé
  // automatiquement. En attendant, le SVG recréé sert de repli.
  logoSrc: "/logo-aps.webp",
  logoFallbackSrc: "/logo-aps.svg",
  // Lettres noires sur fond noir : pleine opacité pour rester lisible
  dimLogo: false,
  footer: "Formation Cadres Augmentés — APS · Groupe Securidom",
  // Rouge du logo APS (Groupe Securidom)
  cssVars: {
    "--brand-accent": "#E30613",
    "--brand-accent-hover": "#B80510",
    "--brand-on-accent": "#FFFFFF",
  },
};
