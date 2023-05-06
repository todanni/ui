import React from 'react';
import { PlanPanel } from '../PlanPanel';
import { PlanPanelCard } from '../PlanPanelCard';
import { CategoryTotal, PlanPaymentsTable } from '../PlanPaymentsTable';
import { PlanSpendingGoals } from './PlanSpendingGoals';

export const PlanSpendingPanel = () => {
  return (
    <PlanPanel>
      <PlanPanelCard
        title="Living costs"
        icon="summary"
        footerText="Total"
        footerEnd="£1543.23"
      >
        <PlanPaymentsTable categories={payments} />
      </PlanPanelCard>
      <PlanSpendingGoals />
    </PlanPanel>
  );
};

const payments: CategoryTotal[] = [
  {
    name: 'Bills',
    total: 1234.56,
    icon: 'money',
    subCategories: [
      {
        name: 'Council tax',
        total: 50.87,
      },
      {
        name: 'Electricity bill',
        total: 50.87,
      },
      {
        name: 'Water bill',
        total: 50.87,
      },
      {
        name: 'Phone bill',
        total: 50.87,
      },
      {
        name: 'Insurance',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Living costs',
    total: 1234.56,
    icon: 'wallet',
    subCategories: [
      {
        name: 'Groceries',
        total: 50.87,
      },
      {
        name: 'Transport',
        total: 50.87,
      },
      {
        name: 'Medication',
        total: 50.87,
      },
      {
        name: 'Pets',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Discretionary',
    total: 1234.56,
    icon: 'card',
    subCategories: [
      {
        name: 'Shopping',
        total: 50.87,
      },
      {
        name: 'Eating out',
        total: 50.87,
      },
      {
        name: 'Subscriptions',
        total: 50.87,
      },
      {
        name: 'Personal care',
        total: 50.87,
      },
      {
        name: 'Travel',
        total: 50.87,
      },
    ],
  },
];
