import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavItems } from "../data/Nav_data";
import { HamburgerButton } from "../Ui/HamburgerButton";
import MobileNavigation from "../Ui/MobileNavigation";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 sticky top-0 z-30 w-full font-medium p-6"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1>
          <img src="images/logo.png" alt="Logo" className="h-12" />
        </h1>

        <nav className="flex items-center">
          {/* Desktop menu - hidden on <768px */}
          <ul className="hidden md:flex gap-6">
            {NavItems.map((item) => (
              <motion.li
                key={item.href}
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById(item.href)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-[#71cac7] hover:text-gradient text-lg transition-colors duration-300"
                >
                  {item.label}
                </button>

                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-1 bg-peacockGreen transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.li>
            ))}
          </ul>

          {/* Hamburger button - only visible on <768px */}
          <div className="md:hidden">
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
          />
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
