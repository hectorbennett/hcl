import { ReactNode } from "react";
import { CgCheck } from "react-icons/cg";
import styles from "./Checkbox.module.scss";

export const Checkbox = (props: object) => (
  <span className={styles.checkbox_outer}>
    <input className={styles.checkbox} type="checkbox" {...props} />
    <span className={styles.check}>
      <CgCheck />
    </span>
  </span>
);

export interface LabelProps {
  children: ReactNode;
  label: ReactNode;
}

Checkbox.label = (props: LabelProps) => (
  <label className={styles.checkbox_label}>
    {props.children}
    <span>{props.label}</span>
  </label>
);
