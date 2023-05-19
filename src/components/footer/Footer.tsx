import React from 'react';
import { FooterCopyright } from './FooterCopyright/FooterCopyright';
import { FooterCredits } from './FooterCredits/FooterCredits';
import { FooterIcons } from './FooterIcons/FooterIcons';
import { FooterLinks } from './FooterLinks/FooterLinks';

const Footer = () => {
  return (
    <footer className="flex w-full flex-col">
      <div className="my-4 flex flex-col gap-4 sm:flex-row sm:justify-between">
        <FooterCredits />
        <FooterLinks />
      </div>
      <div className="flex justify-center  border-t-[1px] border-t-grey-2 pt-4 dark:border-t-grey-5 sm:justify-between">
        <div className="hidden sm:block">
          <FooterCopyright />
        </div>

        <FooterIcons />
      </div>
    </footer>
  );
};

export { Footer };
