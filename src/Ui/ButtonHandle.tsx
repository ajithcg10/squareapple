import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const ButtonHandle: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-button-gradient
                  text-white px-8 py-4 rounded-xl font-semibold 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg 
                  flex items-center gap-2 whitespace-nowrap ${className}`}
    >
      <span>{text}</span>
      {icon && icon}
    </button>
  );
};

export default ButtonHandle;
