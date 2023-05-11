import React from 'react';
import { NavbarProps } from './Navbar';
import { Title } from '../typography';

const TitleNavbar: React.FC<NavbarProps> = ({
  links,
  currentLocation,
  firstWord,
  secondWord,
  ...props
}) => {
  return (
    <nav className="navbar flex flex-col items-center gap-4 sm:w-full sm:flex-row sm:items-baseline sm:justify-between">
      <div className="flex gap-1 sm:w-1/5">
        <Title intent="gradient" size="large">
          {firstWord}
        </Title>
        <Title size="large">{secondWord}</Title>
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

export { TitleNavbar };
