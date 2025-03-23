import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ className, variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md text-sm font-medium focus:outline-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />;
};
