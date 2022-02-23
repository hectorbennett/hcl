import { ReactNode } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  backgroundColor?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className={styles.button}
      disabled={props.disabled}
      style={{
        backgroundColor: props.backgroundColor,
        borderColor: props.backgroundColor,
      }}
    >
      {props.children}
    </button>
  );
};
