import SquareAppleBounceLoader from "./SquareAppleBounceLoader";

// Page Loader Component
interface PageLoaderProps {
  isVisible?: boolean;
  message?: string;
  subMessage?: string;
  loaderSpeed?: "slow" | "normal" | "fast";
  showBackdrop?: boolean;
  textColor?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({
  isVisible = false,
  message = "Loading...",
  subMessage = "",
  loaderSpeed = "normal",
  showBackdrop = true,
  textColor = "text-slate-600",
}) => {
  if (!isVisible) return null;

  const backdropClasses = showBackdrop
    ? "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
    : "";

  return (
    <div
      className={`${backdropClasses} flex h-[100vh] items-center justify-center`}
    >
      <div className="p-8 rounded-2xl  text-center max-w-sm w-full mx-4">
        <SquareAppleBounceLoader
          speed={loaderSpeed}
          showText={false}
          className="mb-4"
        />
        <div className={`text-lg font-medium ${textColor} mb-2`}>{message}</div>
        {subMessage && <p className="text-sm text-slate-500">{subMessage}</p>}
      </div>
    </div>
  );
};
export default PageLoader;
