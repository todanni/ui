import React from 'react';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[]; label: string; id: string };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, id, ...props }, ref) => (
    <>
      <label htmlFor={id} className="block text-grey-5 dark:text-white">
        {label}
      </label>
      <select
        ref={ref}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-grey-5"
        {...props}
      >
        {options.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  )
);
Select.displayName = 'Select';

export { Select };
