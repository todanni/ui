import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Components/Progress',
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Bar: Story = {
  args: {
    fill: 'blue',
    progress: 45,
  },
  render: ({ fill, progress }) => (
    <ProgressBar fill={fill} progress={progress} />
  ),
};
