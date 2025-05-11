// src/components/Table.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Table from './table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    headings: {
      control: 'object',
      description: 'Column headers for the table',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headings: ['Name', 'Age', 'Occupation'],
    children: (
      <>
        <tr>
          <td className="px-6 py-2">Alice</td>
          <td className="px-6 py-2">30</td>
          <td className="px-6 py-2">Engineer</td>
        </tr>
        <tr>
          <td className="px-6 py-2">Bob</td>
          <td className="px-6 py-2">25</td>
          <td className="px-6 py-2">Designer</td>
        </tr>
        <tr>
          <td className="px-6 py-2">Carol</td>
          <td className="px-6 py-2">28</td>
          <td className="px-6 py-2">Product Manager</td>
        </tr>
      </>
    ),
  },
};
