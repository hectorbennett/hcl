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
  },
  fonts: {
    primary: "sans-serif",
  },
};

export const ThemeContext = createContext(defaultValue);
