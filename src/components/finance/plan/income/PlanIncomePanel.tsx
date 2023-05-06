import React from 'react';
import { PlanPanel } from '../PlanPanel';
import { PlanPanelCard } from '../PlanPanelCard';
import { PlanPaymentsChart } from '../PlanPaymentsChart';
import { CategoryTotal, PlanPaymentsTable } from '../PlanPaymentsTable';
import { PlanTaxSummary } from './PlanTaxSummary';

export const PlanIncomePanel = () => {
  return (
    <PlanPanel>
      <PlanPanelCard
        title="Income payments"
        icon="money"
        footerText="Total"
        footerEnd="£5,432.11"
      >
        <PlanPaymentsTable categories={payments} />
      </PlanPanelCard>
      <PlanTaxSummary />
      <PlanPanelCard title="Income breakdown" icon="breakdown">
        <PlanPaymentsChart />
      </PlanPanelCard>
    </PlanPanel>
  );
};

const payments: CategoryTotal[] = [
  {
    name: 'Net income',
    total: 1234.56,
    icon: 'money',
    subCategories: [
      {
        name: 'Salary',
        total: 50.87,
      },
      {
        name: 'Transfers',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Deductions',
    total: 1234.56,
    icon: 'wallet',
    subCategories: [
      {
        name: 'Income tax',
        total: 50.87,
      },
      {
        name: 'National insurance',
        total: 50.87,
      },
      {
        name: 'Pension',
        total: 50.87,
      },
      {
        name: 'Student loans',
        total: 50.87,
      },
    ],
  },
];
