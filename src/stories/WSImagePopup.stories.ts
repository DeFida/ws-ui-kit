import type { Meta, StoryObj } from '@storybook/react';
import WSImagePopup from '../components/WSImagePopup/WSImagePopup';

const meta = {
  title: 'Example/WSImagePopup',
  component: WSImagePopup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSImagePopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImagePopup: Story = {
  args: {
    image: 'https://www.minecraft.net/content/dam/games/minecraft/key-art/SUPM_Game-Image_One-Vanilla_672x400.jpg',
    onClose: () => {alert('Closed')}, 
  }
};