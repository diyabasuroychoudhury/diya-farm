"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animals = [
  {
    id: "sheep",
    emoji: "🐑",
    name: "The Shepherd",
    role: "Operations & Trust",
    x: "22%",
    y: "58%",
    drift: 6,
    story:
      "I started in hospitality and frontline operations, where trust is built or broken in seconds.",
    insight:
      "Operational trust scales through consistency, not perfection.",
  },
  {
    id: "owl",
    emoji: "🦉",
    name: "The Owl",
    role: "Strategic Thinking",
    x: "55%",
    y: "18%",
    drift: 4,
    story:
      "Working in loyalty and compliance taught me to care about second-order effects.",
    insight:
      "Clear framing beats clever solutions.",
  },
  {
    id: "fox",
    emoji: "🦊",
    name: "The Fox",
    role: "Career Pivot",
    x: "72%",
    y: "62%",
    drift: 10,
    story:
      "I’m intentionally moving into product and revenue roles while staying grounded in execution.",
    insight:
      "Momentum comes from acting before you feel ready.",
  },
  {
    id: "horse",
    emoji: "🐎",
    name: "The Horse",
    role: "Resilience",
    x: "38%",
    y: "72%",
    drift: 8,
    story:
      "A serious injury forced me to slow down and think deliberately.",
    insight:
      "Sustainable progress values direction over speed.",
  },
];

export default function FarmWorldRefined() {
  const [active, setActive] = useState(null);
  const [mode, setMode] = useState("day");
  const isNight = mode === "night";

  return (
    <main className="w-screen h-screen overflow-hidden relative">
      {/* BACKGROUND */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          isNight
            ? "bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-800"
            : "bg-gradient-to-b from-sky-200 via-green-100 to-green-300"
        }`}
      />

      {/* HEADER */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-10">
        <h1 className={`text-4xl font-bold ${isNight ? "text-white" : ""}`}>
          Diya Roy
        </h1>
        <p className={`${isNight ? "text-slate-300" : "text-gray-700"}`}>
          A living system of operations, strategy, and growth
        </p>
      </div>

      {/* DAY / NIGHT TOGGLE */}
      <button
        onClick={() => setMode(isNight ? "day" : "night")}
        className="absolute top-6 right-6 z-10 px-3 py-1 rounded-xl text-sm bg-black/20 text-white backdrop-blur"
      >
        {isNight ? "☀ Day" : "🌙 Night"}
      </button>

      {/* BARN */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 text-5xl cursor-pointer"
        whileHover={{ scale: 1.2 }}
        onClick={() => setActive({ type: "barn" })}
      >
        🪵
      </motion.div>

      {/* ANIMALS */}
      {animals.map((a) => (
        <motion.div
          key={a.id}
          className="absolute text-5xl cursor-pointer select-none"
          style={{ left: a.x, top: a.y }}
          animate={{ y: [0, -a.drift, 0] }}
          transition={{
            duration: isNight ? 6 : 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.3 }}
          onClick={() => setActive(a)}
        >
          {a.emoji}
        </motion.div>
      ))}

      {/* MODALS */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-lg text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {active.type === "barn" ? (
                <>
                  <h2 className="text-2xl font-semibold mb-4">🪵 The Thinking Barn</h2>
                  <ul className="space-y-3 text-gray-700 text-left">
                    <li>• Why frontline constraints should shape product decisions</li>
                    <li>• What hospitality taught me about trust systems</li>
                    <li>• Why readiness is overrated in early careers</li>
                  </ul>
                </>
              ) : (
                <>
                  <div className="text-4xl mb-2">{active.emoji}</div>
                  <h2 className="text-2xl font-semibold">{active.name}</h2>
                  <p className="text-sm text-gray-500 mb-4">{active.role}</p>
                  <p className="text-gray-700 mb-4">{active.story}</p>
                  <p className="font-medium text-gray-800">{active.insight}</p>
                </>
              )}

              <button
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded-xl"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
