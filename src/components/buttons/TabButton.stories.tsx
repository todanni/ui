import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TabButton } from './TabButton';

const meta = {
  title: 'Components/Buttons',
  component: TabButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TabButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tab: Story = {
  args: {
    selected: true,
    text: 'Overview',
    fill: 'default',
    icon: 'plan',
  },
  render: ({ selected, fill, icon }) => (
    <div className="grid grid-cols-2 gap-4">
      <TabButton selected={selected} fill={fill} text="Selected" icon={icon} />
      <TabButton
        selected={!selected}
        fill={fill}
        text="NotSelected"
        icon={icon}
      />
    </div>
  ),
};
