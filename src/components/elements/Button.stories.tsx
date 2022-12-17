import type { ComponentMeta } from "@storybook/react";

import Button from "#/components/elements/Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button>Button</Button>;
