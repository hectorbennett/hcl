import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Scrollable } from "./Scrollable";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Scrollable",
  component: Scrollable.div,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Scrollable.div>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Scrollable.div> = (args) => (
  <Scrollable.div {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  //   children: "Hello world 1",
};
