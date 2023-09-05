import type { Meta, StoryObj } from '@storybook/react';
import WSInput from '../components/WSInput/WSInput';

const meta = {
  title: 'Example/WSInput',
  component: WSInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    label: "Имя",
    name: "test",
    id: "test",
    value: '',
  },
};

export const InputWithError: Story = {
  args: {
    label: "Имя",
    name: "test",
    value: '',
    id: "test",
    error: "You are an error"
  },
};

export const InputRequired: Story = {
  args: {
    label: "Пароль",
    name: "test",
    id: "test",
    value: '',
    requiredMessage: 'Поле должно быть заполнено',
    required: true,
    intermediate: true,
  },
};