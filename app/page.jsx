"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animals = [
  {
    id: "shepherd",
    emoji: "🐑",
    name: "The Shepherd",
    title: "Operations & Trust",
    story:
      "I started my career in hospitality and frontline operations, where trust is built or broken in seconds. Working closely with customers, policies, and teams taught me how systems behave under pressure.",
    insight:
      "Operational trust is not about perfection — it’s about consistency at scale. Products that ignore frontline realities fail quietly.",
  },
  {
    id: "owl",
    emoji: "🦉",
    name: "The Owl",
    title: "Strategic Thinking",
    story:
      "Over time, I gravitated toward roles involving loyalty, compliance, and risk — places where second‑order effects matter more than surface metrics.",
    insight:
      "Strategy only works when it survives contact with real constraints. Clear framing beats clever solutions.",
  },
  {
    id: "fox",
    emoji: "🦊",
    name: "The Fox",
    title: "Career Pivot",
    story:
      "I’m intentionally moving toward product and revenue‑adjacent roles, building technical fluency while staying grounded in execution.",
    insight:
      "Momentum comes from acting before you feel fully ready — then correcting fast.",
  },
  {
    id: "horse",
    emoji: "🐎",
    name: "The Horse",
    title: "Resilience",
    story:
      "A serious ACL and meniscus injury forced me to slow down. It sharpened my thinking and made intention more important than speed.",
    insight:
      "Sustainable progress is quiet, deliberate, and repeatable.",
  },
];

export default function FarmWebsite() {
  const [active, setActive] = useState(null);

  return (
    <main className="min-h-screen bg-green-50 p-8 font-sans">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Diya Roy</h1>
        <p className="text-lg text-gray-700 mb-10">
          Welcome to my farm — a living system of operations, strategy, and growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {animals.map((animal) => (
            <motion.div
              key={animal.id}
              whileHover={{ scale: 1.04 }}
              className="cursor-pointer bg-white rounded-2xl shadow p-6"
              onClick={() => setActive(animal)}
            >
              <div className="text-3xl mb-2">{animal.emoji}</div>
              <h2 className="text-xl font-semibold">{animal.name}</h2>
              <p className="text-sm text-gray-600">{animal.title}</p>
            </motion.div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">🪵 The Thinking Barn</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Why frontline constraints should shape product decisions</li>
            <li>What hospitality taught me about trust systems</li>
            <li>Why readiness is overrated in early careers</li>
          </ul>
        </section>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-3xl mb-2">{active.emoji}</div>
              <h3 className="text-2xl font-semibold mb-1">{active.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{active.title}</p>
              <p className="text-gray-700 mb-4">{active.story}</p>
              <p className="text-gray-800 font-medium">{active.insight}</p>
              <button
                className="mt-6 px-4 py-2 rounded-xl bg-green-600 text-white"
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
