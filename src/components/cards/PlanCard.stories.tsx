import type { Meta, StoryObj } from '@storybook/react';
import { PlanCard } from './PlanCard';
import { Icon } from '../Icon/Icon';
import React from 'react';

const meta = {
  title: 'Plan Card',
  component: PlanCard,
} satisfies Meta<typeof PlanCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    section: 'income',
  },
  render: ({ section }) => (
    <PlanCard section={section}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon object="money" colour="white" />
          <h2 className="text-xl text-white">Your total {section}</h2>
        </div>
        <p className="text-xl text-white">£1,081.45</p>
      </div>
      <div>
        <div className="flex justify-between">
          <p className=" text-white/80">Cash ISA</p>
          <p className=" text-white/80">£600.83</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Icon object="trendinUp" colour="white" />
            <p className="text-white/80">You are on track!</p>
          </div>
          <p className="text-white/80">6 months left</p>
        </div>
      </div>
    </PlanCard>
  ),
};
