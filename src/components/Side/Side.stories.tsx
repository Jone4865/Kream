import { ComponentMeta, ComponentStory } from "@storybook/react";
import Side from "./Side";

export default {
  title: "Components|Basic/Side",
  component: Side,
  modal: { defaultValue: 1 },
  modalSet: {
    defaultValue: function (modal: boolean): void {
      throw new Error("Function not implemented.");
    },
  },
} as ComponentMeta<typeof Side>;

export const Template: ComponentStory<typeof Side> = (args) => (
  <Side
    modal={false}
    modalSet={function (modal: boolean): void {
      throw new Error("Function not implemented.");
    }}
  />
);
