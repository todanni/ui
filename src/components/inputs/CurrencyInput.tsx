import React, { ReactNode, forwardRef } from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const CurrencyInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => <input ref={ref} {...props} />
);

CurrencyInput.displayName = 'CurrencyInput';

export { CurrencyInput };
