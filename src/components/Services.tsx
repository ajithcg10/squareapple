import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Data_services } from "../data/Data_services";
import { motion } from "framer-motion";
import ButtonHandle from "../Ui/ButtonHandle";

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 px-4 bg-main min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-main rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#fff]" />
            <span className="text-[#Fff]  font-medium">Our Services</span>
          </div>
          <h2 className="text-5xl text-gradient font-bold  mb-6 leading-tight">
            Crafting Digital
            <span className="text-main "> Excellence</span>
          </h2>
          <p className="text-xl  max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive creative solutions that elevate your brand
            and drive meaningful results across all digital touchpoints.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {Data_services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                },
              }}
              className={`group relative rounded-xl bg-[#043745] p-6  hover:border-cyan-300/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40 overflow-hidden ${
                hoveredService === service.id ? "scale-105 -translate-y-2" : ""
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold  mb-4 group-hover:text-gradient transition-colors">
                {service.title}
              </h3>

              <p className=" mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm ">
                    <div className="w-1.5 h-1.5 bg-gradient-custom  rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 font-medium group-hover:text-gradient transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 backdrop-blur-md bg-[#fff] text-[#000] p-6 rounded-lg transition-all duration-300">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold  mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600">
                Let's discuss how we can help bring your vision to life.
              </p>
            </div>
            <ButtonHandle
              text="Start Your Project"
              onClick={() => {
                const phone = "971525695264"; // No + or spaces
                const message = encodeURIComponent(
                  "Hi, I’m interested in your services."
                );
                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
