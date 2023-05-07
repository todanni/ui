import React from 'react';
import { PlanPanelCard } from '../PlanPanelCard';
import { PlanCategoryPayments, PlanPaymentsTable } from '../PlanPaymentsTable';

export type PlanSpendingPaymentsProps = {
  total: number;
  livingCosts: PlanCategoryPayments;
  bills: PlanCategoryPayments;
  discretionary: PlanCategoryPayments;
  loading: boolean;
};

export const PlanSpendingPayments = ({
  total,
  livingCosts,
  bills,
  discretionary,
}: PlanSpendingPaymentsProps) => {
  return (
    <PlanPanelCard
      title="Spending payments"
      icon="wallet"
      footerText="Total"
      footerEnd={total.toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    >
      <PlanPaymentsTable
        categories={[
          {
            name: 'Living costs',
            total: livingCosts.total,
            subCategories: livingCosts.payments,
          },
          {
            name: 'Bills',
            total: bills.total,
            subCategories: bills.payments,
          },
          {
            name: 'Discretionary',
            total: discretionary.total,
            subCategories: discretionary.payments,
          },
        ]}
      />
    </PlanPanelCard>
  );
};
