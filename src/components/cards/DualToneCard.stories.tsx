import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DualToneCard } from './DualToneCard';

const meta = {
  title: 'Components/Cards',
  component: DualToneCard,
} satisfies Meta<typeof DualToneCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DualTone: Story = {
  args: {
    fill: 'default',
  },
  render: ({ fill }) => {
    return (
      <DualToneCard fill={fill}>
        <div className="h-16 w-32"></div>
      </DualToneCard>
    );
  },
};
