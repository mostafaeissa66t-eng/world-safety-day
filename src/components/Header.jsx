import React from "react";

// Header الآن يستقبل اللغة ووظيفة التغيير كـ "props" من App
function Header({ language, onLanguageChange }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm w-full">
      <div className="container mx-auto relative flex items-center justify-center h-20 px-4 sm:px-6">
        <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2">
          <img
            src="/logo.png"
            alt="شعار الشركة"
            className="h-10 w-auto sm:h-12"
          />
        </div>

        <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2">
          {/* عند الضغط عليه، يستدعي الوظيفة التي تم تمريرها من App.jsx */}
          <button
            onClick={onLanguageChange}
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded-lg transition-colors"
          >
            {language === "ar" ? "English" : "العربية"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
