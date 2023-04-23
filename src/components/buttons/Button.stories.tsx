import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

const meta = {
  title: 'Buttons/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    colour: 'savings',
    text: 'Get started',
  },
  render: ({ size, colour, text }) => (
    <Button text={text} size={size} colour={colour} />
  ),
};
