
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MobileStickyFooter({
  days,
  hours,
  minutes,
  seconds,
}) {
  const pad = (value) => String(value).padStart(2, "0");

  return (
    <section className="fixed bottom-0 left-0 right-0 z-[999] md:hidden">
      <div className="border-t border-[#7650A0]/15 bg-white/90 px-4 py-3 shadow-[0_-10px_35px_rgba(60,20,100,0.12)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          
          {/* TIMER */}
          <div className="flex min-w-0 flex-col">
            <span className="mb- text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7650A0]">
              Launching In
            </span>

            <div className="flex items-center text-[#2D1557]">
              <span className="text-[18px] font-bold tabular-nums">
                {pad(days)}
              </span>
              <span className="ml-0.5 mr-1 text-[10px] font-semibold text-[#7650A0]">
                D
              </span>

              <span className="text-xs text-[#7650A0]/40">:</span>

              <span className="ml-1 text-[18px] font-bold tabular-nums">
                {pad(hours)}
              </span>
              <span className="ml-0.5 mr-1 text-[10px] font-semibold text-[#7650A0]">
                H
              </span>

              <span className="text-xs text-[#7650A0]/40">:</span>

              <span className="ml-1 text-[18px] font-bold tabular-nums">
                {pad(minutes)}
              </span>
              <span className="ml-0.5 mr-1 text-[10px] font-semibold text-[#7650A0]">
                M
              </span>

              <span className="text-xs text-[#7650A0]/40">:</span>

              <span className="ml-1 text-[18px] font-bold tabular-nums">
                {pad(seconds)}
              </span>
              <span className="ml-0.5 text-[10px] font-semibold text-[#7650A0]">
                S
              </span>
            </div>
          </div>

          {/* JOIN WAITLIST */}
          <motion.a
            href="#form"
            whileTap={{ scale: 0.96 }}
            className="
              flex
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#7D45C2]
              px-5
              py-3
              text-[11px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-white
              shadow-[0_8px_20px_rgba(90,35,150,0.25)]
            "
          >
            JOIN WAITLIST
            <span className="text-base leading-none">→</span>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
