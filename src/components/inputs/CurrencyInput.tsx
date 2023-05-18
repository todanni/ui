import React, { ReactNode, forwardRef } from 'react';
export interface CurrencyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mRef?: React.Ref<HTMLInputElement> | null;
}

const CurrencyInput = ({ mRef, label, ...props }: CurrencyInputProps) => {
  return (
    <input
      className="rounded-lg p-2 text-sm text-gray-800"
      type="number"
      step="0.01"
      {...props}
      ref={mRef}
    />
  );
};

export { CurrencyInput };
