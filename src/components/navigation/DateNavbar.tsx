import React from 'react';
import { Card } from '../cards';
import { IconButton } from '../buttons';

export type PlanHeaderProps = {
  title: string;
  subtitle: string;
  previous: string;
  next: string;
  onClick: (op: 'prev' | 'next') => void;
};

export const DateNavbar = ({
  title,
  subtitle,
  previous,
  next,
  onClick,
}: PlanHeaderProps) => {
  return (
    <Card>
      <div className="flex items-center justify-between py-2">
        <IconButton
          fill="default"
          text={previous}
          hide="sm"
          iconStart="arrowLeft"
          onClick={() => onClick('prev')}
        />
        <div className="flex flex-col items-center gap-1">
          <h1 className="whitespace-nowrap text-xl font-bold text-grey-5 dark:text-white sm:text-3xl">
            {title}
          </h1>
          <h2 className="sm:text-md text-sm font-light tracking-tight text-green-3 dark:text-green-4">
            {subtitle}
          </h2>
        </div>
        <IconButton
          fill="default"
          iconEnd="arrowRight"
          hide="sm"
          text={next}
          onClick={() => onClick('next')}
        />
      </div>
    </Card>
  );
};
