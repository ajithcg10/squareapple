import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavItems } from "../data/Nav_data"; // Import navigation items
import { HamburgerButton } from "../Ui/HamburgerButton";
import MobileNavigation from "../Ui/MobileNavigation";
import logoUrl from "@/assets/images/logo.jpeg";

// Data for the navigation items

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
      className="bg-peacockGreen bg-opacity-40 backdrop-blur-lg sticky top-0 z-30 w-full font-medium text-green-950 p-6"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1>
          <img src="/assets/images/logo.jpeg" alt="Logo" className="h-12" />
        </h1>

        <nav>
          <ul className="flex gap-4 space-x-6 md:space-x-4">
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
                  className="text-black hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent text-lg transition-colors duration-300"
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
          <HamburgerButton
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
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
