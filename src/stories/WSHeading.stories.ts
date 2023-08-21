import type { Meta, StoryObj } from '@storybook/react';
import WSHeading from '../components/WSHeading/WSHeading';

const meta = {
  title: 'Example/WSHeading',
  component: WSHeading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1Heading: Story = {
  args: {
    type: 'h1',
    children: "Hello, it's me"
  },
};

export const H2Heading: Story = {
  args: {
    type: 'h2',
    children: "Hello, it's me"
  },
};
