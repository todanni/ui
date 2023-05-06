import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '~/components/common/icons/Icon';
import { Heading } from '~/components/common/typography/Heading';

const card = cva('rounded-xl dark:border-2 border-4 p-2', {
  variants: {
    section: {
      income: [
        'border-blue-500',
        'bg-blue-500/90',
        'dark:border-blue-500',
        'dark:bg-blue-600/40',
      ],
      spending: [
        'dark:border-spend-3',
        'dark:bg-spend-3/20',
        'border-spend-5',
        'bg-spend-5/80',
      ],
      debt: [
        'border-red-500',
        'bg-red-500/90',
        'dark:border-red-500',
        'dark:bg-red-500/40',
      ],
      savings: [
        'border-green-500',
        'bg-green-500/90',
        'dark:border-green-3',
        'dark:bg-green-4/50',
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
    VariantProps<typeof card> {
  title: string;
  value: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  section,
  title,
  value,
  ...props
}) => (
  <div className={card({ section, className })} {...props}>
    <div className="flex items-end justify-between">
      <Heading colour="white" size="small" className="">
        {title}
      </Heading>
      <Heading colour="white" size="small">
        {value}
      </Heading>
    </div>
  </div>
);
