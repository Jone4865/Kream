import { ComponentMeta, ComponentStory } from "@storybook/react";
import MidAd from "./MidAd";

export default {
  title: "Components|Basic/MidAd",
  component: MidAd,
  argTypes: {
    imgName: { defaultValue: "midAd1.jpg"}
  },
} as ComponentMeta<typeof MidAd>;

export const Template: ComponentStory<typeof MidAd> = (args) => (
  <MidAd {...args} />
);
