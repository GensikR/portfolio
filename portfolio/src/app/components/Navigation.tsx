"use client";

import React from "react";

type Props = {
  current: string;
  setPhase: (phase: "landing" | "projects" | "skills" | "contact") => void;
};

const Navigation: React.FC<Props> = ({ current, setPhase }) => {
  const links = ["landing", "projects", "skills", "contact"] as const;

  return (
    <nav className="flex justify-center space-x-8 py-6 text-lg font-medium">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => setPhase(link)}
          className={`relative capitalize transition ${
            current === link ? "text-purple-400" : "text-gray-400 hover:text-white"
          }`}
        >
          {link}
          {current === link && (
            <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-purple-400 rounded-full"></span>
          )}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
