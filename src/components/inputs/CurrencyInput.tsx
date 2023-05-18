import React, { ReactNode, forwardRef } from 'react';

export type CurrencyInputProps = {
  label: string;
  mRef?: React.Ref<HTMLInputElement> | null;
};

const CurrencyInput = ({ mRef, label }: CurrencyInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white">{label}</label>
      <input
        className="rounded-lg p-2 text-sm text-gray-800"
        type="number"
        step="0.01"
        ref={mRef}
      />
    </div>
  );
};

export { CurrencyInput };
