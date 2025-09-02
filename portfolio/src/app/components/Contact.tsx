"use client";

import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <p className="text-gray-300 mb-8">
        Let’s connect! Send me a message and I’ll get back to you.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
