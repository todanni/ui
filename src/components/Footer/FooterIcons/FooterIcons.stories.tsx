import type { Meta, StoryObj } from '@storybook/react';
import { FooterIcons } from './FooterIcons';
import React from 'react';

const meta = {
  title: 'Footer Icons',
  component: FooterIcons,
} satisfies Meta<typeof FooterIcons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: 'primary',
  },
  render: ({ intent }) => (
    <FooterIcons intent={intent}>Primary button</FooterIcons>
  ),
};
