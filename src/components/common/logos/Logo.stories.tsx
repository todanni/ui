import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';
import React from 'react';

const meta = {
  title: 'Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: 'primary',
  },
  render: ({ intent }) => <Logo intent={intent}></Logo>,
};
