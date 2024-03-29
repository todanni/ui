import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
  'inline-flex items-center justify-center rounded-lg text-center font-medium text-white',
  {
    variants: {
      colour: {
        blue: ['bg-blue-500', 'dark:bg-blue-600'],
        yellow: ['dark:bg-spend-4/80', 'bg-spend-4/80'],
        red: ['bg-red-500', 'dark:bg-red-800'],
        green: ['bg-green-4', 'dark:bg-green-4'],
        default: ['bg-gray-500', 'dark:bg-gray-600'],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
        large: ['text-md', 'py-4', 'px-6'],
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
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  size,
  colour,
  text,
  ...props
}) => {
  return (
    <button className={button({ colour, size, className })} {...props}>
      {text}
    </button>
  );
};

export { Button };
