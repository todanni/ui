import React from 'react';
import { DonutChart } from '~/components';
import { PlanPanelCard } from '../plan/panels/PlanPanelCard';

export type PlanPaymentsChartProps = {
  payments: {
    label: string;
    amount: number;
    colour: string;
  }[];
  percentageSplit: string;
};

export const PlanPaymentsChart = ({
  payments,
  percentageSplit,
}: PlanPaymentsChartProps) => {
  return (
    <PlanPanelCard
      title="Payments breakdown"
      icon="plan"
      footerText="Wants/Needs/Savings"
      footerEnd={percentageSplit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-3/5 ">
          <DonutChart chartInputs={payments} />
        </div>
      </div>
    </PlanPanelCard>
  );
};
