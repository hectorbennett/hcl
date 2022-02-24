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
}

interface Fonts {
    primary: string;
}

export interface Theme {
  colors: Colors;
  fonts: Fonts;
}
