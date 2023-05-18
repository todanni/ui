import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/Inputs',
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: 'Balance name',
    id: 'name',
  },
  render: ({ label, id }) => {
    return (
      <div className="flex w-1/2 flex-col gap-1">
        <TextInput label={label} id={id} placeholder="Mortgage balance" />
      </div>
    );
  },
};
