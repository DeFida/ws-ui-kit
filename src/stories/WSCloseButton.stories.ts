import type { Meta, StoryObj } from '@storybook/react';
import WSCloseButton from '../components/WSCloseButton/WSCloseButton';

const meta = {
  title: 'Example/WSCloseButton',
  component: WSCloseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSCloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseButton: Story = {
  args: {
    closeImage: 'https://www.weskill.kz/_next/static/media/popup_close.d3572268.svg'
  }
};