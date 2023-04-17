import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';
import React from 'react';

const meta = {
  title: 'Section',
  component: Section,
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  args: {
    title: 'Start by creating a budget',
    subtitle: 'Use the budget tool to visualise your obligatory spending',
    description:
      'The first step of taking control of your finances is to understand where your money is going every month. The Finance Planner lets you categorise your spending and provides you with a clear view of your monthly outgoings.',
  },
  render: ({ title, subtitle, description }) => (
    <Section title={title} subtitle={subtitle} description={description} />
  ),
};
