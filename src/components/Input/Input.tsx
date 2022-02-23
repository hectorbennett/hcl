import { ReactNode } from "react";
import styles from "./Input.module.scss";

export interface InputProps {
  error?: ReactNode;
  label?: ReactNode;
}

export const Input = (props: InputProps) => {
  const { error, label, ...inputProps } = props;
  const classNames = [styles.input];
  if (props.error) {
    classNames.push(styles.error);
  }
  return (
    <label className={classNames.join(" ")}>
      <span className={styles.label}>{label}</span>
      <input {...inputProps} />
      {error ? <span className={styles.error}>{props.error}</span> : null}
    </label>
  );
};
