import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton } from './IconButton';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    colour: 'savings',
    text: 'Get started',
    icon: 'arrowRight',
  },
  render: ({ size, colour, text, icon }) => (
    <div className="flex w-fit flex-col gap-2">
      <IconButton
        text={text}
        size={size}
        colour={colour}
        icon={icon}
        iconStart={true}
      />
      <IconButton
        text={text}
        size={size}
        colour={colour}
        icon="arrowRight"
        iconStart={false}
      />
    </div>
  ),
};
