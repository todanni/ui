import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlanPaymentsTable } from './PlanPaymentsTable';

const meta = {
  title: 'Plan/Payments Table',
  component: PlanPaymentsTable,
} satisfies Meta<typeof PlanPaymentsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

const Footer = () => {
  return (
    <div className="flex w-full justify-between text-lg font-bold text-white">
      <h1>Total</h1>
      <h1>£ 2,000.00</h1>
    </div>
  );
};

export const IncomePayments: Story = {
  args: {
    categories: [
      {
        name: 'Income',
        total: 1000,
        icon: 'money',
        subCategories: [
          {
            name: 'Salary',
            total: 1000,
          },
          {
            name: 'Pension',
            total: 1000,
          },
        ],
      },
    ],
    footer: <Footer />,
  },
  render: ({ categories, footer }) => (
    <PlanPaymentsTable categories={categories} footer={footer} />
  ),
};
