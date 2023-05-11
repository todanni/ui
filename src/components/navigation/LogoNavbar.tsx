import React from 'react';
import { NavbarProps } from './Navbar';
import { Logo } from '../logos';

const LogoNavbar: React.FC<NavbarProps> = ({
  links,
  currentLocation,
  ...props
}) => {
  return (
    <nav className="navbar flex flex-col items-center gap-4 sm:w-full sm:flex-row sm:items-baseline sm:justify-between">
      <div className="w-1/5">
        <Logo />
      </div>
      <ul className="flex list-none items-center justify-end gap-8">
        {links.map((nav) => (
          <li key={nav.location}>
            <a
              href={nav.location}
              className={
                currentLocation === nav.location
                  ? 'text-md text-green-4'
                  : 'text-md text-grey-5 dark:text-white'
              }
              {...props}
            >
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { LogoNavbar };
