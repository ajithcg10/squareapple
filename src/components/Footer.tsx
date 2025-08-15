import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & Company Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">SA</span>
              </div>
              <span className="text-2xl font-bold">Square Apple</span>
            </motion.div>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with innovative digital solutions and
              creative excellence.
            </p>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">
              Contact
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Us
              </span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:meida.squareapple@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    meida.squareapple@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+971525695264"
                    className="text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    +971 525695264
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Follow
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Us
              </span>
            </h3>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="w-12 h-12 rounded-xl bg-gray-700 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            <p className="text-gray-400 text-sm">
              Connect with us on social media for the latest updates and
              insights.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Square Apple. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
