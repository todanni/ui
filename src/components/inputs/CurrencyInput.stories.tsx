import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import { CurrencyInput } from './CurrencyInput';

const meta = {
  title: 'Components/Inputs',
  component: CurrencyInput,
} satisfies Meta<typeof CurrencyInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Currency: Story = {
  args: {
    label: 'Enter your monthly income',
  },
  render: ({ label }) => {
    return (
      <div className="w-1/2">
        <CurrencyInput label={label}></CurrencyInput>
      </div>
    );
  },
};
