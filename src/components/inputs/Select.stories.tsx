import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from './Select';

const meta = {
  title: 'Inputs/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      {
        name: 'Option 1',
        value: 'option-1',
      },
      {
        name: 'Option 2',
        value: 'option-2',
      },
    ],
  },
  render: ({ options }) => (
    <div className="w-1/2">
      <Select options={options}></Select>
    </div>
  ),
};
