import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';
import { iconMap } from './iconMapping';

const meta = {
  title: 'Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    bg: 'none',
    object: 'calendar',
    colour: 'primary',
  },
  render: ({ size, bg, object, colour }) => (
    <Icon size={size} bg={bg} colour={colour} object={object} />
  ),
};
