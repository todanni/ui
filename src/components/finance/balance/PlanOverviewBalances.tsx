import React from 'react';
import { PlanPanelCard } from '../plan/panels/PlanPanelCard';
import { BalanceCard } from './BalanceCard';

export type PlanBalanceSummaryProps = {
  incomeBalance: number;
  assets: number;
  debt: number;
  savings: number;
  networth: number;
};

export const PlanBalanceSummary = ({
  incomeBalance,
  assets,
  debt,
  savings,
  networth,
}: PlanBalanceSummaryProps) => {
  const formatBalance = (balance: number) => {
    return balance.toLocaleString('en-GB', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  };

  return (
    <PlanPanelCard
      icon="percentReceipt"
      title="Balance summary"
      footerText="Networth estimate"
      footerEnd={formatBalance(networth)}
    >
      <div className="flex flex-col gap-2">
        <BalanceCard
          title="Income"
          balance={formatBalance(incomeBalance)}
          icon="money"
          section="income"
        />
        <BalanceCard
          title="Assets"
          balance={formatBalance(assets)}
          icon="assets"
          section="spending"
        />
        <BalanceCard
          title="Debt"
          balance={formatBalance(debt)}
          icon="card"
          section="debt"
        />
        <BalanceCard
          title="Savings"
          balance={formatBalance(savings)}
          icon="piggy"
          section="savings"
        />
      </div>
    </PlanPanelCard>
  );
};
