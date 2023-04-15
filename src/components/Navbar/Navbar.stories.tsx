import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import React from 'react';

const meta = {
  title: 'Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const navLinks = [
  {
    location: 'home',
    name: 'Home',
  },
  {
    location: 'budget',
    name: 'Budget',
  },
  {
    location: 'blog',
    name: 'Blog',
  },
  {
    location: 'about',
    name: 'About',
  },
];

export const Primary: Story = {
  args: {
    links: navLinks,
    currentLocation: 'home',
    logo: <div>Logo</div>,
  },
  render: ({ links, currentLocation }) => (
    <Navbar links={links} currentLocation={currentLocation} logo={undefined} />
  ),
};
