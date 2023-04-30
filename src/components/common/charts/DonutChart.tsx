import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export type DonutChartProps = {
  chartInputs: DonutChartData[];
};

export type DonutChartData = {
  label: string;
  amount: number;
  colour: string;
};

const DonutChart = ({ chartInputs }: DonutChartProps) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const labels = chartInputs.map((chartInput) => chartInput.label);
  const amounts = chartInputs.map((chartInput) => chartInput.amount);
  const colours = chartInputs.map((chartInput) => chartInput.colour);

  const data = {
    labels,
    datasets: [{ data: amounts, backgroundColor: colours }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 20,
    },
  };

  return <Doughnut options={options} data={data} />;
};

export { DonutChart };
