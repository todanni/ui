import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlanGoalsCard } from './PlanGoalsCard';

const meta = {
  title: 'Plan/Goals/Cards',
  component: PlanGoalsCard,
} satisfies Meta<typeof PlanGoalsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoGoals: Story = {
  args: {
    title: 'Goals',
    noGoalsText: 'Example: Spend less than £100 on shopping',
    progressColour: 'savings',
    loading: false,
  },
  render: ({ title, noGoalsText, progressColour, loading }) => (
    <PlanGoalsCard
      title={title}
      noGoalsText={noGoalsText}
      progressColour={progressColour}
      loading={loading}
    />
  ),
};

export const WithGoals: Story = {
  args: {
    goals: [
      {
        name: 'Spend less than £100 on shopping',
        target: 100,
        amount: 50,
      },
      {
        name: 'Spend less than £250 on groceries',
        target: 200,
        amount: 199,
      },
      {
        name: 'Pay 1500£ towards personal loan',
        target: 1500,
        amount: 757,
      },
    ],
    title: 'Goals',
    noGoalsText: "You haven't set any goals yet.",
    progressColour: 'income',
    loading: false,
  },
  render: ({ goals, title, noGoalsText, progressColour, loading }) => (
    <PlanGoalsCard
      goals={goals}
      title={title}
      noGoalsText={noGoalsText}
      progressColour={progressColour}
      loading={loading}
    />
  ),
};
