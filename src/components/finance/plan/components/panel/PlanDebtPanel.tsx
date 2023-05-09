import React from 'react';
import { PlanPanel } from './PlanPanel';
import {
  PlanDebtRepayments,
  PlanDebtRepaymentsProps,
} from '../../../payment/PlanDebtRepayments';
import {
  PlanDebtBalances,
  PlanDebtBalancesProps,
} from '../../../balance/PlanDebtBalances';
import { PlanGoalsCard } from '../../../goal/PlanGoalsCard';

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
