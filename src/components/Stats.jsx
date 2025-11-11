import React, { useEffect, useState } from "react";
import { useInView } from "framer-motion";

// --- Icon Components ---
const ProjectIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-primary-red"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const TraineeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-primary-red"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

// A reusable component for a single animated stat
const AnimatedStat = ({ value, label, icon }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const end = value;
      const stepTime = Math.max(1, Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCurrentValue(start);
        if (start >= end) {
          setCurrentValue(end);
          clearInterval(timer);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-8">
      <div className="mb-4">{icon}</div>
      <p className="text-5xl font-extrabold text-brand-dark">
        +{currentValue.toLocaleString()}
      </p>
      <p className="text-lg text-slate-600 mt-2 font-medium">{label}</p>
    </div>
  );
};

// The main Stats section component
function Stats({ language }) {
  const content = {
    ar: { projects: "مشروع", trainees: "متدرب" },
    en: { projects: "Projects", trainees: "Trainees" },
  };

  return (
    <section className="bg-brand-light relative shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
      {/* The line separator class has been removed from here */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center divide-y sm:divide-y-0 divide-gray-300">
        <div className="w-full sm:w-auto px-12">
          <AnimatedStat
            value={18}
            label={content[language].projects}
            icon={<ProjectIcon />}
          />
        </div>
        <div className="w-full sm:w-auto px-12">
          <AnimatedStat
            value={406}
            label={content[language].trainees}
            icon={<TraineeIcon />}
          />
        </div>
      </div>
    </section>
  );
}

export default Stats;
