import type { Meta, StoryObj } from '@storybook/react';
import WSMarkdownRender from '../components/WSMarkdownRender/WSMarkdownRender';

const meta = {
  title: 'Example/WSMarkdownRender',
  component: WSMarkdownRender,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof WSMarkdownRender>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarkdownRender: Story = {
  args: {
    content: "![PresentSimple](https://englishclassviaskype.com/wp-content/uploads/2019/12/Present-simple-explained-in-pictures.png) \n # Understanding Booleans in Python\n\nIn Python, a Boolean is a data type that represents one of two possible values: `True` or `False`. Booleans are fundamental to programming as they allow you to make decisions, control the flow of your program, and perform logical operations.\n\n## Boolean Values\n\n1. **True**: Represents a true or affirmative condition. It's the result of a successful comparison or a condition that is met.\n\n2. **False**: Represents a false or negative condition. It's the result of an unsuccessful comparison or a condition that is not met.\n\n## Boolean Variables\n\nYou can assign Boolean values to variables just like any other data type in Python. Here's an example:\n\n```python\nis_python_fun = True\nis_learning = False\n\ndef hello():\nprint('YEP!')\n```",
    onPopupOpen: (src: string) => {alert(src)}
  }
};