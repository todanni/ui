import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const heading = cva('', {
  variants: {
    colour: {
      default: ['dark:text-white/80', 'text-grey-5'],
      green: ['dark:text-green-4 ', 'text-green-500/80'],
      red: ['dark:text-red-800', 'text-red-500/80'],
      blue: ['dark:text-blue-700', ' text-blue-500/80'],
      yellow: ['dark:text-spend-3', 'text-spend-5/80'],
      white: ['text-white dark:text-white'],
    },
  },
  defaultVariants: {
    colour: 'default',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {
  size?: 'sm' | 'md' | 'lg';
}

const Heading: React.FC<HeadingProps> = ({
  className,
  colour,
  size,
  ...props
}) => {
  switch (size) {
    case 'lg':
      return <h2 className={heading({ colour, className })} {...props} />;
    case 'md':
      return <h3 className={heading({ colour, className })} {...props} />;
    case 'sm':
      return <h4 className={heading({ colour, className })} {...props} />;
    default:
      return <h2 className={heading({ colour, className })} {...props} />;
  }
};

export { Heading };
