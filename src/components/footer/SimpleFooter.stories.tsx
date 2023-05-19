import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SimpleFooter } from './SimpleFooter';

const meta = {
  title: 'Components/Footer',
  component: SimpleFooter,
} satisfies Meta<typeof SimpleFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Minimal: Story = {
  args: {},
  render: ({}) => <SimpleFooter />,
};
