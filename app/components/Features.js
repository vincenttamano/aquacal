"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featureData = [
  {
    id: 0,
    title: "Track Daily Water",
    emoji: "💧",
    desc: "Log each sip, choose bottle sizes, and watch your daily progress fill up visually.",
    href: "/WaterTracker",
  },
  {
    id: 1,
    title: "Monitor Calories",
    emoji: "🔥",
    desc: "Keep an eye on related nutrition metrics alongside hydration to support healthy habits.",
    href: "/About",
  },
  {
    id: 2,
    title: "Progress Insights",
    emoji: "📊",
    desc: "See summaries and trends so you can improve your hydration consistency over time.",
    href: "/About",
  },
];

export default function Features() {
  const [selected, setSelected] = useState(null);

  // lock body scroll when modal is open and close on Escape
  useEffect(() => {
    if (selected !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const onKey = (e) => {
        if (e.key === "Escape") setSelected(null);
      };
      window.addEventListener("keydown", onKey);

      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [selected]);

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-black">Why AquaCal?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {featureData.map((f) => (
            <motion.div
              key={f.id}
              layoutId={`card-${f.id}`}
              className="feature-card p-6 bg-blue-50 rounded-xl shadow block text-blue-900 cursor-pointer"
              onClick={() => setSelected(f.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelected(f.id); }}
            >
              <div className="text-2xl">{f.emoji}</div>
              <h3 className="mt-3 text-lg font-semibold text-black">{f.title}</h3>
              <p className="mt-3 text-sm text-black">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 backdrop-blur-lg bg-transparent" />

            <motion.div
              layoutId={`card-${selected}`}
              className="relative z-10 max-w-2xl w-[90%] bg-white rounded-2xl shadow-2xl p-8 text-black"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 text-black hover:text-gray-800"
              >
                ✕
              </button>

              <div className="text-4xl mb-4">{featureData[selected].emoji}</div>
              <h3 className="text-2xl font-bold mb-2">{featureData[selected].title}</h3>
              <p className="mb-6">{featureData[selected].desc}</p>

              <div className="flex gap-3 justify-end">
                <Link
                  href={featureData[selected].href}
                  className="px-4 py-2 bg-gray-200 text-black rounded-lg"
                >
                  Open
                </Link>
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 bg-gray-100 text-black rounded-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
