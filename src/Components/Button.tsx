import React from 'react';

interface ButtonInterface {
  onClick?: React.MouseEventHandler;
  children: string;
  type?: 'button' | 'submit' | 'reset';
  tooltipText?: string;
}

const Button: React.FC<ButtonInterface> = ({
  onClick,
  children,
  type = 'button',
  tooltipText = 'Click me!',
}) => {
  // Conditional classes based on button type
  const backgroundColorClass =
    type === 'submit'
      ? 'bg-green-500 hover:bg-green-600'
      : 'bg-slate-300 hover:bg-slate-400';
  const focusRingColorClass =
    type === 'submit' ? 'focus:ring-green-500' : 'focus:ring-slate-900';

  return (
    <div className="relative group inline-block">
      <button
        className={`${backgroundColorClass} text-slate-950 font-medium py-2 px-4 rounded-lg shadow ${focusRingColorClass} focus:outline-none focus:ring-2 focus:ring-opacity-50 transition ease-in-out duration-150`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-slate-50 text-gray-950 text-xs rounded shadow-lg w-auto min-w-[160px] max-w-xs break-words">
        {tooltipText}
      </div>
    </div>
  );
};

export default Button;
