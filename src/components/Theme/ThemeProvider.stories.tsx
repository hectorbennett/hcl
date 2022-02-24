import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeProvider } from "./ThemeProvider";
import { DefaultTheme } from "./DefaultTheme";
import { Button } from "..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ThemeProvider",
  component: ThemeProvider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof ThemeProvider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeProvider> = (args) => (
  <ThemeProvider {...args}>
    <Button>Hello world</Button>
  </ThemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  theme: DefaultTheme,
  // children: "ThemeProvider contents",
  // backgroundColor: "red",
};
