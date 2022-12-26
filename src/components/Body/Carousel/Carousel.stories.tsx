import { ComponentMeta, ComponentStory } from "@storybook/react";
import Carousel from "./Carousel";

export default {
  title: "Components|Basic/Carousel",
  component: Carousel,
  argTypes: {
    isPc: { defaultValue: false },
    data: {
      defaultValue: [
        {
            id: 2,
            imgName: "banner1",
            bottomColor: "black",
            backColor: "black",
        },
        {
            id: 1,
            imgName: "banner3",
            bottomColor: "white",
            backColor: "white",
        },
      ],
    },
  },
} as ComponentMeta<typeof Carousel>;

export const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);
