import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Components|Basic/Header",
  component: Header,
  isPc: { defaultValue: false },
  modal: { defaultValue: true },
  modalSet: {
    defaultValue: function (modal: boolean): void {
      throw new Error("Function not implemented.");
    },
  },
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => (
  <Header
    isPc={false}
    modal={false}
    modalSet={function (modal: boolean): void {
      throw new Error("Function not implemented.");
    }}
  />
);
