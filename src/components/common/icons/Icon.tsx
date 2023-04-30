import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { iconMap, IconObject } from './iconMapping';

const icon = cva('', {
  variants: {
    colour: {
      default: ['dark:text-white', 'text-grey-5'],
      savings: ['dark:text-green-4 ', 'text-green-500/80'],
      debt: ['dark:text-red-800', 'text-red-500/80'],
      income: ['dark:text-blue-700', ' text-blue-500/80'],
      spending: ['dark:text-spend-3', 'text-spend-5/80'],
      white: ['text-white dark:text-white'],
    },
    size: {
      xs: ['h-6 w-6'],
      small: ['h-8 w-8'],
      medium: ['h-10 w-10'],
      large: ['h-16 w-16'],
      xlarge: ['h-20 w-20'],
    },
  },
  defaultVariants: {
    size: 'medium',
    colour: 'default',
  },
});

export interface IconProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof icon> {
  object: IconObject;
}

const Icon: React.FC<IconProps> = ({
  className,
  colour,
  size,
  object,
  ...props
}) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={icon({ className, size, colour })}
    {...props}
  >
    {iconMap[object]}
  </svg>
);

export { Icon };
