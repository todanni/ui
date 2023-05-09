import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LineChart } from './LineChart';

const meta = {
  title: 'Components/Charts/LineChart',
  component: LineChart,
} satisfies Meta<typeof LineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: ({}) => <LineChart></LineChart>,
};
