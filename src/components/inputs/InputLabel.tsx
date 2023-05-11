import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const label = cva('block text-sm font-medium', {
  variants: {
    intent: {
      default: ['dark:text-white', 'text-grey-5'],
    },
  },
  defaultVariants: {
    intent: 'default',
  },
});

export interface InputLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof label> {}

const InputLabel: React.FC<InputLabelProps> = ({
  className,
  intent,
  placeholder,
  ...props
}) => <label className={label({ className, intent })} {...props} />;

export { InputLabel };
