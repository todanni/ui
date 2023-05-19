import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { NumberInput } from './NumberInput';

const meta = {
  title: 'Components/Inputs',
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Number: Story = {
  args: {
    label: 'Amount',
    id: 'amount',
    helpText: 'This is some help text',
  },
  render: ({ label, id, helpText }) => {
    return (
      <div className="flex w-1/2 flex-col gap-1">
        <NumberInput label={label} id={id} key="number-no-helptext" />
        <NumberInput
          label={label}
          id={id}
          helpText={helpText}
          key="number-with-helptext"
        />
      </div>
    );
  },
};
