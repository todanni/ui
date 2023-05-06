import React from 'react';
import { Icon } from '~/components/common/icons';
import { IconObject } from '~/components/common/icons/iconMapping';

interface PlanCardProps {
  children: React.ReactNode;
  icon: IconObject;
  title: string;
}

export const PlanCard = ({ children, icon, title }: PlanCardProps) => {
  return (
    <div className="rounded-xl bg-grey-0/20 p-2 shadow-xl dark:bg-white/5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Icon object={icon} size="small" className="p-1" />
          <h1 className="text-xl font-bold text-white">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};
