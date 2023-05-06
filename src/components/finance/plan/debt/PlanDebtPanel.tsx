import React from 'react';
import { PlanPanel } from '../PlanPanel';
import { PlanPanelCard } from '../PlanPanelCard';
import { CategoryTotal, PlanPaymentsTable } from '../PlanPaymentsTable';
import { PlanDebtGoals } from './PlanDebtGoals';
import { BalanceCategory, PlanBalanceTable } from './PlanBalanceTable';

export const PlanDebtPanel = () => {
  return (
    <PlanPanel>
      <PlanPanelCard
        title="Debt repayment"
        icon="card"
        footerText="Total"
        footerEnd="£5,432.11"
      >
        <PlanPaymentsTable categories={payments} />
      </PlanPanelCard>
      <PlanPanelCard
        title="Debt balance"
        icon="percentReceipt"
        footerText="Total"
        footerEnd="£290,102.57"
      >
        <PlanBalanceTable categories={balances} />
      </PlanPanelCard>
      <PlanDebtGoals />
    </PlanPanel>
  );
};

const payments: CategoryTotal[] = [
  {
    name: 'Personal loans',
    subCategories: [
      {
        name: 'Monzo',
        total: 50.87,
      },
      {
        name: 'Novuna',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Credit cards',
    subCategories: [
      {
        name: 'Barclaycard',
        total: 50.87,
      },
      {
        name: 'Amex',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Car loans',
    subCategories: [
      {
        name: 'VW Finance',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Student loan',
    subCategories: [
      {
        name: 'Income deduction',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Mortgage',
    subCategories: [
      {
        name: 'Virgin money',
        total: 50.87,
      },
    ],
  },
];

const balances: BalanceCategory[] = [
  {
    name: 'Mortgage',
    balances: [
      {
        name: 'Virgin money',
        balance: 266734.87,
        interestTotal: 12000.87,
        paymentsTotal: 24000.87,
      },
    ],
  },
  {
    name: 'Car loans',
    balances: [
      {
        name: 'VW Finance',
        balance: 26478.87,
        interestTotal: 50.87,
        paymentsTotal: 6050.87,
      },
    ],
  },
  {
    name: 'Student loan',
    balances: [
      {
        name: 'Student loan',
        balance: 19106.87,
        interestTotal: 1050.87,
        paymentsTotal: 13876.87,
      },
    ],
  },
  {
    name: 'Personal loans',
    balances: [
      {
        name: 'Novuna',
        balance: 2560.49,
        interestTotal: 50.87,
        paymentsTotal: 50.87,
      },
      {
        name: 'Monzo',
        balance: 1701.02,
        interestTotal: 50.87,
        paymentsTotal: 50.87,
      },
    ],
  },
];
