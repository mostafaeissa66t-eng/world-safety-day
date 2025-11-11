import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import ProjectPage from "./components/ProjectPage";
import projectsData from "./data/projects.json";
import Footer from "./components/Footer";

// This component contains the content for the homepage
const HomePage = ({ language }) => {
  const projectsTitle =
    language === "ar" ? "أبرز تدريبات المشروعات" : "Featured Training Projects";
  const timelineTitle =
    language === "ar" ? "نقاط العرض التقديمي" : "Presentation Highlights";

  return (
    <>
      <Hero language={language} />

      {/* Wrapper div with top margin to create space */}
      <div className="mt-16">
        <Stats language={language} />
      </div>

      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 mb-12">
          <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-primary-red to-slate-800 text-transparent bg-clip-text">
            {projectsTitle}
          </h2>
        </div>
        <Gallery projects={projectsData} language={language} />
      </section>

      <main className="container mx-auto px-6">
        <section
          id="presentation"
          className="min-h-screen flex flex-col justify-center items-center py-20 px-4"
        >
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary-red to-slate-800 text-transparent bg-clip-text">
              {timelineTitle}
            </h2>
            <Timeline language={language} />
          </div>
        </section>
      </main>
    </>
  );
};

// Main App component that handles routing and language state
function App() {
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ar" ? "en" : "ar"));
  };

  return (
    <BrowserRouter>
      <div className="bg-slate-50 text-slate-800">
        <Header language={language} onLanguageChange={toggleLanguage} />

        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route
            path="/project/:slug"
            element={<ProjectPage language={language} />}
          />
        </Routes>

        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
}

export default App;
