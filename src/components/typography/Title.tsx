import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const title = cva(' font-extrabold tracking-tight', {
  variants: {
    intent: {
      primary: ['dark:text-white text-grey-5'],
      secondary: ['text-green-4'],
      gradient: [
        'bg-gradient-to-r',
        'from-green-4 via-green-2 to-green-4',
        'bg-clip-text',
        'text-transparent',
      ],
    },
    size: {
      small: ['text-xl'],
      medium: ['text-2xl'],
      large: ['text-4xl'],
      xlarge: ['text-8xl'],
    },
  },
  // when two conditions are met, apply "class" styles
  compoundVariants: [{ intent: 'gradient', size: 'medium', class: '' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof title> {}

const Title: React.FC<TitleProps> = ({ className, intent, size, ...props }) => (
  <h1 className={title({ intent, size, className })} {...props}></h1>
);

export { Title };
