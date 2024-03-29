import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InputHelpText } from './InputHelpText';

const meta = {
  title: 'Components/Inputs',
  component: InputHelpText,
} satisfies Meta<typeof InputHelpText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HelpText: Story = {
  args: {
    intent: 'error',
  },
  render: ({ intent }) => (
    <div className="w-1/2">
      <InputHelpText intent={intent}>Please enter a valid number</InputHelpText>
    </div>
  ),
};
