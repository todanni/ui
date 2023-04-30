import React from 'react';
import { Logo } from '../../../logos';

const FooterCredits: React.FC = () => {
  return (
    <div className="flex min-w-[1/4] flex-col justify-start">
      <Logo intent="primary" />
      <p className="text-center font-light text-grey-0 sm:text-left">
        This tool is brought to you by the creators of the ToDanni Tool Suite
      </p>
    </div>
  );
};

export { FooterCredits };
