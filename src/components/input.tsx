import React, { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
}

const Input: React.FC<InputProps> = ({ icon, ...props }) => {
  return (
    <div className="relative w-full max-w-sm">
      <span className="absolute inset-y-0 left-0 z-5 flex items-center pl-3">
        {icon}
      </span>
      <input
        className="pl-10 pr-4 py-2 outline-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full"
        {...props}
      />
    </div>
  );
};

export default Input;
