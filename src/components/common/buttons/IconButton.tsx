import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconObject } from '../icons/iconMapping';
import { Icon } from '../icons';

const button = cva(
  'inline-flex items-center rounded-lg text-center font-medium whitespace-nowrap',
  {
    variants: {
      fill: {
        blue: ['bg-blue-500', 'dark:bg-blue-600', 'text-white'],
        yellow: ['dark:bg-spend-4/80', 'bg-spend-4/80', 'text-white'],
        red: ['bg-red-500', 'dark:bg-red-800', 'text-white'],
        green: ['bg-green-4', 'dark:bg-green-4', 'text-white'],
        default: ['dark:text-white text-grey-6 '],
      },
      size: {
        xs: ['text-xs', 'p-2', 'gap-1'],
        sm: ['text-sm', 'py-2', 'px-4', 'gap-1'],
        md: ['text-md', 'py-3', 'px-5', 'gap-2'],
      },
      hide: {
        sm: ['invisible sm:visible'],
      },
    },
    defaultVariants: {
      size: 'md',
      fill: 'default',
    },
  }
);

const icon = cva('visible', {
  variants: {
    size: {
      xs: ['h-4 w-4'],
      sm: ['h-6 w-6'],
      md: ['h-6 w-6'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  iconStart?: IconObject;
  iconEnd?: IconObject;
  text: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  size,
  fill,
  text,
  hide,
  iconEnd,
  iconStart,
  ...props
}) => {
  return (
    <button className={button({ fill, size, hide, className })} {...props}>
      {iconStart && <Icon object={iconStart} className={icon({ size })} />}
      {text}
      {iconEnd && <Icon object={iconEnd} className={icon({ size })} />}
    </button>
  );
};
