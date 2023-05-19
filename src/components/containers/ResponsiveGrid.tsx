import React from 'react';

type GridProps = {
  children: React.ReactNode;
};

export const ResponsiveGrid = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
  );
};
