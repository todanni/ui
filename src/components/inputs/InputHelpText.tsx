import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const span = cva('block text-sm font-base', {
  variants: {
    intent: {
      default: ['dark:text-white/40', 'text-grey-5'],
      error: ['dark:text-red-700', 'text-red-600'],
    },
  },
  defaultVariants: {
    intent: 'default',
  },
});

export interface InputHelpTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof span> {}

const InputHelpText: React.FC<InputHelpTextProps> = ({
  className,
  intent,
  placeholder,
  ...props
}) => <span className={span({ className, intent })} {...props} />;

export { InputHelpText };
