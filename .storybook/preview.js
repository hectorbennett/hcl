import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { ThemeProvider, DefaultTheme } from "../src/components/Theme";
import { Client as Styletron } from "styletron-engine-atomic";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <StyletronProvider
      value={new Styletron()}
      debug={process.env.NODE_ENV === "production" ? void 0 : new DebugEngine()}
      debugAfterHydration
    >
      <ThemeProvider theme={DefaultTheme}>
        <Story />
      </ThemeProvider>
    </StyletronProvider>
  ),
];
