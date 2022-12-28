import { ComponentMeta, ComponentStory } from "@storybook/react";
import FooterImg from "./FooterImg";

export default {
  title: "Components|Basic/FooterImg",
  component: FooterImg,
  argTypes: {
    title: { defaultValue: "SERVICE GUIDE"},
    subTitle1: { defaultValue: "KREAM은 처음이지?"},
    subTitle2: { defaultValue: "서비스 소개를 확인해보세요."},
    btnText: {defaultValue: "서비스 안내"},
    imgName: {defaultValue: "footerLeft.png"}
  },
} as ComponentMeta<typeof FooterImg>;

export const Template: ComponentStory<typeof FooterImg> = (args) => (
  <FooterImg {...args} />
);
