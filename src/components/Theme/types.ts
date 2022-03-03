interface Colors {
  light: string;
  dark: string;
  primary: string;
  secondary: string;
  accent: string;
  info: string;
  success: string;
  error: string;
  warning: string;
  background: string;
  backgroundSecondary: string;
}

interface Fonts {
  primary: string;
}

interface Lighting {
  shadow100: string;
}

export interface Theme {
  colors: Colors;
  fonts: Fonts;
  lighting: Lighting;
}
