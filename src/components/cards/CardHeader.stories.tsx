import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardHeader } from './CardHeader';

const meta = {
  title: 'Components/Cards',
  component: CardHeader,
} satisfies Meta<typeof CardHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    icon: 'plan',
    title: 'Plan',
    button: 'expand',
  },
  render: ({ icon, title, button }) => (
    <CardHeader icon={icon} title={title} button={button}></CardHeader>
  ),
};
