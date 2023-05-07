import React from 'react';
import { PlanPanel } from '../PlanPanel';
import { PlanGoalsCard } from '../PlanGoalsCard';
import {
  PlanSpendingPayments,
  PlanSpendingPaymentsProps,
} from './PlanSpendingPayments';

const noGoalsText = 'Example: Spend less than 200£ on shopping.' as const;

export type PlanSpendingPanelProps = {
  payments: PlanSpendingPaymentsProps;
  goals: {
    loading: boolean;
  };
};

export const PlanSpendingPanel = ({
  payments,
  goals,
}: PlanSpendingPanelProps) => {
  return (
    <PlanPanel>
      <PlanSpendingPayments {...payments} />
      <PlanGoalsCard
        title="Spending goals"
        noGoalsText={noGoalsText}
        progressColour="spending"
        loading={goals.loading}
      />
    </PlanPanel>
  );
};
