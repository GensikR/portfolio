// Projects.tsx
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
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project.id)}
            className="p-6 bg-white/10 rounded-xl cursor-pointer hover:bg-white/20 transition"
          >
            <h3 className="text-xl font-semibold text-purple-300">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2">{project.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
