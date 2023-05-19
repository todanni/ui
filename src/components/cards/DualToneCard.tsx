import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const card = cva('rounded-xl dark:border-2 border-4 p-2', {
  variants: {
    fill: {
      blue: [
        'border-blue-500',
        'bg-blue-500/90',
        'dark:border-blue-500',
        'dark:bg-blue-600/40',
      ],
      yellow: [
        'dark:border-spend-3',
        'dark:bg-spend-3/20',
        'border-spend-5',
        'bg-spend-5/80',
      ],
      red: [
        'border-red-500',
        'bg-red-500/90',
        'dark:border-red-500',
        'dark:bg-red-500/40',
      ],
      green: [
        'border-green-500',
        'bg-green-500/90',
        'dark:border-green-3',
        'dark:bg-green-4/50',
      ],
      default: ['border-white/5', 'bg-white/10'],
    },
  },
});

export interface DualToneCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

export const DualToneCard: React.FC<DualToneCardProps> = ({
  className,
  fill,
  ...props
}) => <div className={card({ fill, className })} {...props}></div>;
