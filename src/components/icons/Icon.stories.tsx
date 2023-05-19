import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';

const meta = {
  title: 'Components/Icons/Default',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    object: 'calendar',
    colour: 'default',
  },
  render: ({ size, object, colour }) => (
    <Icon size={size} colour={colour} object={object} />
  ),
};
