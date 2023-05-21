import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id: string;
  label?: string;
  helpText?: string;
};

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, helpText, ...props }, ref) => (
    <>
      {label && (
        <label htmlFor={id} className="block text-grey-5 dark:text-white">
          {label}
        </label>
      )}
      <input
        className="rounded-lg p-2 text-sm text-gray-800"
        type="text"
        autoComplete="off"
        ref={ref}
        id={id}
        {...props}
      />
      {helpText && (
        <p className="font-light italic text-white/50">{helpText}</p>
      )}
    </>
  )
);

TextInput.displayName = 'TextInput';
export { TextInput };
