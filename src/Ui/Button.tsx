import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 text-lg font-semibold rounded-full transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
