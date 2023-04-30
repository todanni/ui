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
    contents: {
      title: 'Monthly income',
      totalPayments: 1234.56,
    },
  },
  render: ({ contents }) => (
    <div className="flex flex-col gap-4">
      <BalanceCard section="income" contents={contents} />
      <BalanceCard section="spending" contents={contents} />
      <BalanceCard section="debt" contents={contents} />
      <BalanceCard section="savings" contents={contents} />
    </div>
  ),
};

export const Income: Story = {
  args: {
    section: 'income',
    contents: {
      title: 'Monthly income',
      totalPayments: 1234.56,
      sources: [
        { name: 'Salary', amount: 1234.56 },
        { name: 'Other', amount: 234.56 },
      ],
    },
  },
  render: ({ section, contents }) => (
    <BalanceCard section={section} contents={contents}></BalanceCard>
  ),
};

export const Spending: Story = {
  args: {
    section: 'spending',
    contents: {
      title: 'Monthly spending',
      totalPayments: 1234.56,
      sources: [
        { name: 'Salary', amount: 1234.56 },
        { name: 'Other', amount: 234.56 },
      ],
    },
  },
  render: ({ section, contents }) => (
    <BalanceCard section={section} contents={contents}></BalanceCard>
  ),
};

export const Debt: Story = {
  args: {
    section: 'debt',
    contents: {
      title: 'Monthly debt repayments',
      sources: [
        { name: 'Salary', amount: 1234.56 },
        { name: 'Other', amount: 234.56 },
      ],
      totalPayments: 1234.56,
      totalBalance: 1234.56,
      totalBalanceText: 'Total remaining debt',
    },
  },
  render: ({ section, contents }) => (
    <BalanceCard section={section} contents={contents}></BalanceCard>
  ),
};

export const Savings: Story = {
  args: {
    section: 'savings',
    contents: {
      title: 'Monthly savings contributions',
      totalPayments: 1234.56,
      sources: [
        { name: 'Salary', amount: 1234.56 },
        { name: 'Other', amount: 234.56 },
      ],
      totalBalance: 1234.56,
      totalBalanceText: 'Total savings balance',
    },
  },
  render: ({ section, contents }) => (
    <BalanceCard section={section} contents={contents}></BalanceCard>
  ),
};
