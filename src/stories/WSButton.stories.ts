import type { Meta, StoryObj } from '@storybook/react';
import WSButton from '../components/WSButton/WSButton';

const meta = {
  title: 'Example/WSButton',
  component: WSButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    children: 'Hello, yes!'
  }
};