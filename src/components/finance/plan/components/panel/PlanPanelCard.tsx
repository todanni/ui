import React from 'react';
import { Card, Icon, IconObject } from '~/components';

interface PlanCardProps {
  children: React.ReactNode;
  icon: IconObject;
  title: string;
  endButton?: IconObject;
  endButtonOnClick?: () => void;
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
  endButton,
}: PlanCardProps) => {
  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 ">
            <Icon object={icon} size="xs" />
            <h1 className="text-md  whitespace-nowrap font-bold text-white sm:text-xl">
              {title}
            </h1>
            {endButton && (
              <Icon
                object={endButton}
                size="xs"
                className="ml-auto cursor-pointer hover:text-green-4"
              />
            )}
          </div>
          <div>{children}</div>
        </div>
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
    </Card>
  );
};
