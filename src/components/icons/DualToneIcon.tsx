import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { iconMap, IconObject } from './iconMapping';

const icon = cva('rounded-xl text-white', {
  variants: {
    colour: {
      default: ['dark:bg-grey-5 dark:border-grey-4'],
      green: [
        'dark:bg-green-4/25 dark:border-green-4/25',
        'border-green-500 bg-green-500/80',
      ],
      red: [
        'dark:bg-red-800/25 dark:border-red-800/25',
        'border-red-500 bg-red-500/80',
      ],
      blue: [
        'dark:border-blue-500/20 dark:bg-blue-700/30',
        'border-blue-500 bg-blue-500/80',
      ],
      yellow: [
        'dark:border-spend-3/75 dark:bg-spend-3/20',
        'border-spend-5 bg-spend-5/80',
      ],
    },
    size: {
      small: ['h-8 w-8 p-1 border-2'],
      medium: ['h-10 w-10 p-1 border-2'],
      large: ['h-16 w-16 p-1 border-2'],
      xlarge: ['h-20 w-20 p-2 border-2'],
    },
  },
  defaultVariants: {
    size: 'medium',
    colour: 'default',
  },
});

export interface DualToneIconProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof icon> {
  object: IconObject;
}

const DualToneIcon: React.FC<DualToneIconProps> = ({
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

export { DualToneIcon };
