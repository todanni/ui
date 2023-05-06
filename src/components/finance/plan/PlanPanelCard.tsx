import React from 'react';
import { Icon, IconObject } from '~/components';

interface PlanCardProps {
  children: React.ReactNode;
  icon: IconObject;
  title: string;
  footerText?: string;
  footerEnd?: string;
  footer?: React.ReactNode;
}

export const PlanPanelCard = ({
  children,
  icon,
  title,
  footerText,
  footerEnd,
  footer,
}: PlanCardProps) => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl bg-grey-0/20 p-4 shadow-xl dark:bg-white/5">
      <div className="flex items-center gap-2 ">
        <Icon object={icon} size="xs" />
        <h1 className="text-md  whitespace-nowrap font-bold text-white sm:text-xl">
          {title}
        </h1>
      </div>
      <div>{children}</div>
      <div className="flex items-center">
        <div className="w-6" />
        {footerText && (
          <h1 className="text-md whitespace-nowrap font-semibold text-white sm:text-lg">
            {footerText}
          </h1>
        )}
        {footerEnd && (
          <h1 className="text-md ml-auto whitespace-nowrap font-semibold text-white sm:text-lg">
            {footerEnd}
          </h1>
        )}
        {footer}
      </div>
    </div>
  );
};
