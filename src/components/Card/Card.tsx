import { useContext } from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../Theme";

export interface CardProps {
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  const theme = useContext(ThemeContext);

  const StyledDiv = styled("div", {
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: "5px",
    boxShadow: theme.lighting.shadow100,
    // borderBottom: `2px solid ${theme.borders}`,
  });

  return <StyledDiv {...props} />;
};
