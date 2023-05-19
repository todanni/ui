import type { Meta, StoryObj } from '@storybook/react';
import { FooterLinks } from './FooterLinks';
import React from 'react';

const meta = {
  title: 'Components/Footer/Elements',
  component: FooterLinks,
} satisfies Meta<typeof FooterLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Links: Story = {
  args: {},
  render: ({}) => <FooterLinks />,
};
