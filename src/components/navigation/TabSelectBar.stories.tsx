import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TabSelectBar } from './TabSelectBar';

const meta = {
  title: 'Components/Navigation',
  component: TabSelectBar,
} satisfies Meta<typeof TabSelectBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TabSelectBars: Story = {
  args: {
    selected: 'Overview',
    tabs: [
      {
        title: 'Overview',
        icon: 'plan',
        fill: 'default',
      },
      {
        title: 'Income',
        icon: 'money',
        fill: 'green',
      },
      {
        title: 'Spending',
        icon: 'wallet',
        fill: 'yellow',
      },
    ],
  },
  render: ({ tabs, selected }) => (
    <TabSelectBar
      tabs={tabs}
      selected={selected}
      onClick={(s) => console.log('clicked', s)}
    />
  ),
};
