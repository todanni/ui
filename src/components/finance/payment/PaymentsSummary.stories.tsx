import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PaymentsSummary } from './PaymentsSummary';

const meta = {
  title: 'Payment/PaymentsSummary',
  component: PaymentsSummary,
} satisfies Meta<typeof PaymentsSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    remaining: 123.45,
    categories: [
      {
        title: 'Income',
        total: 123.45,
        subCategories: [
          { title: 'Pre-tax deductions', total: 123.45 },
          { title: 'Transfers', total: 123.45 },
        ],
      },
      {
        title: 'Spending',
        total: 123.45,
        subCategories: [
          { title: 'Bills', total: 123.45 },
          { title: 'Living costs', total: 123.45 },
          { title: 'Discretionary', total: 123.45 },
        ],
      },
      {
        title: 'Debt',
        total: 123.45,
        subCategories: [],
      },
      {
        title: 'Savings',
        total: 123.45,
        subCategories: [],
      },
    ],
  },
  render: ({ remaining, categories }) => (
    <PaymentsSummary remaining={remaining} categories={categories} />
  ),
};
