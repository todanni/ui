import React from 'react';
import { PlanHeader } from './PlanHeader';
import { PlanPanelSelect } from './PlanPanelSelect';
import { PlanActionsFooter } from './PlanActionsFooter';
import { PlanOverviewPanel } from './overview/PlanOverviewPanel';
import { PlanIncomePanel } from './income/PlanIncomePanel';
import { PlanDebtPanel } from './debt/PlanDebtPanel';
import { PlanSavingsPanel } from './savings/PlanSavingsPanel';
import { PlanSpendingPanel } from './spending/PlanSpendingPanel';

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
      {showPanel(selected)}
      <PlanActionsFooter />
    </div>
  );
};

const showPanel = (selected: PlanProps['selected']) => {
  switch (selected) {
    case 'overview':
      return <PlanOverviewPanel />;
    case 'income':
      return <PlanIncomePanel />;
    case 'spending':
      return <PlanSpendingPanel />;
    case 'debt':
      return <PlanDebtPanel />;
    case 'savings':
      return <PlanSavingsPanel />;
  }
};
