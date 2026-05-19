import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Email",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled Input",
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
};
