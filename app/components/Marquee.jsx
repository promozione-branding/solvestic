"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const texts = [
    "🚀 We Are Launching Soon",
    "✨ Something Amazing Is Coming",
    "🔥 Stay Tuned",
    "🎉 Get Ready for the Launch",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#b1a2cf] py-3 text-white">
      <motion.div
        className="flex w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {/* First set */}
        <div className="flex shrink-0 items-center">
          {texts.map((text, index) => (
            <div
              key={`first-${index}`}
              className="flex shrink-0 items-center gap-10 px-5 text-sm font-semibold uppercase tracking-widest sm:gap-16 sm:px-8 sm:text-base"
            >
              <span>{text}</span>
              <span className="opacity-60">•</span>
            </div>
          ))}
        </div>

        {/* Duplicate set */}
        <div
          className="flex shrink-0 items-center"
          aria-hidden="true"
        >
          {texts.map((text, index) => (
            <div
              key={`second-${index}`}
              className="flex shrink-0 items-center gap-10 px-5 text-sm font-semibold uppercase tracking-widest sm:gap-16 sm:px-8 sm:text-base"
            >
              <span>{text}</span>
              <span className="opacity-60">•</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}