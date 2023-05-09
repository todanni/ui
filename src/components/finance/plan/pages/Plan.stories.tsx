import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Plan } from './Plan';

const meta = {
  title: 'Finance Planner/Pages/Plan',
  component: Plan,
} satisfies Meta<typeof Plan>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    selected: 'overview',
  },
  render: ({ selected }) => <Plan selected={selected} />,
};

export const Income: Story = {
  args: {
    selected: 'income',
  },
  render: ({ selected }) => <Plan selected={selected} />,
};

export const Spending: Story = {
  args: {
    selected: 'spending',
  },
  render: ({ selected }) => <Plan selected={selected} />,
};

export const Debt: Story = {
  args: {
    selected: 'debt',
  },
  render: ({ selected }) => <Plan selected={selected} />,
};

export const Savings: Story = {
  args: {
    selected: 'savings',
  },
  render: ({ selected }) => <Plan selected={selected} />,
};
