import { toColorString } from "polished";
import { useContext, ReactNode } from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../Theme";
// import styles from "./Input.module.scss";

export interface InputProps {
  error?: ReactNode;
  label?: ReactNode;
}

const ErrorMessage = (props: object) => {
  const theme = useContext(ThemeContext);
  const StyledSpan = styled("span", {
    color: theme.colors.error,
  });
  return <StyledSpan {...props} />;
};

const InputLabel = (props: object) => {
  const StyledSpan = styled("span", {
    marginTop: "0.8rem",
  });
  return <StyledSpan {...props} />;
};

const InputField = (props: object) => {
  const theme = useContext(ThemeContext);
  const StyledInput = styled("input", {
    padding: "8px",
    borderRadius: "5px",
    fontFamily: theme.fonts.primary,
    fontSize: "1em",
    background: theme.colors.inputBackground,
    border: `1px solid ${theme.colors.inputBorder}`,
    boxShadow: "border-box",
    ":focus-visible, :focus": {
      outline: "none",
      border: `1px solid ${theme.colors.accent}`,
    },
    ":disabled": {
      border: "1px dashed",
      background: "none",
    },
  });
  return <StyledInput {...props} />;
};

export const Input = (props: InputProps) => {
  const theme = useContext(ThemeContext);
  const { error, label, ...inputProps } = props;
  const StyledLabel = styled("label", {
    display: "flex",
    flexDirection: "column",
    color: props.error ? theme.colors.error : "inherit",
  });
  return (
    <StyledLabel>
      <InputLabel>{label}</InputLabel>
      <InputField {...inputProps} />
      {error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
    </StyledLabel>
  );
};
