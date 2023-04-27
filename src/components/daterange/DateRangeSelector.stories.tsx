import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DateRangeSelector } from './DateRangeSelector';

const meta = {
  title: 'date/Date Range Selector',
  component: DateRangeSelector,
} satisfies Meta<typeof DateRangeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: ({}) => (
    <div className="">
      <DateRangeSelector />
    </div>
  ),
};
