"use client";

import React from "react";

const skills = {
  Frontend: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
  Backend: ["Node.js", "Express", "PostgreSQL"],
  Tools: ["Git", "Docker", "Figma"],
};

const Skills: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition"
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-4">
              {category}
            </h3>
            <ul className="space-y-2 text-gray-300">
              {items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
