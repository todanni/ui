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
      return (
        <PlanOverviewPanel
          remaining={0}
          incomeTotal={0}
          spendingTotal={0}
          debtTotal={0}
          savingsTotal={0}
          transfersTotal={0}
          goals={[]}
        />
      );
    case 'income':
      return (
        <PlanIncomePanel
          payments={{
            loading: false,
            total: 0,
            income: {
              total: 0,
              payments: [],
            },
            deductions: {
              total: 0,
              payments: [],
            },
          }}
          tax={[]}
          goals={{
            loading: false,
            goals: [],
          }}
        />
      );
    case 'spending':
      return (
        <PlanSpendingPanel
          payments={{
            total: 0,
            livingCosts: {
              total: 0,
              payments: [],
            },
            bills: {
              total: 0,
              payments: [],
            },
            discretionary: {
              total: 0,
              payments: [],
            },
            loading: false,
          }}
          goals={{
            loading: false,
          }}
        />
      );
    case 'debt':
      return (
        <PlanDebtPanel
          debtRepayments={{
            repayments: [],
            total: 0,
            loading: false,
          }}
          debtBalances={{
            balanceTotal: 0,
            balances: [],
          }}
          goals={[]}
        />
      );
    case 'savings':
      return <PlanSavingsPanel />;
  }
};
