import React from 'react';
import { PlanPanelCard } from '../PlanPanelCard';

export const PlanDebtBalances = () => {
  return (
    <PlanPanelCard
      icon="percentReceipt"
      title="Debt balances"
      footerText="Total"
      footerEnd="£290,876.19"
    >
      <div className="mb-2 grid grid-cols-4 text-white">
        <h2 className="font-bold">Category</h2>
        <h3 className="font-semibold">Loan provider</h3>
        <p className="text-right">Min payment</p>
        <p className="text-right">Interest rate</p>
      </div>
      {debts.map((debt) => (
        <div key={debt.name} className="mb-2 grid grid-cols-4 text-white">
          <h2>{debt.category}</h2>
          <h3>{debt.name}</h3>
          <p className="text-right">£{debt.minPayment}</p>
          <p className="text-right">{debt.interestRate}%</p>
        </div>
      ))}
    </PlanPanelCard>
  );
};

export type DebtBalance = {
  category: string;
  name: string;
  minPayment: number;
  interestRate: number;
  balance: number;
};

const debts: DebtBalance[] = [
  {
    category: 'Mortgage',
    name: 'Virgin money',
    minPayment: 50.87,
    interestRate: 1.99,
    balance: 1234.56,
  },
  {
    category: 'Car loan',
    name: 'VW Finance',
    minPayment: 650.87,
    interestRate: 10.99,
    balance: 27234.56,
  },
  {
    category: 'Student loan',
    name: 'Student loans company',
    minPayment: 50.87,
    interestRate: 1.99,
    balance: 1234.56,
  },
  {
    category: 'Personal loan',
    name: 'Monzo',
    minPayment: 50.87,
    interestRate: 1.99,
    balance: 1234.56,
  },
  {
    category: 'Personal loan',
    name: 'Novuna',
    minPayment: 50.87,
    interestRate: 1.99,
    balance: 1234.56,
  },
];
