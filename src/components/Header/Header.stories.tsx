import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Components|Basic/Header",
  component: Header,
  isPc: { defaultValue: false },
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => (
  <Header isPc={args?.isPc} />
);
