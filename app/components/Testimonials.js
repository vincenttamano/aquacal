"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ako Si Dogie",
    message: "AquaCal helped me drink more water daily. It's fun and motivating!",
    // use files from /public — reference them with a leading slash
    image: "/images/dogie.jpg",
  },
  {
    name: "Charlie K.",
    message: "I love the visual charts—it keeps me accountable!",
    image: "/images/charlie.webp",
  },
  {
    name: "Baby",
    message: "The reminders are super helpful, even on busy days.",
    image: "/images/baby.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  // Rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-3xl w-full text-center bg-white p-6 rounded-2xl shadow-md reveal">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6">Testimonials</h2>
      <div className="flex flex-col items-center">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
        <blockquote className="text-black italic text-lg mb-2 max-w-xl">
          “{testimonials[current].message}”
        </blockquote>
        <cite className="block text-sm text-blue-700 font-semibold">
          — {testimonials[current].name}
        </cite>
      </div>

      {/* Dots for manual navigation */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-700" : "bg-blue-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
