import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const heading = cva('', {
  variants: {
    colour: {
      default: ['dark:text-white/80', 'text-grey-5'],
      savings: ['dark:text-green-4 ', 'text-green-500/80'],
      debt: ['dark:text-red-800', 'text-red-500/80'],
      income: ['dark:text-blue-700', ' text-blue-500/80'],
      spending: ['dark:text-spend-3', 'text-spend-5/80'],
      white: ['text-white dark:text-white'],
    },
    size: {
      small: ['text-md'],
      medium: ['text-lg'],
      large: ['text-xl', 'font-bold'],
      xlarge: ['text-2xl', 'font-extrabold'],
    },
  },
  compoundVariants: [
    {
      colour: 'default',
      size: 'small',
      class: 'dark:text-white/50 text-grey-7/50',
    },
  ],
  defaultVariants: {
    colour: 'default',
    size: 'large',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {}

const Heading: React.FC<HeadingProps> = ({
  className,
  colour,
  size,
  ...props
}) => {
  switch (size) {
    case 'large':
      return (
        <HeadingOne
          className={heading({ colour, size, className })}
          {...props}
        />
      );
    case 'medium':
      return (
        <HeadingTwo
          className={heading({ colour, size, className })}
          {...props}
        />
      );
    case 'small':
      return (
        <HeadingThree
          className={heading({ colour, size, className })}
          {...props}
        />
      );
    default:
      return (
        <HeadingOne
          className={heading({ colour, size, className })}
          {...props}
        />
      );
  }
};

const HeadingOne: React.FC<HeadingProps> = ({ ...props }) => {
  return <h1 {...props}></h1>;
};

const HeadingTwo: React.FC<HeadingProps> = ({ ...props }) => {
  return <h2 {...props}></h2>;
};

const HeadingThree: React.FC<HeadingProps> = ({ ...props }) => {
  return <h3 {...props}></h3>;
};

export { Heading };
