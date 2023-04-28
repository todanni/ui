import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { iconMap, IconObject } from './iconMapping';

const icon = cva('text-white rounded-xl', {
  variants: {
    colour: {
      default: ['dark:bg-grey-5', 'bg-grey-5'],
      savings: ['dark:bg-green-5 ', 'bg-green-500/80'],
      debt: ['dark:bg-red-900', 'bg-red-500/80'],
      income: ['dark:bg-blue-800', ' bg-blue-500/80'],
      spending: ['dark:bg-spend-4', 'bg-spend-4/80'],
    },
    size: {
      xs: ['h-6 w-6 p-1'],
      small: ['h-8 w-8 p-1'],
      medium: ['h-10 w-10 p-1'],
      large: ['h-16 w-16 p-1'],
      xlarge: ['h-20 w-20 p-2'],
    },
  },
  defaultVariants: {
    size: 'medium',
    colour: 'default',
  },
});

export interface ContainedIconProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof icon> {
  object: IconObject;
}

const ContainedIcon: React.FC<ContainedIconProps> = ({
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

export { ContainedIcon };
