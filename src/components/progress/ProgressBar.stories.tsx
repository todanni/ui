import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithoutPercentage: Story = {
  args: {
    fill: 'blue',
    progress: 45,
    withPercentage: false,
  },
  render: ({ fill, progress, withPercentage }) => (
    <ProgressBar
      fill={fill}
      progress={progress}
      withPercentage={withPercentage}
    />
  ),
};

export const WithPercentage: Story = {
  args: {
    fill: 'green',
    progress: 45,
    withPercentage: true,
  },
  render: ({ fill, progress, withPercentage }) => (
    <ProgressBar
      fill={fill}
      progress={progress}
      withPercentage={withPercentage}
    />
  ),
};
