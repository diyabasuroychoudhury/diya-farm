"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

const animals = [
  {
    id: "sheep",
    emoji: "🐑",
    name: "The Shepherd",
    role: "Operations & Trust",
    x: "20%",
    y: "55%",
    drift: 8,
    speed: 0.4,
    story:
      "I started in hospitality and frontline operations, where trust is built or broken in seconds.",
    insight:
      "Systems fail when they ignore the edges. Operational trust scales through consistency, not perfection.",
  },
  {
    id: "owl",
    emoji: "🦉",
    name: "The Owl",
    role: "Strategic Thinking",
    x: "55%",
    y: "18%",
    drift: 5,
    speed: 0.2,
    story:
      "Working in loyalty, compliance, and risk taught me to care about second-order effects.",
    insight:
      "Good strategy survives contact with reality. Clear framing beats clever solutions.",
  },
  {
    id: "fox",
    emoji: "🦊",
    name: "The Fox",
    role: "Career Pivot",
    x: "70%",
    y: "60%",
    drift: 14,
    speed: 0.7,
    story:
      "I’m intentionally moving into product and revenue roles while staying grounded in execution.",
    insight:
      "Momentum comes from acting before you feel ready — then correcting fast.",
  },
  {
    id: "horse",
    emoji: "🐎",
    name: "The Horse",
    role: "Resilience",
    x: "35%",
    y: "70%",
    drift: 10,
    speed: 0.5,
    story:
      "A serious ACL and meniscus injury forced me to slow down and think more deliberately.",
    insight:
      "Sustainable progress values direction over speed.",
  },
];

export default function FarmWorld() {
  const [active, setActive] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <main
      className="w-screen h-screen overflow-hidden"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
    >
      {/* SKY */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-green-100 to-green-300" />

      {/* TITLE */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-10">
        <h1 className="text-4xl font-bold">Diya Roy</h1>
        <p className="text-gray-700">
          A living system of operations, strategy, and growth
        </p>
        <p className="text-sm text-gray-500 mt-2">
          (Try moving your cursor)
        </p>
      </div>

      {/* ANIMALS */}
      {animals.map((a) => (
        <motion.div
          key={a.id}
          className="absolute text-5xl cursor-pointer select-none"
          style={{ left: a.x, top: a.y }}
          animate={{
            y: [0, -a.drift, 0],
          }}
          transition={{
            duration: 4 + a.speed * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.3 }}
          onClick={() => setActive(a)}
        >
          {a.emoji}
        </motion.div>
      ))}

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
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
              <div className="text-4xl mb-2">{active.emoji}</div>
              <h2 className="text-2xl font-semibold">{active.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{active.role}</p>
              <p className="text-gray-700 mb-4">{active.story}</p>
              <p className="font-medium text-gray-800">{active.insight}</p>

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
