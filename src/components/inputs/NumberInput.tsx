import React, { ReactNode, forwardRef } from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id: string;
  label?: string;
  helpText?: string;
};

const NumberInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, helpText, ...props }, ref) => (
    <>
      {label && (
        <label htmlFor={id} className="block text-white">
          {label}
        </label>
      )}
      <input
        className="rounded-lg p-2 text-sm text-gray-800"
        type="number"
        autoComplete="off"
        step="0.01"
        ref={ref}
        id={id}
        {...props}
      />
      {helpText && (
        <p className="p-1 font-light italic text-white/50">{helpText}</p>
      )}
    </>
  )
);

NumberInput.displayName = 'NumberInput';

export { NumberInput };
