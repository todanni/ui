import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SummaryCard } from './SummaryCard';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

const meta = {
  title: 'Components/Cards',
  component: SummaryCard,
} satisfies Meta<typeof SummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Summary: Story = {
  args: {
    fill: 'default',
    withFooter: <CardFooter textStart="Footer" button="help" />,
    withHeader: <CardHeader icon="plan" title="Header" button="expand" />,
    children: <h1 className="py-20 text-white">Card with footer and header</h1>,
  },
  render: ({ fill, withFooter, withHeader, children }) => (
    <SummaryCard
      fill={fill}
      withFooter={withFooter}
      withHeader={withHeader}
      className="p-4"
    >
      {children}
    </SummaryCard>
  ),
};
