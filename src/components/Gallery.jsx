import React from "react";
import ProjectCard from "./ProjectCard";

function Gallery({ projects, language }) {
  return (
    // A 4-column grid with a small gap
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} project={proj} language={language} />
      ))}
    </div>
  );
}

export default Gallery;