import { useContext } from "react";
import { styled } from "styletron-react";
import { ThemeContext } from "../Theme";


export const Card = (props: object) => {
  const theme = useContext(ThemeContext);

  const StyledDiv = styled("div", {
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: "5px",
    boxShadow: theme.lighting.shadow100,
    // borderBottom: `2px solid ${theme.borders}`,
  });

  return <StyledDiv {...props} />;
};



export const CardBody = (props: object) => {
  const theme = useContext(ThemeContext);

  const StyledDiv = styled("div", {
    padding: '1.25rem',
    fontFamily: theme.fonts.primary,
  });

  return <StyledDiv {...props} />;
}