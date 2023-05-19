import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  id: string;
  helpText?: string;
};

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, helpText, ...props }, ref) => (
    <>
      <label htmlFor={id} className="block text-grey-5 dark:text-white">
        {label}
      </label>
      <input
        className="rounded-lg p-2 text-sm text-gray-800"
        type="text"
        autoComplete="off"
        ref={ref}
        id={id}
        {...props}
      />
      {helpText && (
        <p className="p-1 font-light italic text-white/50">{helpText}</p>
      )}
      {!helpText && (
        <p className="invisible p-1 font-light italic text-white/50">
          Some text that is invisible
        </p>
      )}
    </>
  )
);

TextInput.displayName = 'TextInput';
export { TextInput };
