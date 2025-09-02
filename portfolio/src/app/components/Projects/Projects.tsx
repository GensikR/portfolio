"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectView from "./ProjectView";

const projects = [
  { id: 1, title: "AI Chatbot", summary: "Conversational AI assistant." },
  { id: 2, title: "Space Dashboard", summary: "Mission control interface." },
  { id: 3, title: "E-Commerce Hub", summary: "Modern e-commerce platform." },
];

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  if (selected !== null) {
    const project = projects.find((p) => p.id === selected)!;
    return <ProjectView project={project} goBack={() => setSelected(null)} />;
  }

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-[80vh] flex flex-col">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-slate-100 text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => setSelected(project.id)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="p-6 bg-slate-800 rounded-xl cursor-pointer hover:bg-slate-700 transition shadow-md"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-slate-100">
              {project.title}
            </h3>
            <p className="text-slate-400 mt-2">{project.summary}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
