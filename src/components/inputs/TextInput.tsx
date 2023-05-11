import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { UseFormRegister } from 'react-hook-form';

const input = cva('block w-full rounded-lg border text-sm p-2.5', {
  variants: {
    intent: {
      default: [
        'dark:border-grey-4 dark:text-grey-5 ',
        'border-gray-100 text-grey-5',
      ],
    },
  },
  defaultVariants: {
    intent: 'default',
  },
});

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {
  placeholder?: string;
  register: UseFormRegister<any>;
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({
  className,
  intent,
  placeholder,
  register,
  name,
  ...props
}) => (
  <input
    type="text"
    placeholder={placeholder}
    className={input({ className, intent })}
    {...props}
    {...register(name)}
  />
);

export { TextInput };
