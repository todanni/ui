import type { Meta, StoryObj } from '@storybook/react';
import { FooterCopyright } from './FooterCopyright';
import React from 'react';

const meta = {
  title: 'Footer/Components/Copyright',
  component: FooterCopyright,
} satisfies Meta<typeof FooterCopyright>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    intent: 'primary',
  },
  render: ({ size, intent }) => <FooterCopyright size={size} intent={intent} />,
};
