import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlanPanelSelect } from './PlanPanelSelect';

const meta = {
  title: 'Plan/Panel/Select',
  component: PlanPanelSelect,
} satisfies Meta<typeof PlanPanelSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    selected: 'overview',
  },
  render: ({ selected }) => (
    <PlanPanelSelect
      selected={selected}
      onClick={(s) => console.log('clicked', s)}
    />
  ),
};
