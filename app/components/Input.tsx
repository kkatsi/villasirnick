import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, ...rest },
  ref
) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={rest.name} className="text-sm font-medium">
        {label}
      </label>
      <input
        ref={ref}
        className="border border-gray-400 px-3 text-sm py-2 w-full rounded-lg font-light mt-1 text-gray-700 focus:border-violet-600 focus:outline-violet-600"
        {...rest}
      />
    </div>
  );
};

export default React.forwardRef<HTMLInputElement, InputProps>(Input);
