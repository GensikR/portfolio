// ProjectView.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  summary: string;
};

type Props = {
  project: Project;
  goBack: () => void;
};

const ProjectView: React.FC<Props> = ({ project, goBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-12 max-w-4xl mx-auto"
    >
      <button
        onClick={goBack}
        className="mb-6 text-purple-400 hover:text-purple-200"
      >
        ← Back to Projects
      </button>

      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-gray-300 mb-8">{project.summary}</p>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold text-purple-300 mb-2">
            Overview
          </h3>
          <p className="text-gray-400">
            This is where you can describe the project in detail, its purpose,
            and main features.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-purple-300 mb-2">
            Requirements
          </h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>React / Next.js</li>
            <li>Tailwind CSS</li>
            <li>API integrations</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-purple-300 mb-2">Demo</h3>
          <p className="text-gray-400">
            A demo video, screenshots, or live preview link can go here.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectView;
