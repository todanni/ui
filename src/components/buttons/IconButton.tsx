import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconObject } from '../Icon/iconMapping';
import { Icon } from '../Icon/Icon';

const button = cva(
  'inline-flex items-center rounded-lg text-center font-medium text-white',
  {
    variants: {
      colour: {
        income: ['bg-blue-500', 'dark:bg-blue-600'],
        spending: ['dark:bg-spend-4/80', 'bg-spend-4/80'],
        debt: ['bg-red-500', 'dark:bg-red-800'],
        savings: ['bg-green-4', 'dark:bg-green-4'],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2', 'gap-1'],
        medium: ['text-base', 'py-2', 'px-4', 'gap-2'],
        large: ['text-md', 'py-4', 'px-6', 'gap-2'],
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  icon: IconObject;
  iconStart?: boolean;
  text: string;
}

const IconButton: React.FC<ButtonProps> = ({
  className,
  size,
  colour,
  text,
  icon,
  iconStart,
  ...props
}) => {
  return (
    <button className={button({ colour, size, className })} {...props}>
      {iconStart && <Icon object={icon} colour="white" className="h-6 w-6" />}
      {text}
      {!iconStart && (
        <Icon object={icon} size={size} colour="white" className="h-6 w-6" />
      )}
    </button>
  );
};

export { IconButton };
