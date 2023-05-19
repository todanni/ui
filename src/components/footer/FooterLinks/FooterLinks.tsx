import React from 'react';

const footerLinks = [
  {
    title: 'About',
    links: [
      {
        name: 'About ToDanni',
        link: '/about',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Releases',
        link: '/releases',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Chat on Discord',
        link: 'https://discord.gg/Q7yU6zqBcG',
      },
      {
        name: 'Contributors',
        link: '/blog',
      },
    ],
  },
  {
    title: 'Project',
    links: [
      {
        name: 'View on Github',
        link: 'https://github.com/todanni',
      },

      {
        name: 'Read the dev blog',
        link: 'https://blog.todanni.com/',
      },
    ],
  },
];

const FooterLinks: React.FC = () => {
  return (
    <div className="hidden flex-row justify-around gap-10 sm:flex">
      {footerLinks.map((footerlink) => (
        <div key={footerlink.title} className="flex flex-col">
          <h4 className="font-medium text-grey-5 dark:text-white">
            {footerlink.title}
          </h4>
          <ul className="mt-4 list-none">
            {footerlink.links.map((link, index) => (
              <li
                key={link.name}
                className={`hover:text-secondary cursor-pointer font-light leading-[24px] text-grey-3 dark:text-grey-0 ${
                  index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
                }`}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export { FooterLinks };
