import type { Meta, StoryObj } from '@storybook/react';
import { PlanDebtBalances } from './PlanDebtBalances';
import React from 'react';

const meta = {
  title: 'Balance/Cards',
  component: PlanDebtBalances,
} satisfies Meta<typeof PlanDebtBalances>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    balanceTotal: 0,
    balances: [
      {
        name: 'Debt',
        balance: 0,
        interestTotal: 0,
        paymentsTotal: 0,
      },
    ],
  },
  render: ({}) => (
    <div className="w-1/2">
      <PlanDebtBalances balanceTotal={0} balances={[]} />
    </div>
  ),
};
