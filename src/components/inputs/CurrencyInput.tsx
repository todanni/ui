import React, { ReactNode, forwardRef } from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  id: string;
};

const CurrencyInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => (
    <>
      <label htmlFor={id} className="mb-1 block text-white">
        {label}
      </label>
      <input
        className="rounded-lg p-2 text-sm text-gray-800"
        type="number"
        autoComplete="transaction-amount"
        step="0.01"
        ref={ref}
        id={id}
        {...props}
      />
    </>
  )
);

CurrencyInput.displayName = 'CurrencyInput';

export { CurrencyInput };
