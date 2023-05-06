import React from 'react';
import { DonutChart, Icon } from '~/components';

export const PlanPaymentsChart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-3/5 ">
        <DonutChart
          chartInputs={[
            { label: 'Spending', amount: 1234.45, colour: '#8DE8B7' },
            { label: 'Savings', amount: 1234.45, colour: '#44EE93' },
            { label: 'Debt', amount: 1234.45, colour: '#28C772' },
          ]}
        />
      </div>
    </div>
  );
};

//   label: string;
//   amount: number;
//   colour: string;

const ChartLegend = () => {
  return (
    <div className="text-md grid grid-cols-4 gap-1">
      <div className="flex justify-between rounded-xl border-2 border-blue-500 bg-blue-500/50 px-2 py-1 font-semibold">
        <h1 className="text-white">Needs:</h1>
        <h1 className="text-white">50%</h1>
        {/* <Icon size="xs" object="help" /> */}
      </div>
      <div className="flex justify-between rounded-xl border-2 border-spend-3 bg-spend-4/75 px-2 py-1 font-semibold">
        <h1 className="text-white">Wants:</h1>
        <h1 className="text-white">20%</h1>
      </div>
      <div className="flex justify-between rounded-xl border-2 border-red-500 bg-red-500/50 px-2 py-1 font-semibold">
        <h1 className="text-white">Debt:</h1>
        <h1 className="text-white">15%</h1>
      </div>
      <div className="flex justify-between rounded-xl border-2 border-green-3 bg-green-3/40 px-2 py-1 font-semibold">
        <h1 className="text-white">Savings:</h1>
        <h1 className="text-white">15%</h1>
      </div>
    </div>
  );
};
