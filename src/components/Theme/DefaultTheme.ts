import { setLightness } from "polished";
import { Theme } from "./types";

const woodsmoke = "#191a24";
const steelgrey = "#232332";
const cornflower = "#3d4162";
const grey = "#6c6c82";
const whisper = "#e7e7f4";

const violet = "#7945f9";
const blue = "#05baff";
const rose = "#f519a3";

const gradient = `linear-gradient(200deg, ${blue}, ${violet} 50%, ${rose})`;
const background = `linear-gradient(160deg, ${woodsmoke} 0%, #283247 100%)`;

/* https://mycolor.space/gradient?ori=to+right+bottom&hex=%23191A24&hex2=%23283247&sub=1 */
// const backgroundGradient: 'linear-gradient(to right bottom, #191a24, #1d202c, #212635, #252c3e, #283247)';
// background-image: ;

export const DefaultTheme: Theme = {
  colors: {
    primary: "blue",
    secondary: "purple",
    accentBackground: violet,
    accentText: whisper,
    accent: blue,
    get accent100() {
      return setLightness(0.9, this.accent);
    },
    get accent200() {
      return setLightness(0.8, this.accent);
    },
    get accent300() {
      return setLightness(0.7, this.accent);
    },
    get accent400() {
      return setLightness(0.6, this.accent);
    },
    get accent500() {
      return setLightness(0.5, this.accent);
    },
    get accent600() {
      return setLightness(0.4, this.accent);
    },
    get accent700() {
      return setLightness(0.3, this.accent);
    },
    info: "blue",
    error: "red",
    warning: "yellow",
    success: "green",
    background: background,
    // backgroundGradient: backgroundGradient,
    backgroundSecondary: "grey",
    inputBackground: grey,
    inputBorder: grey,
    cardBackground: grey,
    get cardBorder() {
      return this.cardBackground;
    },
    background: "white",
    backgroundSecondary: 'hsl(0, 0%, 98%)',
  },
  fonts: {
    primary: "Verdana",
  },
  lighting: {
    shadow100: "0 2px 10px 0 rgb(0 0 0 / 20%)",
  },
};
