"use client";

import { motion } from "framer-motion";

const problems = [
  "Sun Tan",
  "Melasma",
  "Post Acne Marks",
  "Uneven Skin Tone",
];

export default function Problems() {
  return (
    <div className="relative flex h-10 w-full items-center overflow-hidden border-y border-purple-100 bg-purple-50/60">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-purple-50 via-purple-50/80 to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-purple-50 via-purple-50/80 to-transparent" />

      <motion.div
        className="flex w-max shrink-0"
        animate={{ x: "-50%" }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Group 1 */}
        <div className="flex shrink-0 items-center gap-10 pr-10">
          {problems.map((problem) => (
            <div
              key={`first-${problem}`}
              className="flex shrink-0 items-center gap-10"
            >
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em] text-purple-900 sm:text-xs">
                {problem}
              </span>

              <span className="text-purple-300">•</span>
            </div>
          ))}
        </div>

        {/* Group 2 — exact duplicate */}
        <div className="flex shrink-0 items-center gap-10 pr-10">
          {problems.map((problem) => (
            <div
              key={`second-${problem}`}
              className="flex shrink-0 items-center gap-10"
            >
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em] text-purple-900 sm:text-xs">
                {problem}
              </span>

              <span className="text-purple-300">•</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}