"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Landing from "./Landing";
import Projects from "./Projects/Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Navigation from "./Navigation";

type Phase = "landing" | "projects" | "skills" | "contact";

const MainPage: React.FC = () => {
  const [phase, setPhase] = useState<Phase>("landing");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      <Navigation current={phase} setPhase={setPhase} />

      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          {phase === "landing" && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              <Landing setPhase={setPhase} />
            </motion.div>
          )}

          {phase === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
            >
              <Projects />
            </motion.div>
          )}

          {phase === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <Skills />
            </motion.div>
          )}

          {phase === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.6 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MainPage;
