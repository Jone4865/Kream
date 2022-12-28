import { ComponentMeta, ComponentStory } from "@storybook/react";
import Title from "./Title";

export default {
  title: "Components|Basic/Title",
  component: Title,
  argTypes: {
    title: { defaultValue: "JustDropped"},
    subTitle: { defaultValue: "발매 상품"}
  },
} as ComponentMeta<typeof Title>;

export const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args} />
);
