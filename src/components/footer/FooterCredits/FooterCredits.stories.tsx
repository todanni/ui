import type { Meta, StoryObj } from '@storybook/react';
import { FooterCredits } from './FooterCredits';
import React from 'react';

const meta = {
  title: 'Components/Footer',
  component: FooterCredits,
} satisfies Meta<typeof FooterCredits>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Credits: Story = {
  args: {},
  render: ({}) => <FooterCredits></FooterCredits>,
};
