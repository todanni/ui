import React from 'react';
import { PlanPanelCard } from '../plan/panels/PlanPanelCard';

export type PlanSavingsBalancesProps = {
  balanceTotal: number;
  balances: {
    name: string;
    balance: number;
    interestTotal: number;
    paymentsTotal: number;
  }[];
};

export const PlanSavingsBalances = ({
  balanceTotal,
  balances,
}: PlanSavingsBalancesProps) => {
  return (
    <PlanPanelCard
      icon="percentReceipt"
      title="Savings balance"
      footerText="Total"
      footerEnd={'£' + balanceTotal.toLocaleString('en-UK')}
    >
      <div className="grid grid-cols-2 gap-1 p-2">
        {balances.map((balance) => (
          <>
            <h1 className="sm:text-md text-md font-bold text-white">
              {balance.name}
            </h1>
            <h1 className="sm:text-md text-md justify-self-end text-end text-white">
              £{balance.balance.toLocaleString('en-UK')}
            </h1>
            <h1 className="sm:text-md text-sm text-white/80">
              Payments total:
            </h1>
            <h1 className="sm:text-md text-end text-sm text-white/70">
              £{balance.paymentsTotal.toLocaleString('en-UK')}
            </h1>
            <h1 className="sm:text-md text-sm text-white/80">
              Interest total:
            </h1>
            <h1 className="sm:text-md text-end text-sm text-white/70">
              £{balance.interestTotal.toLocaleString('en-UK')}
            </h1>
          </>
        ))}
      </div>
    </PlanPanelCard>
  );
};
