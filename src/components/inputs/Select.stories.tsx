import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from './Select';

const meta = {
  title: 'Components/Inputs',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Selects: Story = {
  args: {
    label: 'Select some option',
    id: 'select',
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
    ],
  },
  render: ({ options, label, id }) => (
    <div className="flex w-1/2 flex-col gap-2">
      <Select options={options} label={label} id={id} />
    </div>
  ),
};
