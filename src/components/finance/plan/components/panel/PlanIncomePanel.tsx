import React from 'react';
import { PlanPanel } from './PlanPanel';
import { PlanIncomePayments } from '~/components/finance/payment/PlanIncomePayments';
import { PlanTaxSummary } from '~/components/finance/payment/PlanTaxSummary';
import { PlanGoalsCard } from '~/components/finance/goal';
import { CategoryTotal } from '~/components/finance/payment';

export type PlanIncomePanelProps = {
  payments: {
    loading: boolean;
    total: number;
    income: {
      total: number;
      payments: {
        name: string;
        total: number;
      }[];
    };
    deductions: {
      total: number;
      payments: {
        name: string;
        total: number;
      }[];
    };
  };
  tax: {
    name: string;
    amount: number;
  }[];
  goals: {
    loading: boolean;
    goals: {}[];
  };
};

const noGoalsText = 'Example: Earn an extra 100£' as const;

export const PlanIncomePanel = ({
  payments,
  tax,
  goals,
}: PlanIncomePanelProps) => {
  return (
    <PlanPanel>
      <PlanIncomePayments
        total={payments.total}
        income={payments.income}
        deductions={payments.deductions}
        loading={payments.loading}
      />
      <PlanTaxSummary taxPayments={tax} />
      <PlanGoalsCard
        title="Income goals"
        noGoalsText={noGoalsText}
        progressColour="income"
        loading={goals.loading}
      />
    </PlanPanel>
  );
};

const payments: CategoryTotal[] = [
  {
    name: 'Net income',
    total: 1234.56,
    icon: 'money',
    subCategories: [
      {
        name: 'Salary',
        total: 50.87,
      },
      {
        name: 'Transfers',
        total: 50.87,
      },
    ],
  },
  {
    name: 'Deductions',
    total: 1234.56,
    icon: 'wallet',
    subCategories: [
      {
        name: 'Income tax',
        total: 50.87,
      },
      {
        name: 'National insurance',
        total: 50.87,
      },
      {
        name: 'Pension',
        total: 50.87,
      },
      {
        name: 'Student loans',
        total: 50.87,
      },
    ],
  },
];
