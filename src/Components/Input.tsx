import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface InputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  register,
  placeholder,
  type = 'text',
  disabled = false,
}) => {
  return (
    <input
      {...register(name)}
      placeholder={placeholder}
      type={type}
      className="w-full max-w-xs md:max-w-sm lg:w-96 border border-slate-300 rounded-full h-10 px-5 py-2 my-2"
      disabled={disabled}
    />
  );
};

export default Input;
