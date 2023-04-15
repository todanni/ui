import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const copyright = cva('text-center font-light', {
  variants: {
    intent: {
      primary: ['dark:text-grey-0 text-grey-5'],
      secondary: ['dark:text-white text-grey-0'],
    },
    size: {
      small: ['text-sm'],
      medium: ['text-md'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

export interface CopyrightProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof copyright> {}

const FooterCopyright: React.FC<CopyrightProps> = ({
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <p className={copyright({ intent, size, className })} {...props}>
      Copyright Ⓒ 2023 ToDanni. All Rights Reserved.
    </p>
  );
};

export { FooterCopyright };
