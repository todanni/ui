import React from 'react';
import { PlanPanelCard } from '../PlanPanelCard';

export type PlanDebtRepaymentsProps = {
  repayments: {
    category: string;
    repayments: {
      provider: string;
      payment: number;
    }[];
  }[];
  total: number;
  loading: boolean;
};

export const PlanDebtRepayments = ({
  repayments,
  total,
}: PlanDebtRepaymentsProps) => {
  return (
    <PlanPanelCard
      icon="money"
      title="Debt repayment"
      footerEnd={'£' + total.toLocaleString('en-UK')}
      footerText="Total"
    >
      <div className="grid grid-cols-3 gap-y-1 font-light text-white">
        <p className="mb-1 font-semibold">Category</p>
        <p className="font-semibold">Provider</p>
        <p className="text-end font-semibold">Payment</p>
        {repayments.map((category) => (
          <>
            {category.repayments.map((repayment, index) => (
              <>
                {index === 0 && <p>{category.category}</p>}
                {index !== 0 && <p></p>}
                <p>{repayment.provider}</p>
                <p className="text-end">
                  £{repayment.payment.toLocaleString('en-UK')}
                </p>
              </>
            ))}
          </>
        ))}
      </div>
    </PlanPanelCard>
  );
};
