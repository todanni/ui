import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const card = cva('rounded-xl  shadow-xl p-4', {
  variants: {
    fill: {
      blue: ['bg-blue-500/90', 'dark:bg-blue-600/40'],
      yellow: ['dark:bg-spend-3', 'bg-spend-5/80'],
      red: [, 'bg-red-500/90', 'dark:bg-red-500/40'],
      green: ['bg-green-500/90', 'dark:bg-green-4/50'],
      default: ['bg-grey-0/20 dark:bg-white/5'],
    },
  },
  defaultVariants: {
    fill: 'default',
  },
});

export interface SummaryCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  withHeader: React.ReactNode;
  withFooter: React.ReactNode;
  children: React.ReactNode;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  fill,
  className,
  withHeader,
  withFooter,
  children,
  ...props
}) => (
  <div className={card({ fill, className })} {...props}>
    {withHeader}
    {children}
    {withFooter}
  </div>
);
