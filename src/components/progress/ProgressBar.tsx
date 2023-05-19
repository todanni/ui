import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const card = cva('h-2.5 rounded-full', {
  variants: {
    fill: {
      blue: ['bg-blue-500'],
      yellow: ['dark:bg-spend-3'],
      red: [, 'bg-red-700'],
      green: ['bg-green-4'],
    },
  },
  defaultVariants: {
    fill: 'blue',
  },
});

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  fill,
  className,
  progress,
  ...props
}) => (
  <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
    <div
      className={card({ fill, className })}
      style={{ width: `${progress}%` }}
    />
  </div>
);
5;
