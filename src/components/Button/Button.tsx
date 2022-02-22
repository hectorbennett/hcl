import { ReactNode } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  return (
    <button type="button" className={styles.button} disabled={props.disabled}>
      {props.children}
    </button>
  );
};
