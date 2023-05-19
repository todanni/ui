import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const LineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Savings',
        data: [400.0, 970.09, 1608.61, 2298.72, 2840.55, 5135.92],
        borderColor: '#4ade80',
        backgroundColor: '#4ade80',
      },
      {
        label: 'Debt',
        data: [3767.68, 3236.6, 2272.58, 1703.83, 827.26, 0.0],
        borderColor: '#dc2626',
        backgroundColor: '#dc2626',
      },
    ],
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

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export { LineChart };
