"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  setPhase: (phase: "projects" | "skills" | "contact") => void;
};

const Landing: React.FC<Props> = ({ setPhase }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 space-y-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Profile Image */}
      <motion.img
        src="/alejandro.png"
        alt="Alejandro Profile"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-slate-300 shadow-xl object-cover"
      />

      {/* Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-slate-100"
      >
        Welcome to my <span className="text-slate-300 italic">CS journey</span>
      </motion.h1>

      {/* Humble Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-slate-400 max-w-2xl leading-relaxed"
      >
        I’m Alejandro, exploring the world of computer science one step at a time.  
        This space is where I share the projects, skills, and ideas I’ve been building along the way.  
        I’m excited about the opportunities to keep growing and to collaborate with others who share the same passion.  
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-6 flex-wrap justify-center"
      >
        <button
          onClick={() => setPhase("projects")}
          className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg shadow-md transition text-slate-100"
        >
          View Projects
        </button>
        <button
          onClick={() => setPhase("skills")}
          className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg shadow-md transition text-slate-100"
        >
          View Skills
        </button>
        <button
          onClick={() => setPhase("contact")}
          className="px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg shadow-md transition text-slate-800"
        >
          Contact Me
        </button>
      </motion.div>
    </div>
  );
};

export default Landing;
