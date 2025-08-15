import React from "react";
import SquareAppleBounceLoader from "./SquareAppleBounceLoader";

interface ButtonLoaderProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  loaderSpeed?: "slow" | "normal" | "fast";
  loadingText?: string;
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  children = "Submit",
  isLoading = false,
  disabled = false,
  onClick,
  className = "",
  loaderSpeed = "fast",
  loadingText = "Processing...",
}) => {
  const baseClasses =
    "flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200";
  const enabledClasses = "bg-blue-600 hover:bg-blue-700 text-white";
  const disabledClasses =
    "bg-blue-600 text-white opacity-75 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${
        isLoading || disabled ? disabledClasses : enabledClasses
      } ${className}`}
    >
      {isLoading ? (
        <>
          <div className="scale-50 -ml-2 -mr-1">
            <SquareAppleBounceLoader speed={loaderSpeed} />
          </div>
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
};
export default ButtonLoader;
