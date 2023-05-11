import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import React from 'react';

const meta = {
  title: 'Components/Navigation',
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

export const LogoNavbar: Story = {
  args: {
    links: navLinks,
    currentLocation: 'home',
    variant: 'logo',
  },
  render: ({ links, currentLocation, variant }) => (
    <Navbar links={links} currentLocation={currentLocation} variant={variant} />
  ),
};

export const TitleNavbar: Story = {
  args: {
    links: navLinks,
    currentLocation: 'home',
    variant: 'title',
    firstWord: 'Finance',
    secondWord: 'Planner',
  },
  render: ({ links, currentLocation, variant, firstWord, secondWord }) => (
    <Navbar
      links={links}
      currentLocation={currentLocation}
      variant={variant}
      firstWord={firstWord}
      secondWord={secondWord}
    />
  ),
};
