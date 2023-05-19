import React from 'react';
import { Icon, IconObject } from '../icons';

export type CardFooterProps = {
  textStart?: string;
  textEnd?: string;
  button?: IconObject;
  onClick?: () => void;
};

export const CardFooter = ({
  textStart,
  textEnd,
  button,
  onClick,
}: CardFooterProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <p className="whitespace-nowrap text-sm font-semibold text-white sm:text-xl">
        {textStart}
      </p>

      <div className="flex gap-2">
        {textEnd && (
          <p className="whitespace-nowrap text-sm font-semibold text-white sm:text-xl">
            {textEnd}
          </p>
        )}
        {button && (
          <Icon
            object={button}
            size="xs"
            className="ml-auto cursor-pointer hover:text-green-4"
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};
