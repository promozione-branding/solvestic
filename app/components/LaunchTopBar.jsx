"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LaunchTopBar() {
  return (
    <div className="relative w-full overflow-hidden bg-[#ad51c1] text-white">
      <div className="relative flex h-11 items-center justify-center px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-0 md:gap-3 whitespace-nowrap"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
              },
            },
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {/* Main announcement */}
          <motion.span
            className="text-[10px] font-semibold tracking-[0.28em] sm:text-xs md:text-sm"
            variants={{
              hidden: {
                opacity: 0,
                y: 12,
                clipPath: "inset(100% 0 0 0)",
              },
              show: {
                opacity: 1,
                y: 0,
                clipPath: "inset(0% 0 0 0)",
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            SOMETHING NEW IS COMING
          </motion.span>

          {/* Divider */}
          <motion.span
            className="h-[3px] w-[3px] hidden md:block rounded-full bg-white/50"
            variants={{
              hidden: {
                opacity: 0,
                scale: 0,
              },
              show: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.4,
                },
              },
            }}
          />

          {/* Secondary text */}
          <motion.span
            className="text-[10px] font-bold tracking-[0.12em] text-white/90 sm:text-xs md:text-base"
            variants={{
              hidden: {
                opacity: 0,
                y: 12,
                clipPath: "inset(100% 0 0 0)",
              },
              show: {
                opacity: 1,
                y: 0,
                clipPath: "inset(0% 0 0 0)",
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            Stay tuned for the reveal.
          </motion.span>
        </motion.div>

        {/* Subtle moving shine */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-150%" }}
          animate={{ x: "150vw" }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </div>
    </div>
  );
}