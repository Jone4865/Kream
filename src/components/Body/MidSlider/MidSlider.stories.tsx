import { ComponentMeta, ComponentStory } from "@storybook/react";
import MidSlider from "./MidSlider";

export default {
  title: "Components|Basic/MidSlider",
  component: MidSlider,
  argTypes: {
    data: {
      defaultValue: [
        {
          id: 1,
          nickname: "user1",
        },
        {
          id: 2,
          nickname: "user1",
        },
        {
          id: 3,
          nickname: "user1",
        },
        {
          id: 4,
          nickname: "user1",
        },
        {
          id: 5,
          nickname: "user1",
        },
      ],
    },
  },
} as ComponentMeta<typeof MidSlider>;

export const Template: ComponentStory<typeof MidSlider> = (args) => (
  <MidSlider {...args} />
);
