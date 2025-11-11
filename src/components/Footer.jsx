import React from "react";

// The component now receives the 'language' prop
function Footer({ language }) {
  // An object to hold the text for both languages
  const content = {
    ar: "© Developed by the HSE Department | Mostafa Eissa, HSE Coordinator.",
    en: "© Developed by the HSE Department | Mostafa Eissa, HSE Coordinator.",
  };

  return (
    <footer className="text-center py-8 border-t mt-16 bg-white">
      <p className="text-slate-600">
        {/* Display the text based on the current language */}
        {content[language]}
      </p>
    </footer>
  );
}

export default Footer;
