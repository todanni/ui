import React from 'react';
import { PlanHeader } from './PlanHeader';
import { PlanPanelSelect } from './PlanPanelSelect';
import { PlanPanel } from './PlanPanel';
import { PlanPanelCard } from './PlanPanelCard';
import { PlanActionsFooter } from './PlanActionsFooter';
import { CategoryTotal, PlanPaymentsTable } from './PlanPaymentsTable';
import { PlanPaymentsChart } from './PlanPaymentsChart';
import { PlanGoal, PlanGoalsCard } from './PlanGoalsCard';
import { PlanBalanceSummary } from './PlanBalanceSummary';

export type PlanProps = {
  selected: 'overview' | 'income' | 'spending' | 'debt' | 'savings';
};

export const Plan = ({ selected }: PlanProps) => {
  return (
    <div className="flex flex-col gap-4">
      <PlanHeader
        title="Your plan"
        subtitle="April 2023"
        previous="March 2023"
        next="May 2023"
        onClick={() => console.log('Clicked!')}
      />
      <PlanPanelSelect
        selected={selected}
        onClick={() => console.log('Clicked!')}
      />

      <PlanPanel>
        <PlanPanelCard
          title="Payments summary"
          icon="summary"
          footerText="Remaining"
          footerEnd="£543.23"
        >
          <PlanPaymentsTable categories={payments} />
        </PlanPanelCard>
        <PlanPanelCard
          title="Payments breakdown"
          icon="plan"
          footerText="Wants/Needs/Savings"
          footerEnd="50/30/20"
        >
          <PlanPaymentsChart />
        </PlanPanelCard>
        <PlanGoalsCard goals={goals} />
        <PlanBalanceSummary />
      </PlanPanel>
      <PlanActionsFooter />
    </div>
  );
};

const goals: PlanGoal[] = [
  { category: 'income', goal: 1234.56, amount: 1234.56 },
  { category: 'spending', goal: 1234.56, amount: 234.56 },
  { category: 'debt', goal: 1234.56, amount: 423.56 },
  { category: 'savings', goal: 1234.56, amount: 534.56 },
];

const payments: CategoryTotal[] = [
  {
    name: 'Income',
    total: 1234.56,
    icon: 'money',
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
    subCategories: [
      {
        name: 'From deductions',
        total: 50.87,
      },
    ],
  },
];
