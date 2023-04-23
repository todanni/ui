import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconObject } from '../Icon/iconMapping';
import { Icon } from '../Icon/Icon';

const button = cva(
  'inline-flex items-center rounded-lg text-center text-sm font-medium text-white',
  {
    variants: {
      colour: {
        savings: ['bg-improbable-2', 'hover:bg-green-600'],
        debt: ['bg-improbable-0', 'hover:bg-red-600'],
        income: ['bg-improbable-3', 'hover:bg-blue-600'],
        spending: ['bg-improbable-1/70', 'hover:bg-spend-6'],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
        large: ['text-md', 'py-4', 'px-6'],
      },
    },
    // when two conditions are met, apply "class" styles
    compoundVariants: [{ size: 'medium', class: '' }],
    defaultVariants: {
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  withIcon?: IconObject;
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  size,
  withIcon,
  colour,
  text,
  ...props
}) => {
  return (
    <button className={button({ colour, size, className })} {...props}>
      {text}
      {withIcon && <Icon object={withIcon} colour="white" />}
    </button>
  );
};

export { Button };
