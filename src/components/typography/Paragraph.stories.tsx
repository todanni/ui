import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';
import React from 'react';

const meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: 'primary',
  },
  render: ({ intent }) => (
    <div>
      <Paragraph intent={intent}>
        A completely FREE tool for tracking your personal finances
      </Paragraph>
    </div>
  ),
};
