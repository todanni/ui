import type { Meta, StoryObj } from '@storybook/react';
import { PlanSelect } from './PlanSelect';
import React from 'react';

const meta = {
  title: 'Section/PLanSelect',
  component: PlanSelect,
} satisfies Meta<typeof PlanSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  args: {
    title: 'Income',
    selected: false,
    type: 'income',
  },
  render: ({ title, selected, type }) => (
    <PlanSelect title={title} type={type} selected={selected} />
  ),
};
