"use client";

import Image from "next/image";
import React from "react";
import { FaFlask, FaUserCheck, FaLeaf } from "react-icons/fa";
import { SiTomorrowland } from "react-icons/si";

export default function Features() {
  return (
    <section className="w-full px-4 py-12 md:px-gutter lg:py-section-gap">
      <div className="max-w-container-max mx-auto">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-headline-md font-headline-md text-[#ad51c1] mb-3 sm:mb-4">
            Building Skincare That Truly Matters
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 sm:w-16 h-[2px] bg-[#ad51c1] rounded-full" />

            <span className="w-2 h-2 rounded-full bg-[#ad51c1]" />

            <span className="w-12 sm:w-16 h-[2px] bg-[#ad51c1] rounded-full" />
          </div>

          <p className="text-sm sm:text-base lg:text-body-md font-body-md text-[#ad51c1] max-w-2xl mx-auto leading-relaxed">
            We're here to simplify your skincare journey with smart, effective
            and honest solutions
          </p>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  lg:gap-0 items-center">
          {/* ================= LEFT FEATURES ================= */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Research Backed */}
            <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 bg-[#ad51c1] rounded-lg flex items-center justify-center text-white">
                <FaFlask size={20} className="sm:w-[22px] sm:h-[22px]" />
              </div>

              <div className="flex-1">
                <h4 className="text-base sm:text-lg lg:font-bold font-label-bold text-[#ad51c1] mb-1.5 sm:mb-2">
                  ROOTED IN INNOVATION
                </h4>

                <p className="text-sm sm:text-base lg:text-caption font-caption text-[#ad51c1] leading-relaxed">
                  Backed by science and crafted with care to suit Indian skin
                </p>
              </div>
            </div>

            {/* Personalized Care */}
            <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 bg-[#ad51c1] rounded-lg flex items-center justify-center text-white">
                <FaUserCheck size={20} className="sm:w-[22px] sm:h-[22px]" />
              </div>

              <div className="flex-1">
                <h4 className="text-base sm:text-lg lg:font-bold font-label-bold text-[#ad51c1] mb-1.5 sm:mb-2">
                  REAL PEOPLE, REAL IMPACT
                </h4>

                <p className="text-sm sm:text-base lg:text-caption font-caption text-[#ad51c1] leading-relaxed">
                  We listen, we learn and we build with our community at the
                  heart.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CENTER IMAGE ================= */}
          {/* ================= CENTER FLIP CARD ================= */}
          <div className="relative flex  justify-center order-first lg:order-none">
            <div className="flip-card relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              {/* ================= CONTENT BEHIND IMAGE ================= */}
              <div className="absolute inset-0  transition-opacity duration-500 hover:opacity-15  flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-[#ad51c1] font-bold text-lg sm:text-xl">
                  Made For All Indian Skins
                </h3>

              

                <button className="mt-4 px-4 py-2  bg-[#ad51c1] text-white text-xs font-semibold hover:bg-[#963eaa] transition">
                  Discover More
                </button>
              </div>

              {/* ================= IMAGE / TOP CARD ================= */}
              <div className="flip-card-image  duration-200 absolute inset-0  overflow-hidden z-10">
                {/* Purple Glow */}
                <div className="absolute inset-0  z-10 pointer-events-none" />

                <Image
                  src="/newcenter.webp"
                  alt="Solvestic skincare"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative Ring */}
              <div className="absolute -inset-3   pointer-events-none" />
            </div>
          </div>

          {/* ================= RIGHT FEATURES ================= */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Natural Ingredients */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 bg-[#ad51c1] rounded-lg flex items-center justify-center text-white">
                <FaLeaf size={20} className="sm:w-[22px] sm:h-[22px]" />
              </div>

              <div className="flex-1">
                <h4 className="text-base sm:text-lg lg:font-bold text-[#ad51c1] mb-1.5 sm:mb-2">
                  Natural Ingredients
                </h4>

                <p className="text-sm sm:text-base lg:text-caption font-caption text-[#ad51c1] leading-relaxed">
                  Harnessing the power of nature with clean, non-toxic
                  formulations.
                </p>
              </div>
            </div>

            {/* Better For Tomorrow */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 bg-[#ad51c1] rounded-lg flex items-center justify-center text-white">
                <SiTomorrowland size={20} className="sm:w-[22px] sm:h-[22px]" />
              </div>

              <div className="flex-1">
                <h4 className="text-base sm:text-lg lg:font-bold font-label-bold text-[#ad51c1] mb-1.5 sm:mb-2">
                  BETTER FOR TOMORROW
                </h4>

                <p className="text-sm sm:text-base lg:text-caption font-caption text-[#ad51c1] leading-relaxed">
                  Conscious choices for healthier skin and a healthier planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ANIMATION CSS ================= */}
      
    </section>
  );
}
