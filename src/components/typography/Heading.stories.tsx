import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';
import React from 'react';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  args: {},
  render: () => (
    <div>
      <Heading size="xlarge" intent="accent">
        Budget section
      </Heading>
      <Heading size="large" intent="accent">
        Start by creating a budget
      </Heading>
      <Heading size="medium" intent="default">
        Use the budget tool to visualise your obligatory spending
      </Heading>
      <Heading size="small" intent="default">
        The first step of taking control of your finances is to understand where
        your money is going every month.
      </Heading>
    </div>
  ),
};
