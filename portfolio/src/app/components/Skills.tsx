"use client";

import React from "react";

const skills = {
  Frontend: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
  Backend: ["Node.js", "Express", "PostgreSQL"],
  Tools: ["Git", "Docker", "Figma"],
};

const Skills: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-[80vh] flex flex-col">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 text-center mb-12">
        Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition shadow-md cursor-default"
          >
            <h3 className="text-2xl md:text-2xl font-semibold text-slate-100 mb-4">
              {category}
            </h3>
            <ul className="space-y-2 text-slate-400">
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
