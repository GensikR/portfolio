"use client";

import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-xl mx-auto bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-[80vh] flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
        Contact
      </h2>
      <p className="text-slate-400 mb-8 max-w-md">
        Let’s connect! Send me a message and I’ll get back to you as soon as I can.
      </p>

      <form className="w-full space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg shadow-md transition text-slate-100 font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
