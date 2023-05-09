import React from 'react';
import { PlanGoal, PlanOverviewGoals } from '../../goal/PlanOverviewGoals';
import { PlanPanel } from './PlanPanel';
import { PlanPaymentsChart } from '../../payment/PlanPaymentsChart';

import {
  PlanPaymentsTable,
  CategoryTotal,
} from '../../payment/PlanPaymentsTable';
import { PlanBalanceSummary } from '../../balance/PlanOverviewBalances';

export type PlanOverviewPanelProps = {
  remaining: number;
  incomeTotal: number;
  spendingTotal: number;
  debtTotal: number;
  savingsTotal: number;
  transfersTotal: number;
  goals: PlanGoal[];
};

export const PlanOverviewPanel = ({
  remaining,
  goals,
}: PlanOverviewPanelProps) => {
  return (
    <PlanPanel>
      <PlanPaymentsTable categories={payments} />
      <PlanPaymentsChart payments={[]} percentageSplit={'20/30/50'} />
      <PlanOverviewGoals goals={goals} />
      <PlanBalanceSummary
        incomeBalance={0}
        assets={0}
        debt={0}
        savings={0}
        networth={0}
      />
    </PlanPanel>
  );
};

const payments: CategoryTotal[] = [
  {
    name: 'Income',
    total: 1234.56,
    icon: 'money',
    colour: 'income',
    subCategories: [
      {
        name: '+ Transfers',
        total: 50.87,
      },
      {
        name: '+ Deductions',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Spending',
    total: 1234.56,
    icon: 'wallet',
    colour: 'spending',
    subCategories: [
      {
        name: 'Bills',
        total: 50.87,
      },
      {
        name: 'Living costs',
        total: 50.87,
      },
      {
        name: 'Discretionary',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Debt',
    total: 1234.56,
    icon: 'card',
    colour: 'debt',
    subCategories: [
      {
        name: 'From deductions',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Savings',
    total: 1234.56,
    icon: 'piggy',
    colour: 'savings',
    subCategories: [
      {
        name: 'From deductions',
        total: 50.87,
      },
    ],
  },
];
