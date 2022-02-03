import { useEffect } from "react";
import useTransition from "react-transition-state";
import styles from "./Card.module.scss";

export interface CardProps {
  children: React.ReactNode;
}

export interface TransitionStates {
  unmounted: string;
  entering: string;
  entered: string;
  exiting: string;
  exited: string;
  preEnter: string;
  preExit: string;
}

export const Card = (props: CardProps) => {
  const [transitionState, toggleTransitionState] = useTransition({
    timeout: 100,
  });

  useEffect(() => {
    toggleTransitionState();
  }, []);

  const transitionStates: TransitionStates = {
    entering: styles.entering,
    entered: styles.entered,
    exiting: styles.exiting,
    exited: styles.exited,
    unmounted: "",
    preEnter: "",
    preExit: "",
  };

  return (
    <div
      className={`${styles.card} ${transitionStates[transitionState] || ""}`}
      {...props}
    >
      {props.children}
    </div>
  );
};
