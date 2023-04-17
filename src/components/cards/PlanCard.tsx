import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const card = cva('rounded-xl dark:border-2 border-4 p-4', {
  variants: {
    section: {
      income: [
        'border-blue-500',
        'bg-blue-500/90',
        'dark:border-blue-700/60',
        'dark:bg-blue-500/20',
      ],
      spending: [
        'border-spend-4',
        'bg-spend-4/90',
        'dark:border-spend-3',
        'dark:bg-spend-3/20',
      ],
      debt: [
        'border-red-500',
        'bg-red-500/90',
        'dark:border-red-600/60',
        'dark:bg-red-600/20',
      ],
      savings: [
        'border-green-500',
        'bg-green-500/90',
        'dark:border-green-2/60',
        'dark:bg-green-5/50',
      ],
      default: ['border-white/5', 'bg-white/10'],
    },
  },
  defaultVariants: {
    section: 'default',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

const PlanCard: React.FC<CardProps> = ({ className, section, ...props }) => (
  <div className={card({ section, className })} {...props} />
);

export { PlanCard };
