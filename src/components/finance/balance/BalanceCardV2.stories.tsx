import type { Meta, StoryObj } from '@storybook/react';
import { BalanceCardV2 } from './BalanceCardV2';
import React from 'react';

const meta = {
  title: 'Balance Card/V2',
  component: BalanceCardV2,
} satisfies Meta<typeof BalanceCardV2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    title: 'Debt',
    balance: 1234.56,
    icon: 'debt',
    section: 'debt',
  },
  render: ({ title, balance, icon, section }) => (
    <div className="w-1/2">
      <BalanceCardV2
        title={title}
        balance={balance}
        icon={icon}
        section={section}
      />
    </div>
  ),
};
