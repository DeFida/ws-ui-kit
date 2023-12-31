import type { Meta, StoryObj } from '@storybook/react';
import WSImage from '../components/WSImage/WSImage';

const meta = {
  title: 'Example/WSImage',
  component: WSImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    src: 'https://storage.googleapis.com/weskill-storage/courses/6469aebb1e3a6ea3aec16e6f/Веб дизайн-preview-1684647731783.jpeg',
    width: 500,
    objectFit: 'contain',
    height: 500,
    alt: "testImage"
  },
};

export const ImageFill: Story = {
  args: {
    src: 'https://storage.googleapis.com/weskill-storage/courses/6437eec307807d1ee4827776/%D0%92%D0%B5%D0%B1%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-preview-1681387203938.jpeg',
    width: 500,
    objectFit: 'fill',
    height: 500,
    alt: "testImage"
  },
};

export const ImageCover: Story = {
  args: {
    src: 'https://storage.googleapis.com/weskill-storage/courses/6437eec307807d1ee4827776/%D0%92%D0%B5%D0%B1%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-preview-1681387203938.jpeg',
    width: 500,
    objectFit: 'cover',
    height: 500,
    alt: "testImage"
  },
};


export const ImageWithCaption: Story = {
  args: {
    src: 'https://storage.googleapis.com/weskill-storage/courses/6437eec307807d1ee4827776/%D0%92%D0%B5%D0%B1%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-preview-1681387203938.jpeg',
    width: 500,
    caption: "This is caption",
    objectFit: 'cover',
    height: 500,
    alt: "testImage"
  },
};