"use client";

import React from "react";

type Phase = "landing" | "projects" | "skills" | "contact";

type Props = {
  current: Phase;
  setPhase: (phase: Phase) => void;
};

const Navigation: React.FC<Props> = ({ current, setPhase }) => {
  const links: Phase[] = ["landing", "projects", "skills", "contact"];

  return (
    <nav className="flex justify-center gap-6 md:gap-10 py-4 bg-black/20 backdrop-blur-sm rounded-b-xl shadow-sm z-20 relative">
      {links.map((link) => {
        const isActive = current === link;

        return (
          <button
            key={link}
            onClick={() => setPhase(link)}
            className={`
              relative capitalize px-4 py-2 rounded-full text-sm md:text-base font-medium
              transition-all duration-300
              ${
                isActive
                  ? "text-teal-300 font-semibold"
                  : "text-gray-300 hover:text-teal-300 hover:bg-teal-300/10"
              }
            `}
          >
            {link}
            {isActive && (
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-teal-300 rounded-full"></span>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
