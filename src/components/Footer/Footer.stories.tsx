import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Components|Basic/Footer",
  component: Footer,
  isPc: { defaultValue: false },
} as ComponentMeta<typeof Footer>;

export const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer isPc={args?.isPc} />
);
