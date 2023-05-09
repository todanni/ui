import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlanActionsFooter } from './PlanActionsFooter';

const meta = {
  title: 'Finance Planner/Plan/Components/Actions Footer',
  component: PlanActionsFooter,
} satisfies Meta<typeof PlanActionsFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
  render: ({}) => <PlanActionsFooter />,
};
