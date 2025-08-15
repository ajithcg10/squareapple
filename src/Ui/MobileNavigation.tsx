import React from "react";
import { NavItems } from "../data/Nav_data";

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  const handleNavClick = (href: string) => {
    // smooth scroll to section ID (no URL hash added)
    document
      .getElementById(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <button
        aria-label="Close menu backdrop"
        className="fixed inset-0 h-[100vh] bg-black/50 z-40 md:hidden animate-fadeIn"
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-80 shadow-xl z-50 md:hidden backdrop-blur-lg animate-slideIn`}
        style={{ backgroundColor: "rgba(20, 184, 166, 0.95)" }}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-green-950"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <nav>
            <ul className="space-y-6">
              {NavItems.map((item, index) => (
                <li
                  key={item.href}
                  className="opacity-0 translate-x-12 animate-slideInItem"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-3 px-4 rounded-lg text-black hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent text-lg transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
