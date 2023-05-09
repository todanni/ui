import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const card = cva('rounded-xl  shadow-xl', {
  variants: {
    fill: {
      blue: ['bg-blue-500/90', 'dark:bg-blue-600/40'],
      yellow: [, 'dark:bg-spend-3/20', 'bg-spend-5/80'],
      red: [, 'bg-red-500/90', 'dark:bg-red-500/40'],
      green: ['bg-green-500/90', 'dark:bg-green-4/50'],
      default: ['bg-grey-0/20 dark:bg-white/5'],
    },
  },
  defaultVariants: {
    fill: 'default',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

export const Card: React.FC<CardProps> = ({ fill, className, ...props }) => (
  <div className={card({ fill, className })} {...props}></div>
);
