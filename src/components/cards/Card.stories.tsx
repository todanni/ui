import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

const meta = {
  title: 'Components/Cards',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyCard: Story = {
  args: {
    fill: 'default',
    children: <div className="h-20"></div>,
  },
  render: ({ fill, children }) => <Card fill={fill}>{children}</Card>,
};
