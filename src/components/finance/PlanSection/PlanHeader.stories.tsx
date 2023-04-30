import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PlanHeader } from './PlanHeader';

const meta = {
  title: 'Navigation/Date Period',
  component: PlanHeader,
} satisfies Meta<typeof PlanHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: () => <PlanHeader />,
};
