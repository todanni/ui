import React from 'react';
import { Icon } from '~/components/common/icons/Icon';

export type PlanHeaderProps = {
  title: string;
  subtitle: string;
  previous: string;
  next: string;
  onClick: (op: 'prev' | 'next') => void;
};

export const PlanHeader = ({
  title,
  subtitle,
  previous,
  next,
  onClick,
}: PlanHeaderProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-grey-0/20 p-2 shadow-xl dark:bg-white/5">
      <div
        className="flex cursor-pointer items-center gap-2 p-2 "
        onClick={() => onClick}
      >
        <Icon object="arrowLeft" colour="default" size="small" />
        <h3 className="text-xs text-grey-5 hover:text-green-3 dark:text-white sm:text-sm">
          {previous}
        </h3>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-xl font-bold text-grey-5 dark:text-white sm:text-3xl">
          {title}
        </h1>
        <h3 className="sm:text-md text-sm font-light tracking-tight text-green-3 dark:text-green-4">
          {subtitle}
        </h3>
      </div>
      <div
        className="flex cursor-pointer items-center gap-2 p-2 hover:text-green-3"
        onClick={() => onClick}
      >
        <h3 className="text-xs text-grey-5 hover:text-green-3 dark:text-white sm:text-sm">
          {next}
        </h3>
        <Icon object="arrowRight" colour="default" size="small" />
      </div>
    </div>
  );
};
