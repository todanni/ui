import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const card = cva('text-white text-center rounded-lg', {
  variants: {
    colour: {
      primary: ['bg-green-4', 'rounded-lg'],
      secondary: ['bg-blue-500', 'border-transparent'],
      red: ['bg-gradient-to-b from-green-2 to-green-4'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  // when two conditions are met, apply "class" styles
  compoundVariants: [{ colour: 'red', size: 'medium', class: '' }],
  defaultVariants: {
    colour: 'primary',
    size: 'medium',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

const Card: React.FC<CardProps> = ({ className, colour, size, ...props }) => (
  <div className={card({ colour, size, className })} {...props}></div>
);

export { Card };
