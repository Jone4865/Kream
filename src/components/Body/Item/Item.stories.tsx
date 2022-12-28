import { ComponentMeta, ComponentStory } from "@storybook/react";
import Item from "./Item";

export default {
  title: "Components|Basic/Item",
  component: Item,
  argTypes: {
    isPc: { defaultValue: false },
    name: { defaultValue: "mostshared" },
    items: {
        defaultValue: [
        {
            content:"Nike 상품",
            delivery:"brand",
            id: 1,
            imgName: "mostshared1.png",
            maker:"Nike",
            now: true,
            price: 2495000
        },
        {
            content:"Nike 상품",
            delivery:"brand",
            id: 2,
            imgName: "mostshared2.png",
            maker:"Nike",
            now: true,
            price: 2495000
        },
        {
            content:"Nike 상품",
            delivery:"brand",
            id: 3,
            imgName: "mostshared3.png",
            maker:"Nike",
            now: true,
            price: 2495000
        },
        {
            content:"Nike 상품",
            delivery:"brand",
            id: 4,
            imgName: "mostshared4.png",
            maker:"Nike",
            now: true,
            price: 2495000
        },
        {
            content:"Nike 상품",
            delivery:"brand",
            id: 5,
            imgName: "mostshared5.png",
            maker:"Nike",
            now: true,
            price: 2495000
        },
    ] },
  },
} as ComponentMeta<typeof Item>;

export const Template: ComponentStory<typeof Item> = (args) => (
  <Item {...args} />
);
