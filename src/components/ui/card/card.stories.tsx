// src/components/Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Card from './card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional classes to apply to the inner wrapper',
    },
    children: {
      control: 'text',
      description: 'Anything you want rendered inside the card',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    className: 'p-4 bg-white',
    children: 'This is a simple card with some padding and a white background.',
  },
};

export const WithCustomContent: Story = {
  args: {
    className: 'p-6 bg-surface',
    children: (
      <div>
        <h3 className="text-lg font-bold mb-2">Card Title</h3>
        <p className="text-sm text-gray-600">
          Here’s some longer content inside the card. You can put multiple elements here.
        </p>
      </div>
    ),
  },
};
