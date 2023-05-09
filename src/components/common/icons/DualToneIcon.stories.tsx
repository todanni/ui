import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DualToneIcon } from './DualToneIcon';

const meta = {
  title: 'Components/Icons/Dual Tone',
  component: DualToneIcon,
} satisfies Meta<typeof DualToneIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    object: 'calendar',
    colour: 'default',
  },
  render: ({ size, object, colour }) => (
    <DualToneIcon size={size} colour={colour} object={object} />
  ),
};
