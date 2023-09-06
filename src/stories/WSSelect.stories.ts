import type { Meta, StoryObj } from '@storybook/react';
import WSSelect from '../components/WSSelect/WSSelect';

const meta = {
  title: 'Example/WSSelect',
  component: WSSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Select: Story = {
  args: {
    onSelect: (result) => {},
    selectedOption: null,
    options: [{value: 'hdgj', label: 'gsd'}, {value: 'jguc', label: 'jshbtb'}]
  },
};