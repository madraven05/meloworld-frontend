// src/components/Dropdown.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Header text shown on the Disclosure button',
    },
    children: {
      control: 'text',
      description: 'Content rendered inside the panel',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    title: 'Click to expand',
    children: 'This is the panel content. Put any text or markup here.',
  },
};

export const WithCustomContent: Story = {
  args: {
    title: 'More Details',
    children: (
      <div className="space-y-2">
        <p>Here’s a richer example with multiple elements:</p>
        <ul className="list-disc pl-5">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    ),
  },
};
