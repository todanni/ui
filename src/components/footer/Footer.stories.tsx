import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import React from 'react';

const meta = {
  title: 'Components/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: ({}) => <Footer />,
};
