"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const colors = ["text-blue-600", "text-white"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2000); // change color every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center py-20 sm:py-24 flex justify-center items-center reveal">
      {/* glass-like gradient background with content inside */}
      <div className="relative w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] max-w-5xl h-auto sm:h-72 bg-gradient-to-r from-blue-300/30 to-white/30 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg flex flex-col justify-center items-center px-4 py-8 sm:py-12">
        
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transition-colors duration-1000 ${colors[colorIndex]}`}>
          AquaCal: Your Personal Water Tracker
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-blue-500 text-center px-2 sm:px-4">
          Track Water. Track Calories. Stay Hydrated.
        </p>  

        <button
          type="button"
          className="mt-6 sm:mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
