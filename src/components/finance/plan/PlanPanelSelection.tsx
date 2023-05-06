import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '~/components';
import _ from 'lodash';

const section = cva(
  'flex items-center justify-center gap-2 rounded-xl py-2 cursor-pointer',
  {
    variants: {
      panel: {
        overview: ['bg-grey-3', 'dark:bg-white/10', 'shadow-2xl'],
        income: ['bg-blue-500', 'dark:bg-blue-600', 'shadow-2xl'],
        spending: ['dark:bg-spend-4', 'bg-spend-4', 'shadow-2xl'],
        debt: ['bg-red-500', 'dark:bg-red-700', 'shadow-2xl'],
        savings: ['bg-green-4', 'dark:bg-green-4', 'shadow-2xl'],
      },
    },
  }
);

const label = cva('font-bold dark:text-white hidden md:block', {
  variants: {
    panel: {
      overview: ['text-grey-3'],
      income: ['text-blue-500'],
      spending: ['text-spend-4'],
      debt: ['text-red-500'],
      savings: ['text-green-4'],
    },
  },
});

export interface PlanSelectProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof section> {
  selected: boolean;
}

export const PlanPanelSelection = ({
  className,
  panel,
  selected,
  ...props
}: PlanSelectProps) => {
  return (
    <div
      className={
        selected ? section({ panel, className }) : section({ className })
      }
      {...props}
    >
      {getIcon(panel!, selected)}
      <p
        className={
          selected
            ? 'hidden font-bold text-white md:block'
            : label({ panel, className })
        }
      >
        {_.startCase(panel!)}
      </p>
    </div>
  );
};

const getIcon = (panel: string, selected: boolean) => {
  switch (panel) {
    case 'overview':
      return (
        <Icon object="plan" size="xs" colour={selected ? 'white' : 'default'} />
      );
    case 'income':
      return (
        <Icon object="money" size="xs" colour={selected ? 'white' : 'income'} />
      );
    case 'spending':
      return (
        <Icon
          object="wallet"
          size="xs"
          colour={selected ? 'white' : 'spending'}
        />
      );
    case 'debt':
      return (
        <Icon object="card" size="xs" colour={selected ? 'white' : 'debt'} />
      );
    case 'savings':
      return (
        <Icon
          object="piggy"
          size="xs"
          colour={selected ? 'white' : 'savings'}
        />
      );
    default:
      return (
        <Icon
          object="money"
          size="xs"
          colour={selected ? 'white' : 'default'}
        />
      );
  }
};
