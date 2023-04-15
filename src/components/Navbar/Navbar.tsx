import React from 'react';
import Link from 'next/link';

type LinkProps = {
  location: string;
  name: string;
};

export interface NavlinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<HTMLAnchorElement> {
  links: LinkProps[];
  currentLocation: string;
  logo: React.ReactNode;
}

const Navbar: React.FC<NavlinkProps> = ({
  links,
  currentLocation,
  logo,
  ...props
}) => {
  return (
    <nav className="navbar flex flex-col items-center gap-4 sm:flex-row sm:items-baseline sm:justify-between">
      {logo}
      <ul className="flex list-none items-center justify-end gap-8">
        {links.map((nav) => (
          <Link
            key={nav.location}
            href={location}
            className={
              currentLocation === nav.location
                ? 'text-md text-green-4'
                : 'text-md text-grey-5 dark:text-white'
            }
            {...props}
          >
            {nav.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
