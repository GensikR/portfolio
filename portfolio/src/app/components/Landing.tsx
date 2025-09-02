"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  setPhase: (phase: "projects" | "skills" | "contact") => void;
};

const Landing: React.FC<Props> = ({ setPhase }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold mb-6"
      >
        Hello, I’m <span className="text-purple-400">Gensik Rubio</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-300 max-w-xl mb-10"
      >
        Welcome to my digital space. I’m a creative developer passionate about
        building elegant solutions with modern technologies.
      </motion.p>

      <div className="flex gap-6">
        <button
          onClick={() => setPhase("projects")}
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg transition"
        >
          View Projects
        </button>
        <button
          onClick={() => setPhase("skills")}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg transition"
        >
          View Skills
        </button>
        <button
          onClick={() => setPhase("contact")}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Landing;
