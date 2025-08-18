import React from "react";
import { motion } from "framer-motion";
import TeamCollaborationSlides from "./TeamCollaborationSlides";

const Home: React.FC = () => {
  return (
    <motion.section
      id="/"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-main  py-16"
    >
      <div className="container  mx-auto px-6 text-center">
        {/* Home Section Title */}
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl text-gradient font-extrabold mb-4"
        >
          Welcome to Our <span className="text-main">Digital World</span>
        </motion.h2>
        {/* Home Section Description */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          We provide innovative digital marketing and IT solutions tailored to
          help your business grow. Our experts are here to turn your ideas into
          successful digital strategies.
        </motion.p>
        <TeamCollaborationSlides />
      </div>
    </motion.section>
  );
};

export default Home;
