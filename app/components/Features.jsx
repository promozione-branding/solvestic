"use client";

import Image from "next/image";
import React from "react";
import { FaFlask, FaUserCheck } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const RIGHT_TAGS = [
  "Balanced Care",
  "Unique Textures",
  "Skin First",
  "Real & Authentic",
  "Smart Formulas",
  "Intelligent Skincare",
];

export default function Features() {
  return (
    <section className="w-full px-4 py-12 md:px-gutter lg:py-section-gap">
      <div className="max-w-container-max mx-auto">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-headline-md font-headline-md text-[#a980d7] mb-3 sm:mb-4">
            Building Skincare That Truly Matters
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 sm:w-16 h-[2px] bg-[#a980d7] rounded-full" />
            <span className="w-2 h-2 rounded-full bg-[#a980d7]" />
            <span className="w-12 sm:w-16 h-[2px] bg-[#a980d7] rounded-full" />
          </div>

          <p className="text-sm sm:text-base lg:text-body-md font-body-md text-[#a980d7] max-w-2xl mx-auto leading-relaxed">
            We're here to simplify your skincare journey with smart, effective
            and intelligent solutions
          </p>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 items-center">
          {/* ================= LEFT FEATURES ================= */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Research Backed */}
            <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 bg-[#a980d7] rounded-lg flex items-center justify-center text-white">
                <FaFlask size={20} className="sm:w-[22px] sm:h-[22px]" />
              </div>

              <div className="flex-1">
                <h4 className="text-base sm:text-lg lg:font-bold font-label-bold text-[#a980d7] mb-1.5 sm:mb-2">
                  ROOTED IN INNOVATION
                </h4>

                <p className="text-sm sm:text-base lg:text-caption font-caption text-[#a980d7] leading-relaxed">
                  Backed by science and crafted with care to suit Indian skin
                </p>
              </div>
            </div>

            {/* Personalized Care */}
            <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 bg-[#a980d7] rounded-lg flex items-center justify-center text-white">
                <FaUserCheck size={20} className="sm:w-[22px] sm:h-[22px]" />
              </div>

              <div className="flex-1">
                <h4 className="text-base sm:text-lg lg:font-bold font-label-bold text-[#a980d7] mb-1.5 sm:mb-2">
                  REAL PEOPLE, REAL IMPACT
                </h4>

                <p className="text-sm sm:text-base lg:text-caption font-caption text-[#a980d7] leading-relaxed">
                  We listen, we learn and we build with our community at the
                  heart.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CENTER FLIP CARD ================= */}
          {/* <div className="relative flex justify-center order-first lg:order-none">
            <div className="flip-card relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              <div className="absolute inset-0 transition-opacity duration-500 hover:opacity-15 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-[#ad51c1] font-bold text-lg sm:text-xl">
                  Made For All Indian Skins
                </h3>

                <button className="mt-4 px-4 py-2 bg-[#ad51c1] text-white text-xs font-semibold hover:bg-[#963eaa] transition">
                  Discover More
                </button>
              </div>

               <div className="flip-card-image duration-200 absolute inset-0 overflow-hidden z-10">
                <div className="absolute inset-0 z-10 pointer-events-none" />
                <Image
                  src="/newo.png"
                  alt="Solvestic skincare"
                  fill
                  className="object-cover"
                  priority
                />
              </div> 

              <div className="absolute -inset-3 pointer-events-none" />
            </div>
          </div> */}

          {/* ================= RIGHT: STATS / TRUST PANEL ================= */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-[#a980d7] px-6 py-8 sm:px-8 sm:py-10 text-white shadow-lg shadow-[#ad51c1]/20">
              {/* decorative glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-white/10 rounded-full blur-2xl" />

              <div className="relative flex items-center gap-2 mb-6">
                <HiSparkles size={18} />
                <span className="text-xs tracking-widest uppercase font-semibold text-white">
                  Trusted Results
                </span>
              </div>

              <div className="relative flex flex-wrap gap-2.5 sm:gap-3">
                {RIGHT_TAGS.map((tag, i) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white/15 backdrop-blur-sm border border-white hover:bg-white hover:text-[#ad51c1] transition-colors duration-300 cursor-default"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="relative text-xs sm:text-sm text-white leading-relaxed mt-8 border-t border-white/20 pt-5">
                Every formula is built around what your skin actually needs —
                simple, intelligent and thoughtfully made.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}