import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlanPanelSelection } from './PlanPanelSelection';

const meta = {
  title: 'Plan/Panel/Selection',
  component: PlanPanelSelection,
} satisfies Meta<typeof PlanPanelSelection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    selected: true,
    panel: 'overview',
  },
  render: ({ selected, panel }) => (
    <div className="grid grid-cols-2">
      <PlanPanelSelection selected={selected} panel={panel} />
      <PlanPanelSelection selected={!selected} panel={panel} />
    </div>
  ),
};
