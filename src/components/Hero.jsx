import React from "react";
import { motion } from "framer-motion";

// Hero يستقبل اللغة كـ "prop"
function Hero({ language }) {
  // قمنا بتجهيز النصوص باللغتين داخل هذا الكائن
  const content = {
    ar: {
      title: "اليوم العـالمي للسلامة 2025",
      subtitle:
        "السلامـــــة والصحــــــة المهنيــــة فـــــي العصــــــــــر الرقمـــــــــــي",
      button1: "عرض المشروعات",
      button2: "عرض اهم نقاط العرض",
    },
    en: {
      title: "World Safety Day 2025",
      subtitle: "Occupational Safety and Health in the Digital Age",
      button1: "View Projects",
      button2: "View Presentation",
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      <img
        src="/Desktop.png"
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0 hidden md:block"
      ></img>
      <img
        src="/mobile.png"
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0 block md:hidden"
      ></img>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      <motion.div
        className="relative z-20 text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* بناءً على اللغة الحالية، يتم عرض النص المناسب من الكائن "content" */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          {content[language].title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          {content[language].subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-primary-red hover:bg-scandary-red text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
          >
            {content[language].button1}
          </a>
          <a
            href="#presentation"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
          >
            {content[language].button2}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
