import React from 'react';
import { PlanPanelCard } from '../PlanPanelCard';

export const PlanTaxSummary = () => {
  return (
    <PlanPanelCard icon={'calculator'} title="Tax year summary">
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
