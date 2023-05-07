import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlanHeader } from './PlanHeader';

const meta = {
  title: 'Plan/Header',
  component: PlanHeader,
} satisfies Meta<typeof PlanHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: 'Your plan',
    subtitle: 'April 2023',
    previous: 'March 2023',
    next: 'May 2023',
  },
  render: ({ title, subtitle, previous, next }) => (
    <PlanHeader
      title={title}
      subtitle={subtitle}
      previous={previous}
      next={next}
      onClick={(s) => console.log('Clicked', s)}
    />
  ),
};
