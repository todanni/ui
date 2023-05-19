import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DateNavbar } from './DateNavbar';

const meta = {
  title: 'Components/Navigation',
  component: DateNavbar,
} satisfies Meta<typeof DateNavbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DateNavBar: Story = {
  args: {
    title: 'Your plan',
    subtitle: 'April 2023',
    previous: 'March 2023',
    next: 'May 2023',
  },
  render: ({ title, subtitle, previous, next }) => (
    <DateNavbar
      title={title}
      subtitle={subtitle}
      previous={previous}
      next={next}
      onClick={(s) => console.log('Clicked', s)}
    />
  ),
};
