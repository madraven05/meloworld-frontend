// src/components/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { FaSearch } from 'react-icons/fa';
import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false, description: 'Optional icon node' },
    textSize: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'base', 'lg'],
      description: 'Font size for the input text',
    },
    inputSize: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Vertical padding & font size',
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    type: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/** A simple text input */
export const Default: Story = {
  args: {
    placeholder: 'Type something…',
    textSize: 'base',
    inputSize: 'md',
  },
};

/** With a leading search icon */
export const WithIcon: Story = {
  args: {
    placeholder: 'Search…',
    icon: <FaSearch />,
    textSize: 'base',
    inputSize: 'md',
  },
};
