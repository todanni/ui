import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';
import React from 'react';

const meta = {
  title: 'Components/Typography/Title',
  component: Title,
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    intent: 'primary',
  },
  render: ({ size, intent }) => (
    <div>
      <Title size={size} intent={intent}>
        Finance
      </Title>
      <Title size={size} intent="primary">
        Planner
      </Title>
    </div>
  ),
};
