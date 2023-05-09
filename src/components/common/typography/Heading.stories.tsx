import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';
import React from 'react';

const meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  args: {},
  render: () => (
    <div>
      <Heading size="xlarge" colour="savings">
        Budget section
      </Heading>
      <Heading size="large" colour="savings">
        Start by creating a budget
      </Heading>
      <Heading size="medium" colour="default">
        Use the budget tool to visualise your obligatory spending
      </Heading>
      <Heading size="small" colour="default">
        The first step of taking control of your finances is to understand where
        your money is going every month.
      </Heading>
    </div>
  ),
};
