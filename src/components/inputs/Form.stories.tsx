import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextInput } from './TextInput';
import { Button } from '../buttons/Button';

const meta = {
  title: 'Components/Inputs',
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {
    id: '',
    label: 'Label',
  },
  render: ({ id, label }) => (
    <form className="grid w-1/2 grid-cols-3 gap-x-4 gap-y-1">
      <label htmlFor="income" className="text-white">
        Income source
      </label>
      <label htmlFor="amount" className="text-white">
        Amount (£)
      </label>
      <div></div>
      <TextInput id="income" placeholder="Salary" />
      <TextInput id="amount" placeholder="£1000.00" />
      <Button text={'Add'} colour="green" className="col-start-3 row-start-2" />
      <p className="col-span-3 mt-1 italic text-white/80">
        Your monthly income source and amount after tax
      </p>
    </form>
  ),
};
