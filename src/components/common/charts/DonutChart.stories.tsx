import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DonutChart } from './DonutChart';

const meta = {
  title: 'Charts/DonutChart',
  component: DonutChart,
} satisfies Meta<typeof DonutChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    chartInputs: [
      {
        label: 'Debt',
        amount: 1569.07,
        colour: '#a5f3fc',
      },
      {
        label: 'Savings',
        amount: 400,
        colour: '#67e8f9',
      },
      {
        label: 'Bills',
        amount: 1529.35,
        colour: '#22d3ee',
      },
      {
        label: 'Living costs',
        amount: 195.53,
        colour: '#06b6d4',
      },
      {
        label: 'Discretionary',
        amount: 413.53,
        colour: '#0891b2',
      },
    ],
  },
  render: ({ chartInputs }) => (
    <DonutChart chartInputs={chartInputs}></DonutChart>
  ),
};
