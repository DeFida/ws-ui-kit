import type { Meta, StoryObj } from '@storybook/react';
import WSSearchBar from '../components/WSSearchBar/WSSearchBar';

const meta = {
  title: 'Example/WSSearchBar',
  component: WSSearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    label: "Курс",
    onSearch: async (query: string) => {return []},
    onSelect: (result) => {},
    placeholder: "Hello there",
  },
};