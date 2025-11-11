import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project, language }) {
  // Gracefully handle cases where data might be missing
  if (!project || !project[language]) {
    return null;
  }

  const content = project[language];

  return (
    <motion.div
      className="relative h-96 w-full overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <img
        src={project.mainImage}
        alt={content.title}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

      {/* Content positioned at the bottom */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* The change is here: Using inline style to force the "Tajawal" font */}
        <h3
          className="font-bold text-2xl mb-2"
          style={{ fontFamily: '"Tajawal", sans-serif' }}
        >
          {content.title}
        </h3>

        {/* Description */}
        <p
          className="text-base text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out line-clamp-2"
          style={{ fontFamily: '"Tajawal", sans-serif' }}
        >
          {content.description}
        </p>

        {/* View Details Link */}
        <Link
          to={`/project/${project.slug}`}
          className="font-bold text-md inline-flex items-center gap-2 self-start 
                     text-white hover:underline underline-offset-4 transition-colors duration-300"
          style={{ fontFamily: '"Tajawal", sans-serif' }}
        >
          <span>{content.linkText}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
