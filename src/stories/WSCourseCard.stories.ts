import type { Meta, StoryObj } from '@storybook/react';
import WSCourseCard from '../components/WSCourseCard/WSCourseCard';

const meta = {
  title: 'Example/WSCourseCard',
  component: WSCourseCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSCourseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CourseCard: Story = {
  args: {
    id: '123',
    name: "Python",
    previewDescription: "python * telebot",
    previewImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    previewImageOnHover: "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
    linkName: "python"
  },
};