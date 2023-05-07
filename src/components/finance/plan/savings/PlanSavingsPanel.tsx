import React from 'react';
import { PlanPanel } from '../PlanPanel';
import { PlanPanelCard } from '../PlanPanelCard';
import { PlanPaymentsChart } from '../PlanPaymentsChart';
import { CategoryTotal, PlanPaymentsTable } from '../PlanPaymentsTable';
import { PlanGoal } from '../overview/PlanOverviewGoals';
import { PlanSavingsGoals } from './PlanSavingsGoals';

export const PlanSavingsPanel = () => {
  return (
    <PlanPanel>
      <PlanPanelCard title="Savings contributions" icon="piggy">
        <PlanPaymentsTable categories={payments} />
      </PlanPanelCard>
      <PlanSavingsGoals />
    </PlanPanel>
  );
};

const payments: CategoryTotal[] = [
  {
    name: 'Savings',
    total: 9924.62,
    icon: 'piggy',
    colour: 'savings',
    subCategories: [
      {
        name: 'Pension RL',
        total: 4671.01,
      },
      {
        name: 'Pension HL',
        total: 4145.62,
      },
      {
        name: 'Cash ISA',
        total: 800.01,
      },
      {
        name: 'Stocks ISA',
        total: 300.01,
      },
    ],
  },
  {
    name: 'Assets',
    total: 373000,
    icon: 'wallet',
    colour: 'spending',
    subCategories: [
      {
        name: 'House',
        total: 348000,
      },
      {
        name: 'Car',
        total: 25000,
      },
    ],
  },
];
