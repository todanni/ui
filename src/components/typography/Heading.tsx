import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const heading = cva('', {
  variants: {
    intent: {
      accent: ['text-green-4'],
      default: ['dark:text-white', 'text-grey-7'],
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
      intent: 'default',
      size: 'small',
      class: 'dark:text-white/50 text-grey-7/50',
    },
  ],
  defaultVariants: {
    intent: 'default',
    size: 'large',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {}

const Heading: React.FC<HeadingProps> = ({
  className,
  intent,
  size,
  ...props
}) => {
  switch (size) {
    case 'large':
      return (
        <HeadingOne
          className={heading({ intent, size, className })}
          {...props}
        />
      );
    case 'medium':
      return (
        <HeadingTwo
          className={heading({ intent, size, className })}
          {...props}
        />
      );
    case 'small':
      return (
        <HeadingThree
          className={heading({ intent, size, className })}
          {...props}
        />
      );
    default:
      return (
        <HeadingOne
          className={heading({ intent, size, className })}
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

{
  /* <div className="flex flex-col gap-2">
  <Title size="large" intent="primary">
    Start by creating a budget
  </Title>
  <h2 className="text-lg text-white">
    Use the budget tool to visualise your obligatory spending
  </h2>
  <h3 className="text-md text-white/50">
    The first step of taking control of your finances is to understand where
    your money is going every month.
  </h3>
  <h3 className="text-md text-white/50">
    The Finance Planner lets you categorise your spending and provides you with
    a clear view of your monthly outgoings.
  </h3>
</div>; */
}
