import { useContext, ReactNode } from "react";
import { ThemeContext } from "../Theme";
import styles from "./Button.module.scss";
import { styled } from "styletron-react";

export default () => {
  // Create a styled component by passing
  // an element name and a style object
};

export interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  backgroundColor?: string;
}

export const Button = (props: ButtonProps) => {
  const theme = useContext(ThemeContext);
  let StyledButton = styled("button", {
    boxSizing: "border-box",
    outline: "none",
    padding: "10px",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    border: `1px solid ${theme.colors.accent}`,
    fontFamily: theme.fonts.primary,
    backgroundColor: theme.colors.accent,
    ":disabled": {
      cursor: "default",
      opacity: 0.5,
    },
  });
  return (
    <StyledButton type="button" disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};
