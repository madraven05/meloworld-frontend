// src/components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

// 📋 1) Metadata about your component
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  // 📐 2) Controls so people can tweak props in the UI
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['filled', 'outline'],
    },
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    children: 'Primary Button',
    size: 'md',
    variant: 'filled',
    primaryColor: '#024a70',
    secondaryColor: '#fff',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    size: 'md',
    variant: 'outline',
    primaryColor: '#024a70',
    secondaryColor: '#fff',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Can’t Click Me',
    disabled: true,
  },
};
