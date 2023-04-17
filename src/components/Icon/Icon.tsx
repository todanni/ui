import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { iconMap, IconObject } from './iconMapping';

const icon = cva('', {
  variants: {
    bg: {
      none: [],
      transparent: ['rounded-xl', 'border-white/25'],
      filled: ['rounded-xl'],
    },
    colour: {
      primary: ['text-grey-6 dark:text-white'],
      secondary: ['text-green-4'],
      red: ['text-red-900'],
      white: ['text-white'],
    },
    size: {
      small: ['h-8 w-8 p-1'],
      medium: ['h-10 w-10 p-1'],
      large: ['h-16 w-16 p-2'],
      xlarge: ['h-20 w-20 p-2'],
    },
  },
  compoundVariants: [
    { bg: 'none', size: 'small', class: 'p-0' },
    { bg: 'none', size: 'medium', class: 'p-0' },
    { bg: 'none', size: 'large', class: 'p-0' },
    { bg: 'none', size: 'xlarge', class: 'p-0' },
    {
      bg: 'transparent',
      colour: 'primary',
      class: 'bg-grey-6/25 border-grey-6/75',
    },
    {
      bg: 'transparent',
      colour: 'secondary',
      class: 'bg-green-4/25 border-green-4/25',
    },
    {
      bg: 'transparent',
      colour: 'red',
      class: 'bg-red-800/25 border-red-800/25',
    },
    {
      bg: 'transparent',
      size: 'small',
      class: 'border',
    },
    {
      bg: 'transparent',
      size: 'medium',
      class: 'border',
    },
    {
      bg: 'transparent',
      size: 'large',
      class: 'border-2',
    },
    {
      bg: 'transparent',
      size: 'xlarge',
      class: 'border-2',
    },
  ],
  defaultVariants: {
    bg: 'none',
    size: 'medium',
    colour: 'primary',
  },
});

export interface IconProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof icon> {
  object: IconObject;
}

const Icon: React.FC<IconProps> = ({
  className,
  bg,
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
    className={icon({ className, bg, size, colour })}
    {...props}
  >
    {iconMap[object]}
  </svg>
);

export { Icon };
