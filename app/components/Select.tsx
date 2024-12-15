import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string }[];
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { label, options, ...rest },
  ref
) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={rest.name}>{label}</label>
      <select ref={ref} {...rest}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
