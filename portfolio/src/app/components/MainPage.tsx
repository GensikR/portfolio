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
    <div className="relative h-screen w-full overflow-hidden text-white bg-black flex flex-col">
      {/* Simple Star Background */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Optional subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black" />

      {/* Navigation */}
      <Navigation current={phase} setPhase={setPhase} />

      {/* Main Content */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {phase === "landing" && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full flex items-center justify-center"
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
              className="w-full h-full flex items-center justify-center"
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
              className="w-full h-full flex items-center justify-center"
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
              className="w-full h-full flex items-center justify-center"
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
