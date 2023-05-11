import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ContainedIcon } from './ContainedIcon';

const meta = {
  title: 'Components/Icons/Contained',
  component: ContainedIcon,
} satisfies Meta<typeof ContainedIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    object: 'calendar',
    colour: 'default',
  },
  render: ({ size, object, colour }) => (
    <ContainedIcon size={size} colour={colour} object={object} />
  ),
};
