import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

const meta = {
  title: 'Components/Buttons',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    colour: 'green',
    text: 'Get started',
  },
  render: ({ size, colour, text }) => (
    <Button text={text} size={size} colour={colour} />
  ),
};
