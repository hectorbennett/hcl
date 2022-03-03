import { createContext } from "react";
import { Theme } from "./types";

const defaultValue: Theme = {
  colors: {
    light: "white",
    dark: "black",
    primary: "",
    secondary: "",
    accent: "",
    info: "",
    success: "",
    error: "",
    warning: "",
    background: "",
    backgroundSecondary: "",
  },
  fonts: {
    primary: "sans-serif",
  },
  lighting: {
    shadow100: "",
  },
};

export const ThemeContext = createContext(defaultValue);
