import React from "react";
import { motion } from "framer-motion";

// --- Icon Components (for a cleaner look) ---
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.705 4.305a9 9 0 1010.59 10.59M12 21a9 9 0 100-18 9 9 0 000 18z"
    />
  </svg>
);
const ChartBarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);
const FireIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
    />
  </svg>
);
const SparklesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

// --- Data extracted from your PowerPoints ---
const timelineData = [
  {
    icon: <GlobeIcon />,
    ar: {
      title: "السلامة في العصر الرقمي",
      detail:
        "الانتقال بالسلامة من رد الفعل بعد وقوع الحادث، إلى التنبؤ الاستباقي بالخطر ومنعه باستخدام التكنولوجيا الحديثة.",
    },
    en: {
      title: "Safety in the Digital Age",
      detail:
        "Shifting safety from reacting after an incident to proactively predicting and preventing hazards using modern technology.",
    },
  },
  {
    icon: <ChartBarIcon />,
    ar: {
      title: "أدوات الذكاء الاصطناعي",
      detail:
        "استخدام الكاميرات الذكية لرصد المخالفات (مثل عدم ارتداء الخوذة)، والأجهزة القابلة للارتداء لرصد إجهاد وسقوط العمال.",
    },
    en: {
      title: "AI Tools",
      detail:
        "Using smart cameras to detect violations (like missing helmets) and wearables to monitor worker fatigue and falls.",
    },
  },
  {
    icon: <FireIcon />,
    ar: {
      title: "التدريب والمحاكاة الذكية",
      detail:
        "استخدام الواقع الافتراضي (VR) لتدريب العمال على سيناريوهات خطرة (كالحرائق) في بيئة افتراضية آمنة تماماً.",
    },
    en: {
      title: "Smart Training and Simulation",
      detail:
        "Using Virtual Reality (VR) to train workers on hazardous scenarios (like fires) in a completely safe virtual environment.",
    },
  },
  {
    icon: <SparklesIcon />,
    ar: {
      title: "الهدف",
      detail:
        "موقع عمل ذكي خلق بيئة عمل تتفاعل لحظياً مع الأخطار، تقلل الخطأ البشري، وتستخدم البيانات لضمان الوصول إلى صفر إصابات",
    },
    en: {
      title: "The Goal: A Smart Worksite",
      detail:
        "Creating a work environment that reacts instantly to hazards, reduces human error, and uses data to achieve zero injuries.",
    },
  },
];

// The main Timeline component
function Timeline({ language }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto py-8">
      {/* The vertical line in the center */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-slate-300"></div>

      {/* Map over the data to create timeline items */}
      {timelineData.map((item, index) => {
        const content = item[language];
        const isOdd = index % 2 !== 0;

        return (
          <motion.div
            key={index}
            className="relative mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className={`flex items-center ${isOdd ? "flex-row-reverse" : ""}`}
            >
              {/* The content card */}
              <div
                className={`w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-xl ${isOdd ? "text-right" : "text-left"}`}
              >
                <h3 className="font-bold text-xl mb-2 text-slate-800">
                  {content.title}
                </h3>
                <p className="text-gray-600">{content.detail}</p>
              </div>

              {/* The icon in the center */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 w-20 h-20 bg-primary-red rounded-full flex items-center justify-center shadow-lg">
                {item.icon}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Timeline;
