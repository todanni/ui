import React from 'react';
import { FooterCopyright } from './FooterCopyright/FooterCopyright';
import { FooterIcons } from './FooterIcons/FooterIcons';

const SimpleFooter: React.FC = () => {
  return (
    <>
      <footer className="flex w-full justify-between border-t-[1px] border-t-grey-5 py-4">
        <FooterCopyright />
        <FooterIcons />
      </footer>
    </>
  );
};

export { SimpleFooter };
