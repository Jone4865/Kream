import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu from "./Menu";

export default {
  title: "Components|Basic/Menu",
  component: Menu,
  argTypes: {
    isPc: { defaultValue: false },
    name: { defaultValue: "menu1" },
    menu: {
      defaultValue: [
        {
          divName: "럭키박스",
          id: 1,
          imgName: "menu1",
        },
        {
          divName: "럭키박스",
          id: 2,
          imgName: "menu2",
        },
        {
          divName: "럭키박스",
          id: 3,
          imgName: "menu3",
        },
        {
          divName: "럭키박스",
          id: 4,
          imgName: "menu4",
        },
      ],
    },
  },
} as ComponentMeta<typeof Menu>;

export const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
);
