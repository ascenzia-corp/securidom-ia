export interface Brand {
  id: string;
  /** Nom affiché (alt du logo) */
  name: string;
  /** Valeur envoyée dans la colonne « Entreprise » du Google Sheet */
  entreprise: string;
  logoSrc: string;
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
  footer: "Formation Cadres Augmentés — Sécuridom · Martinique",
};

export const apsBrand: Brand = {
  id: "aps",
  name: "APS",
  entreprise: "APS",
  logoSrc: "/logo-aps.svg",
  footer: "Formation Cadres Augmentés — APS · Groupe Securidom",
  // Rouge du logo APS (Groupe Securidom)
  cssVars: {
    "--brand-accent": "#E30613",
    "--brand-accent-hover": "#B80510",
    "--brand-on-accent": "#FFFFFF",
  },
};
