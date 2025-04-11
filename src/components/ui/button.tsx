import React, { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";

/**
 * We extract all the props that motion.button accepts:
 */
interface ButtonProps extends ComponentPropsWithoutRef<typeof motion.button> {
  size?: "xs" | "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  size = "md",
  ...props
}) => {
  return (
    <motion.button
      initial={{ backgroundSize: "0% 100%", color: "#024a70" }}
      whileHover={{ backgroundSize: "100% 100%", color: "#fde9da" }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      whileTap={{ scale: 0.95 }}
      className={`
        text-${size}
        relative
        overflow-hidden
        px-2 lg:px-5 py-2
        font-semibold
        min-h-max
        shadow-lg
        rounded-xl
        border-2 border-sky-900
        bg-gradient-to-r from-sky-900 to-sky-900
        bg-no-repeat bg-left
        bg-[length:0%_100%]
        transition-all duration-300
        text-sky-900
        ${className}
      `}
      {...props}
    />
  );
};

export default Button;
