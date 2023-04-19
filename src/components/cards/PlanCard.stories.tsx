import type { Meta, StoryObj } from '@storybook/react';
import { PlanCard } from './PlanCard';
import React from 'react';

const meta = {
  title: 'Plan Card',
  component: PlanCard,
} satisfies Meta<typeof PlanCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    contents: {
      title: 'Monthly income',
      totalPayments: 1234.56,
      icon: 'money',
    },
  },
  render: ({ contents }) => (
    <div className="flex flex-col gap-4">
      <PlanCard section="income" contents={contents} />
      <PlanCard section="spending" contents={contents} />
      <PlanCard section="debt" contents={contents} />
      <PlanCard section="savings" contents={contents} />
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
      icon: 'money',
    },
  },
  render: ({ section, contents }) => (
    <PlanCard section={section} contents={contents}></PlanCard>
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
      icon: 'money',
    },
  },
  render: ({ section, contents }) => (
    <PlanCard section={section} contents={contents}></PlanCard>
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
      icon: 'money',
    },
  },
  render: ({ section, contents }) => (
    <PlanCard section={section} contents={contents}></PlanCard>
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
      icon: 'money',
    },
  },
  render: ({ section, contents }) => (
    <PlanCard section={section} contents={contents}></PlanCard>
  ),
};
