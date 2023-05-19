import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';
import React from 'react';

const meta = {
  title: 'Components/Typography',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  args: {
    className: 'text-xl font-bold',
  },
  render: ({ className }) => (
    <div>
      <Heading size="lg" colour="default" className={className}>
        Budget section
      </Heading>
      <Heading size="md" colour="green">
        Start by creating a budget
      </Heading>
      <Heading size="sm" colour="yellow">
        Use the budget tool to visualise your obligatory spending
      </Heading>
    </div>
  ),
};
