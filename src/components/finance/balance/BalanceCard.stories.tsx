import type { Meta, StoryObj } from '@storybook/react';
import { BalanceCard } from './BalanceCard';
import React from 'react';

const meta = {
  title: 'Balance Card',
  component: BalanceCard,
} satisfies Meta<typeof BalanceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    title: 'Debt',
    balance: '£1,234.56',
    icon: 'debt',
    section: 'debt',
  },
  render: ({ title, balance, icon, section }) => (
    <div className="w-1/2">
      <BalanceCard
        title={title}
        balance={balance}
        icon={icon}
        section={section}
      />
    </div>
  ),
};
