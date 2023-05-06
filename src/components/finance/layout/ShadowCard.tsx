import React from 'react';

interface ShadowCardProps {
  children: React.ReactNode;
}

export const ShadowCard = ({ children }: ShadowCardProps) => {
  return (
    <div className="rounded-xl bg-grey-0/20 p-2 shadow-xl dark:bg-white/5">
      {children}
    </div>
  );
};
