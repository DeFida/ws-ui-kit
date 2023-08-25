import type { Meta, StoryObj } from '@storybook/react';
import WSHeader from '../components/WSHeader/WSHeader';

const meta = {
  title: 'Example/WSHeader',
  component: WSHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
  }
};