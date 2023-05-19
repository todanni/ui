import React from 'react';
import { TitleNavbar } from './TitleNavbar';
import { LogoNavbar } from './LogoNavbar';

type LinkProps = {
  location: string;
  name: string;
};

export interface NavbarProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<HTMLAnchorElement> {
  links: LinkProps[];
  currentLocation: string;
  variant: 'title' | 'logo';
  firstWord?: string;
  secondWord?: string;
}

const Navbar: React.FC<NavbarProps> = ({ variant, ...props }) => {
  if (variant === 'title') {
    return <TitleNavbar variant={'title'} {...props} />;
  }

  return <LogoNavbar variant="logo" {...props} />;
};

export { Navbar };
