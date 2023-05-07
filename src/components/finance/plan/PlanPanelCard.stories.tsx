import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlanPanelCard } from './PlanPanelCard';

const meta = {
  title: 'Plan/Panel/Card',
  component: PlanPanelCard,
} satisfies Meta<typeof PlanPanelCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PaymentsSummary: Story = {
  args: {
    children: 'Some contents',
    icon: 'plan',
    title: 'Payments summary',
    footerText: 'Total',
    footerEnd: '£1,000.00',
    endButton: 'plus',
  },
  render: ({ icon, title, footerEnd, footerText, endButton }) => (
    <PlanPanelCard
      icon={icon}
      title={title}
      footerEnd={footerEnd}
      footerText={footerText}
      endButton={endButton}
    >
      <p className="text-md text-center text-white">Some contents</p>
    </PlanPanelCard>
  ),
};
