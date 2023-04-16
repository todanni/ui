import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva('text-center rounded-lg', {
  variants: {
    intent: {
      primary: ['bg-green-4', 'text-white'],
      secondary: [
        'dark:bg-white',
        'bg-grey-7',
        'text-white',
        'dark:text-grey-7',
      ],
      gradient: ['bg-gradient-to-b from-green-2 to-green-4'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['text-md', 'py-4', 'px-6'],
    },
  },
  // when two conditions are met, apply "class" styles
  compoundVariants: [{ intent: 'gradient', size: 'medium', class: '' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => (
  <button className={button({ intent, size, className })} {...props}></button>
);

export { Button };
