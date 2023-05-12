import React from 'react';
import { Icon, IconObject } from '../icons';

export type CardHeaderProps = {
  icon: IconObject;
  title: string;
  button?: IconObject;
  onClick?: () => void;
};

export const CardHeader = ({
  icon,
  title,
  button,
  onClick,
}: CardHeaderProps) => {
  return (
    <div className="flex items-center gap-2">
      <Icon object={icon} size="xs" />
      <h3 className="text-md whitespace-nowrap font-bold text-white sm:text-xl">
        {title}
      </h3>
      {button && (
        <Icon
          object={button}
          size="xs"
          className="ml-auto cursor-pointer hover:text-green-4"
          onClick={onClick}
        />
      )}
    </div>
  );
};
