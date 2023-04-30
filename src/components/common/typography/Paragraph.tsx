import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const paragraph = cva('font-normal text-lg', {
  variants: {
    intent: {
      primary: ['dark:text-white/90 text-grey-5/90'],
      secondary: ['text-green-4/90'],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof paragraph> {}

const Paragraph: React.FC<ParagraphProps> = ({
  className,
  intent,
  ...props
}) => <p className={paragraph({ intent, className })} {...props}></p>;

export { Paragraph };
