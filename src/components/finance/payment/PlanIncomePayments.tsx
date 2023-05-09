import React from 'react';
import { PlanPanelCard } from '../plan/panels/PlanPanelCard';
import { PlanCategoryPayments, PlanPaymentsTable } from './PlanPaymentsTable';

export type PlanIncomePaymentsProps = {
  total: number;
  income: PlanCategoryPayments;
  deductions: PlanCategoryPayments;
  loading: boolean;
};

export const PlanIncomePayments = ({
  total,
  income,
  deductions,
}: PlanIncomePaymentsProps) => {
  return (
    <PlanPanelCard
      title="Income payments"
      icon="money"
      footerText="Total"
      footerEnd={total.toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    >
      <PlanPaymentsTable
        categories={[
          {
            name: 'Net income',
            total: income.total,
            subCategories: income.payments,
          },
          {
            name: 'Deductions',
            total: deductions.total,
            subCategories: deductions.payments,
          },
        ]}
      />
    </PlanPanelCard>
  );
};
