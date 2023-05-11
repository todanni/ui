import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const select = cva(
  'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-td-gry-5',
  {
    variants: {},
    defaultVariants: {},
  }
);

type SelectOptions = {
  name: string;
  value: any;
};

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof select> {
  options: SelectOptions[];
}

const Select: React.FC<SelectProps> = ({ className, options, ...props }) => (
  <select className={select({ className })} {...props}>
    {options?.map((opt, index) => (
      <option key={index} value={opt.value}>
        {opt.name}
      </option>
    ))}
  </select>
);

export { Select };
