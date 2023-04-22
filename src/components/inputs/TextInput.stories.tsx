import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextInput } from './TextInput';

const meta = {
  title: 'Inputs/TextInput',
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberInput: Story = {
  args: {
    placeholder: '£1000.00',
  },
  render: ({ placeholder }) => (
    <div className="w-1/2">
      <TextInput placeholder={placeholder} type="number"></TextInput>
    </div>
  ),
};
