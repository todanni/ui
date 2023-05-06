import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import _ from 'lodash';

const goal = cva('text-base font-medium', {
  variants: {
    category: {
      income: ['text-blue-700 dark:text-white'],
      spending: ['text-spend-4 dark:text-white'],
      debt: ['text-red-700 dark:text-white'],
      savings: ['text-green-4 dark:text-white'],
    },
  },
});

const progress = cva('h-2.5 rounded-full', {
  variants: {
    category: {
      income: ['bg-blue-700'],
      spending: ['bg-spend-4'],
      debt: ['bg-red-700'],
      savings: ['bg-green-4'],
    },
  },
});

export interface PlanGoalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof goal> {
  target: number;
  amount: number;
}

export const PlanGoalProgress = ({
  className,
  category,
  target,
  amount,
  ...props
}: PlanGoalProps) => {
  const calculateProgress = () => {
    return (amount / target) * 100;
  };

  return (
    <>
      <div className="mb-1 flex justify-between">
        <span className={goal({ category, className })} {...props}>
          {_.startCase(category!)}
        </span>
        <span className={goal({ category, className })} {...props}>
          {calculateProgress().toFixed(0)}%
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={progress({ category, className })}
          style={{ width: calculateProgress().toFixed(0) + '%' }}
        />
      </div>
    </>
  );
};
