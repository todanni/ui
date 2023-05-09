import React from 'react';
import { PlanPanelCard } from '../plan/panels/PlanPanelCard';

export type PlanTaxSummaryProps = {
  taxPayments: {
    name: string;
    amount: number;
  }[];
};

export const PlanTaxSummary = ({ taxPayments }: PlanTaxSummaryProps) => {
  return (
    <PlanPanelCard icon="calendar" title="Tax year summary" endButton="help">
      <h2 className="text-md mb-4 text-white/80">
        Income payments and tax deductions for current tax year
      </h2>
      {payments.map((payment) => (
        <div key={payment.name} className="flex justify-between">
          <h1 className="text-white"> {payment.name} </h1>
          <h1 className="text-white">
            £{payment.amount.toLocaleString('en-UK')}
          </h1>
        </div>
      ))}
    </PlanPanelCard>
  );
};

const payments = [
  {
    name: 'Taxable pay to date',
    amount: 7833.33,
  },
  {
    name: 'Income tax',
    amount: 2074.46,
  },
  {
    name: 'National insurance',
    amount: 449.81,
  },
  {
    name: 'Student loan repayment',
    amount: 500.01,
  },
  {
    name: 'Pension contributions',
    amount: 500.01,
  },
];
