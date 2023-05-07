import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Plan } from './Plan';

const meta = {
  title: 'Plan',
  component: Plan,
} satisfies Meta<typeof Plan>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    selected: 'overview',
  },
  render: ({ selected }) => <Plan selected={selected} />,
};
