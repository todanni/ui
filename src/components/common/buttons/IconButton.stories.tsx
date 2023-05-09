import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton } from './IconButton';

const meta = {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GreenArrowRight: Story = {
  args: {
    text: 'Get started',
    iconEnd: 'arrowRight',
    fill: 'green',
    size: 'md',
  },
  render: ({ text, iconEnd, fill, size }) => (
    <div className="flex w-fit flex-col gap-2">
      <IconButton text={text} iconEnd={iconEnd} fill={fill} size={size} />
    </div>
  ),
};
