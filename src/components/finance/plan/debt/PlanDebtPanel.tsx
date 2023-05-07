import React from 'react';
import { PlanPanel } from '../PlanPanel';
import { PlanGoalsCard } from '../PlanGoalsCard';
import {
  PlanDebtRepayments,
  PlanDebtRepaymentsProps,
} from './PlanDebtRepayments';
import { PlanDebtBalances, PlanDebtBalancesProps } from './PlanDebtBalances';

export type PlanDebtPanelProps = {
  debtRepayments: PlanDebtRepaymentsProps;
  debtBalances: PlanDebtBalancesProps;
  goals: {
    name: string;
    target: number;
    amount: number;
  }[];
};

export const PlanDebtPanel = ({
  debtBalances,
  debtRepayments,
  goals,
}: PlanDebtPanelProps) => {
  return (
    <PlanPanel>
      <PlanDebtRepayments {...debtRepayments} />
      <PlanDebtBalances {...debtBalances} />
      <PlanGoalsCard
        loading={false}
        goals={goals}
        title="Debt goals"
        noGoalsText="Example: Pay extra 100£ towards personal loan."
        progressColour="debt"
      />
    </PlanPanel>
  );
};
