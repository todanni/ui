import React from 'react';
import { BalanceCardV2 } from '../balance/BalanceCardV2';
import { PlanPanelCard } from './PlanPanelCard';

export const PlanBalanceSummary = () => {
  return (
    <PlanPanelCard
      icon="percentReceipt"
      title="Balance summary"
      footerText="Networth estimate"
      footerEnd="£66,789.24"
    >
      <div className="flex flex-col gap-2">
        <BalanceCardV2
          title="Income"
          balance={543.23}
          icon="money"
          section="income"
        />
        <BalanceCardV2
          title="Assets"
          balance={234567.65}
          icon="assets"
          section="spending"
        />
        <BalanceCardV2
          title="Debt"
          balance={123456.65}
          icon="card"
          section="debt"
        />
        <BalanceCardV2
          title="Savings"
          balance={10987.65}
          icon="piggy"
          section="savings"
        />
      </div>
    </PlanPanelCard>
  );
};
