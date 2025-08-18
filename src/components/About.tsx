import CountUp from "react-countup";
import { motion, Variants } from "framer-motion";
import ButtonHandle from "../Ui/ButtonHandle";
import {
  contentData,
  ctaData,
  headerData,
  statsData,
} from "../data/About_data";

const About = () => {
  const renderContent = (item: any) => {
    if (item.type === "paragraphs") {
      return (
        <div className="space-y-4 h-[60vh] text-gray-600 leading-relaxed">
          {item.content.map((paragraph: any, index: any) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      );
    } else if (item.type === "mission-vision") {
      return (
        <>
          <p className="text-gray-600 leading-relaxed  mb-6">{item.content}</p>
          <h4 className="text-xl font-bold text-gray-900 mb-3">
            {item.vision.title}
          </h4>
          <p className="text-gray-600 leading-relaxed">{item.vision.content}</p>
        </>
      );
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 1.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.0,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.3,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-20 px-4  bg-[#043745] min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-main rounded-full mb-6">
            <headerData.badge.icon className="w-5 h-5 text-light" />
            <span className="text-light font-medium">
              {headerData.badge.text}
            </span>
          </div>
          <h2 className="text-5xl text-gradient font-bold text-ls  mb-6 leading-tight">
            {headerData.title}
            <span className="text-main"> {headerData.highlight}</span>
          </h2>
          <p className="text-xl  max-w-3xl mx-auto leading-relaxed">
            {headerData.description}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center border border-gray-100"
              variants={statsVariants}
              custom={index}
            >
              <div className="inline-flex p-3 rounded-xl bg-main text-light mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {typeof stat.number === "number" ? (
                  <>
                    <CountUp start={0} end={stat.number} /> <span>+</span>
                  </>
                ) : (
                  stat.number
                )}

                {/* {stat.number} */}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {contentData.map((item, index) => (
            <motion.div
              key={item.id}
              className="space-y-6"
              variants={contentVariants}
              custom={index}
            >
              <div className="bg-white rounded-2xl h-[60vh] p-8 shadow-lg border border-gray-100">
                <div className="inline-flex p-4 rounded-xl bg-main text-white mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3
                  className={`text-3xl font-bold text-gray-900 ${
                    item.type === "mission-vision" ? "mb-4" : "mb-6"
                  }`}
                >
                  {item.title}
                </h3>
                {renderContent(item)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {ctaData.title}
              </h3>
              <p className="text-gray-600">{ctaData.description}</p>
            </div>
            <ButtonHandle text={ctaData.buttonText} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
