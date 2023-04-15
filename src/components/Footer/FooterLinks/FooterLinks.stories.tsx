import type { Meta, StoryObj } from '@storybook/react';
import { FooterLinks } from './FooterLinks';
import React from 'react';

const meta = {
  title: 'Footer Links',
  component: FooterLinks,
} satisfies Meta<typeof FooterLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: ({}) => <FooterLinks />,
};
