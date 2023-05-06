import React from 'react';

type PlanPanelProps = {
  children: React.ReactNode;
};

export const PlanPanel = ({ children }: PlanPanelProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
  );
};
