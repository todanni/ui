import React from 'react';

export type PanelProps = {
  children: React.ReactNode;
};

export const Panel = ({ children }: PanelProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
  );
};
