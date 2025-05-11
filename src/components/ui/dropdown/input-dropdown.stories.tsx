// src/components/InputDropdown.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { FaUser } from 'react-icons/fa6';
import InputDropdown from './input-dropdown';

const meta: Meta<typeof InputDropdown> = {
  title: 'Components/InputDropdown',
  component: InputDropdown,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Optional label above the select' },
    options: {
      control: 'object',
      description: 'Array of options (string or { label, value })',
    },
    icon: { control: false, description: 'Icon node rendered inside the input' },
    visualSize: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    textSize: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'base', 'lg'],
    },
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof InputDropdown>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    visualSize: 'md',
    textSize: 'base',
    primaryColor: '#024a70',
    secondaryColor: '#fde9da',
  },
};

export const WithLabelAndIcon: Story = {
  args: {
    label: 'Select User',
    options: [
      { label: 'Alice', value: 'alice' },
      { label: 'Bob', value: 'bob' },
      { label: 'Carol', value: 'carol' },
    ],
    icon: <FaUser />,
    visualSize: 'md',
    textSize: 'base',
    primaryColor: '#024a70',
    secondaryColor: '#fde9da',
  },
};
