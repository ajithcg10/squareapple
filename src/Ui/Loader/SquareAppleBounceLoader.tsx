import React from "react";

interface SquareAppleBounceLoaderprops {
  speed?: "slow" | "normal" | "fast";
  className?: string;
  showText?: boolean;
  textColor?: string;
}

const SquareAppleBounceLoader: React.FC<SquareAppleBounceLoaderprops> = ({
  speed = "normal",
  className = "",
  showText = false,
  textColor = "text-slate-600",
}) => {
  const getAnimationDuration = (sp: "slow" | "normal" | "fast") => {
    switch (sp) {
      case "slow":
        return "3s";
      case "fast":
        return "1s";
      default:
        return "2s";
    }
  };

  const duration = getAnimationDuration(speed);

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className="w-24 h-24 relative"
        style={{
          animation: `bounce-custom ${duration} ease-in-out infinite`,
        }}
      >
        <div
          className="w-full h-full rounded-2xl relative overflow-hidden shadow-lg"
          style={{
            background: "#1e3a5f",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-3/5 h-3/5" fill="white">
              <ellipse
                cx="52"
                cy="20"
                rx="8"
                ry="4"
                transform="rotate(25 52 20)"
                opacity="0.9"
              />
              <path
                d="M35 35 C25 35, 20 45, 20 55 C20 70, 25 85, 40 85 L60 85 C75 85, 80 70, 80 55 C80 45, 75 35, 65 35 C60 35, 55 30, 50 30 C45 30, 40 35, 35 35 Z"
                opacity="0.95"
              />
              <circle cx="70" cy="45" r="8" fill="#1e3a5f" />
            </svg>
          </div>
        </div>
      </div>

      {showText && (
        <div
          className={`mt-4 text-base font-medium ${textColor} animate-pulse`}
          style={{ animationDelay: "0.5s" }}
        >
          Loading...
        </div>
      )}

      <style>{`
        @keyframes bounce-custom {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0) scale(1);
          }
          10% {
            transform: translateY(-8px) scale(1.02);
          }
          40% {
            transform: translateY(-12px) scale(1.05);
          }
          60% {
            transform: translateY(-6px) scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};
export default SquareAppleBounceLoader;
