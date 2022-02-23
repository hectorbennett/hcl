import { ReactNode } from "react";
import { Scrollable } from "../Scrollable";
import styles from "./TextArea.module.scss";

export interface TextAreaProps {
  error?: ReactNode;
  label?: ReactNode;
}

export const TextArea = (props: TextAreaProps) => {
  const { error, label, ...textAreaProps } = props;
  const classNames = [styles.input];
  if (error) {
    classNames.push(styles.error);
  }
  return (
    <label className={classNames.join(" ")}>
      <span className={styles.label}>{label}</span>
      <Scrollable.textarea {...textAreaProps} />
      {error ? <span className={styles.error}>{error}</span> : null}
    </label>
  );
};
