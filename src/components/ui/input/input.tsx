import React, { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  textSize?: "xs" | "sm" | "base" | "lg";
  inputSize?: "xs" | "sm" | "md" | "lg";
}

const sizeStyles: Record<NonNullable<InputProps["inputSize"]>, string> = {
  xs: "py-1 text-xs",
  sm: "py-1 text-xs",
  md: "py-1.5 text-sm",
  lg: "py-1.5 text-lg",
};

const Input: React.FC<InputProps> = ({
  icon,
  textSize = "base",
  inputSize = "md" as keyof typeof sizeStyles,
  ...props
}) => {
  const hasIcon = !!icon;

  return (
    <div className={`relative w-full max-w-sm text-${textSize}`}>
      {hasIcon && (
        <span className="absolute inset-y-0 left-0 z-5 flex items-center pl-3">
          {icon}
        </span>
      )}
      <input
        className={`
          ${hasIcon ? "pl-10" : "pl-3"}
          pr-4
          ${sizeStyles[inputSize]}
          outline-1
          rounded-xl
          focus:outline-none
          focus:ring-2
          focus:ring-primary
          w-full
        `}
        {...props}
      />
    </div>
  );
};

export default Input;
