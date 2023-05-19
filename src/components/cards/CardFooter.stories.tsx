import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardFooter } from './CardFooter';

const meta = {
  title: 'Components/Cards',
  component: CardFooter,
} satisfies Meta<typeof CardFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Footer: Story = {
  args: {
    textStart: 'Text Start',
    textEnd: 'Text End',
    button: 'help',
  },
  render: ({ textStart, textEnd, button }) => (
    <CardFooter
      textEnd={textEnd}
      textStart={textStart}
      button={button}
    ></CardFooter>
  ),
};
5;
