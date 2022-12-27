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
          nickname: "user2",
        },
        {
          id: 3,
          nickname: "user3",
        },
        {
          id: 4,
          nickname: "user4",
        },
        {
          id: 5,
          nickname: "user5",
        },
      ],
    },
  },
} as ComponentMeta<typeof MidSlider>;

export const Template: ComponentStory<typeof MidSlider> = (args) => (
  <MidSlider {...args} />
);
