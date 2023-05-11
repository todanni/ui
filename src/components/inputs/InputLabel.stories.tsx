import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InputLabel } from './InputLabel';

const meta = {
  title: 'Components/Inputs',
  component: InputLabel,
} satisfies Meta<typeof InputLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {},
  render: ({}) => (
    <div className="w-1/2">
      <InputLabel>Enter your monthly income</InputLabel>
    </div>
  ),
};
