import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

const meta = {
  title: 'Components/Cards/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fill: 'default',
  },
  render: ({ fill }) => (
    <Card fill={fill}>
      <div className="h-16 w-32"></div>
    </Card>
  ),
};
