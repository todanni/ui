import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InputLabel } from './InputLabel';

const meta = {
  title: 'Inputs/Input Label',
  component: InputLabel,
} satisfies Meta<typeof InputLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberInput: Story = {
  args: {},
  render: ({}) => (
    <div className="w-1/2">
      <InputLabel>Enter your monthly income</InputLabel>
    </div>
  ),
};
