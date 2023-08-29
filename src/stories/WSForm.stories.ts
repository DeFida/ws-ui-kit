import type { Meta, StoryObj } from '@storybook/react';
import WSInput from '../components/WSInput/WSInput';
import WSForm from '../components/WSForm/WSForm';

const meta = {
  title: 'Example/WSForm',
  component: WSForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {
    onSubmit: (e) => {e.preventDefault(); alert('asd')},
    children: 'asdasd'
  },
};