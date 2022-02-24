import { useContext, ReactNode } from "react";
import { ThemeContext } from "../Theme";
import styles from "./Button.module.scss";

export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  backgroundColor?: string;
}

export const Button = (props: ButtonProps) => {
  const theme = useContext(ThemeContext);
  return (
    <button
      type="button"
      className={styles.button}
      disabled={props.disabled}
      style={{
        backgroundColor: theme.colors.accent,
        borderColor: theme.colors.accent,
        fontFamily: theme.fonts.primary,
      }}
    >
      {props.children}
    </button>
  );
};
