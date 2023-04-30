import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '~/components/common/icons/Icon';

const section = cva('flex items-center justify-center gap-2 rounded-xl py-2', {
  variants: {
    type: {
      income: ['bg-blue-500', 'dark:bg-blue-600'],
      spending: ['dark:bg-spend-4', 'bg-spend-4'],
      debt: ['bg-red-500', 'dark:bg-red-800'],
      savings: ['bg-green-4', 'dark:bg-green-4'],
      default: ['bg-grey-3', 'dark:bg-white/10'],
    },
  },
});

const label = cva('font-bold dark:text-white', {
  variants: {
    type: {
      income: ['text-blue-500'],
      spending: ['text-spend-4'],
      debt: ['text-red-500'],
      savings: ['text-green-4'],
      default: ['text-grey-3'],
    },
  },
});

export interface PlanSelectProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof section> {
  title: string;
  selected: boolean;
}

export const PlanSelect = ({
  className,
  title,
  type,
  selected,
  ...props
}: PlanSelectProps) => {
  return (
    <div
      className={
        selected ? section({ type, className }) : section({ className })
      }
      {...props}
    >
      {selected && <Icon object={getIcon(type)} size="xs" colour="white" />}
      {!selected && <Icon object={getIcon(type)} size="xs" colour={type} />}
      <p
        className={
          selected ? 'font-bold text-white' : label({ type, className })
        }
      >
        {title}
      </p>
    </div>
  );
};

const getIcon = (icon: string | null | undefined) => {
  switch (icon) {
    case 'income':
      return 'money';
    case 'spending':
      return 'wallet';
    case 'debt':
      return 'card';
    case 'savings':
      return 'piggy';
    default:
      return 'plan';
  }
};
