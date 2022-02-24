import { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "./types";

export interface ThemeProviderProps {
  theme: Theme;
  children?: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => (
  <ThemeContext.Provider value={props.theme}>
    {props.children}
  </ThemeContext.Provider>
);
