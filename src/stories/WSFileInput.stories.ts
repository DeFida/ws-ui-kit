import type { Meta, StoryObj } from '@storybook/react';
import WSFileInput from '../components/WSFileInput/WSFileInput';

const meta = {
  title: 'Example/WSFileInput',
  component: WSFileInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSFileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    label: "Имя",
    name: "test",
    id: "test",
    ref:{},
  },
};

export const InputWithError: Story = {
  args: {
    label: "Имя",
    name: "test",
    id: "test",
    error: "You are an error",
    ref:{},
  },
};

export const InputRequired: Story = {
  args: {
    label: "Пароль",
    name: "test",
    id: "test",
    ref:{},
    requiredMessage: 'Поле должно быть заполнено',
    required: true,
    intermediate: true,
  },
};
