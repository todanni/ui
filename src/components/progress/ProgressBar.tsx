import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const card = cva('rounded-full text-white', {
  variants: {
    fill: {
      blue: ['bg-blue-500'],
      yellow: ['dark:bg-spend-3'],
      red: [, 'bg-red-700'],
      green: ['bg-green-4'],
    },
    percentage: {
      default: 'p-0.5 text-center text-xs font-medium leading-none text-white',
      none: 'h-2.5',
    },
  },
  defaultVariants: {
    fill: 'blue',
    percentage: 'none',
  },
});

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  progress: number;
  withPercentage: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  fill,
  className,
  progress,
  withPercentage,
  ...props
}) => {
  console.log(withPercentage);

  if (!withPercentage) {
    return (
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={card({ fill, className })}
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
  return (
    <WithPercentage
      progress={progress}
      withPercentage={withPercentage}
      percentage={'default'}
    />
  );
};

export const WithPercentage: React.FC<ProgressBarProps> = ({
  fill,
  percentage,
  className,
  progress,
  withPercentage,
  ...props
}) => (
  <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
    <div
      className={card({ fill, percentage, className })}
      style={{ width: `${progress}%` }}
    >
      {progress}%
    </div>
  </div>
);
