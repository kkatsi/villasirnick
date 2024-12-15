import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { label, ...rest },
  ref
) => {
  return (
    <div>
      <label htmlFor={rest.name} className="text-sm font-medium">
        {label}
      </label>
      <textarea
        ref={ref}
        rows={4}
        className="border border-gray-400 px-3 text-sm py-2 w-full rounded-lg font-light mt-1 text-gray-700 focus:outline-violet-600"
        {...rest}
      ></textarea>
    </div>
  );
};

export default React.forwardRef(TextArea);
