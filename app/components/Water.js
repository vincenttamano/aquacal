"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "aqualcal_daily";

export default function Water() {
  const today = new Date().toISOString().slice(0, 10);
  const glassHeight = 380; 
  const glassWidth = 180;

  const [current, setCurrent] = useState(0);
  const [addAmount, setAddAmount] = useState(250);
  const [goal, setGoal] = useState(2000);
  const [streak, setStreak] = useState(0);
  const [ripple, setRipple] = useState(false);

  const playSound = () => {
    try {
      const audio = new Audio("/water.mp3");
      audio.volume = 0.25;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch((err) => console.warn("Audio play failed:", err));
      }
    } catch (err) {
      console.warn("Audio error:", err);
    }
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    if (saved[today]) {
      setCurrent(saved[today].current || 0);
      setGoal(saved[today].goal || 2000);
    }
    calculateStreak(saved);
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    saved[today] = { current, goal };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    calculateStreak(saved);
  }, [current, goal]);

  const calculateStreak = (data) => {
    let count = 0;
    for (let i = 0; i < 30; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      if (data[key] && data[key].current >= data[key].goal) count++;
      else break;
    }
    setStreak(count);
  };

  const addWater = (amt) => {
    playSound();
    setRipple(true);
    setTimeout(() => setRipple(false), 400);
    setCurrent((c) => Math.min(goal, c + amt));
  };

  const reset = () => setCurrent(0);

  const percent = Math.min(100, Math.round((current / goal) * 100));

  return (
    <div className="wt reveal bg-white">
      <style>{`
        .wt { display:flex; gap:40px; justify-content:center; flex-wrap:wrap; padding:28px; color:#0b1220; align-items:flex-start; background:white; }
        .controls { width:260px; display:flex; flex-direction:column; gap:10px; color:inherit; }
        .controls label { font-size:13px; font-weight:700; color:inherit; }
        .controls input { padding:8px; border-radius:8px; border:1px solid #d6e9fb; background:#fff; color:inherit; }
        .controls input:focus { outline:none; box-shadow:0 0 0 4px rgba(30,144,255,0.08); }
        .btn { background:#1e90ff; color:white; padding:10px; border-radius:10px; font-weight:700; cursor:pointer; transition: transform .12s ease, box-shadow .12s ease; border:none }
        .btn:active { transform:translateY(1px); }
        .btn.secondary { background:white; color:#1e90ff; border:1px solid #cfe9ff; }
        .btn.secondary:hover { background:#fbfeff; }
        .status { margin-top:6px; font-weight:600; color:inherit; font-size:13px }

        .bottle-wrap { width:${glassWidth}px; height:420px; display:flex; align-items:center; justify-content:center; position:relative; background:white; }

        .wave { transform-origin: center bottom; }
        @keyframes wave-x { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .wave-path { animation: wave-x 4s linear infinite; }

        .bubble { position:absolute; border-radius:50%; background:rgba(255,255,255,0.6); mix-blend-mode:screen; }
        .bubble.s1 { width:8px; height:8px; left:40%; bottom:34%; animation: rise 3s linear infinite; opacity:0.9 }
        .bubble.s2 { width:10px; height:10px; left:60%; bottom:22%; animation: rise 4s linear infinite 0.4s; opacity:0.85 }
        .bubble.s3 { width:6px; height:6px; left:52%; bottom:12%; animation: rise 2.6s linear infinite 0.2s; opacity:0.95 }
        @keyframes rise { 0% { transform: translateY(0) scale(0.9); opacity:0 } 10% { opacity:0.9 } 100% { transform: translateY(-60px) scale(1.1); opacity:0 } }

        .ripple {
          position:absolute; width:100px; height:100px; border-radius:50%; background:rgba(255,255,255,0.4);
          top:50%; left:50%; transform:translate(-50%, -50%) scale(0);
          pointer-events:none;
        }
      `}</style>

      {/* Controls */}
      <div className="controls">
        <label>Daily Goal (ml)</label>
        <input type="number" value={goal} onChange={(e) => setGoal(+e.target.value)} />

        <label>Add Water (ml)</label>
        <input type="number" value={addAmount} onChange={(e) => setAddAmount(+e.target.value)} />

        <button className="btn" onClick={() => addWater(addAmount)}>Add</button>

        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button className="btn secondary" onClick={() => addWater(100)}>+100</button>
          <button className="btn secondary" onClick={() => addWater(250)}>+250</button>
          <button className="btn secondary" onClick={reset}>Reset</button>
        </div>

        <div className="status">
          {current} / {goal} ml — {percent}%<br />
          🔥 Streak: {streak} day{streak !== 1 && "s"}
        </div>
      </div>

      {/* Glass */}
      <div className="bottle-wrap">
        <AnimatePresence>
          {ripple && (
            <motion.div
              className="ripple"
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 1.8, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </AnimatePresence>

        {/* Percentage */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 800,
          fontSize: 28,
          color: '#0b1220',
          pointerEvents: 'none',
          textShadow: '0 1px 0 rgba(255,255,255,0.45)',
        }}>
          {percent}%
        </div>

        {/* Bubbles */}
        <div className="bubble s1" />
        <div className="bubble s2" />
        <div className="bubble s3" />

    <svg
  className="bottle-svg"
  viewBox="0 0 220 540"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Full white background */}
  <rect x="0" y="0" width="220" height="540" fill="white" />

  <defs>
    <linearGradient id="glassGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
      <stop offset="50%" stopColor="#dff1ff" stopOpacity="0.6" />
      <stop offset="100%" stopColor="#e9f6ff" stopOpacity="0.4" />
    </linearGradient>
    <linearGradient id="waterGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#7fd0ff" />
      <stop offset="100%" stopColor="#1e90ff" />
    </linearGradient>
    <clipPath id="glassClip">
      <path d="M20 18 h180 v344 a20 20 0 0 1 -20 20 H40 a20 20 0 0 1 -20 -20 V18 z" />
    </clipPath>
    <path id="wavePath" d="M0 30c30 0 30-18 60-18s30 18 60 18 30-18 60-18 30 18 60 18v40H0z" />
  </defs>

  {/* Glass */}
  <path
    d="M20 18 h180 v344 a20 20 0 0 1 -20 20 H40 a20 20 0 0 1 -20 -20 V18 z"
    fill="url(#glassGrad)"
    stroke="rgba(30,144,255,0.18)"
    strokeWidth="2"
  />

  {/* Water */}
  <g clipPath="url(#glassClip)">
    <motion.g
      className="wave"
      initial={{ y: glassHeight }}
      animate={{ y: glassHeight - (percent / 100) * glassHeight }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <g transform="translate(-60,0)" className="wave-path">
        <use href="#wavePath" fill="url(#waterGrad)" />
        <use href="#wavePath" x="120" fill="url(#waterGrad)" opacity="0.95" />
        <use href="#wavePath" x="240" fill="url(#waterGrad)" opacity="0.9" />
      </g>
      <rect x="0" y="40" width="220" height="500" fill="url(#waterGrad)" opacity="0.6" />
    </motion.g>
  </g>

  {/* Glass outline */}
  <path
    d="M20 18 h180 v344 a20 20 0 0 1 -20 20 H40 a20 20 0 0 1 -20 -20 V18 z"
    fill="none"
    stroke="rgba(30,144,255,0.28)"
    strokeWidth="4"
  />
</svg>
      </div>
    </div>
  );
}
