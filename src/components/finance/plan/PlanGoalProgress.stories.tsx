import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlanGoalProgress } from './PlanGoalProgress';

const meta = {
  title: 'Plan/Goals/Progress',
  component: PlanGoalProgress,
} satisfies Meta<typeof PlanGoalProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    target: 100,
    amount: 50,
    displayMessage: true,
    category: 'example',
    text: 'Example: Spend less than $100 on shopping',
  },
  render: ({ target, amount, displayMessage, category, text }) => (
    <PlanGoalProgress
      target={target}
      amount={amount}
      displayMessage={displayMessage}
      category={category}
      text={text}
    />
  ),
};
