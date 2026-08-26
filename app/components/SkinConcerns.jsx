"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skinConcerns = [
  {
    title: "Sun Tan",
    description: "Restore your skin's natural glow",
    image: "9.webp",
  },
  {
    title: "Melasma",
    description: "Target uneven pigmentation",
    image: "11.webp",
  },
  {
    title: "Post Acne Marks",
    description: "Fade marks & improve texture",
    image: "444.webp",
  },
  {
    title: "Uneven Skin Tone",
    description: "Bring back deep hydration",
    image: "12.webp",
  },
];

const SkinConcerns = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#fffaff] px-5 py-6 md:py-13">
      {/* Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
            Skin concerns
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            What does your{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
              skin
            </span>{" "}
            need?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Every skin has a story. Discover targeted care designed to bring
            out your healthiest, most radiant skin.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skinConcerns.map((item, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={item.title}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setActiveCard(isActive ? null : index);
                  }
                }}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(80,40,100,0.08)]"
              >
                {/* Image */}
                <div className="relative h-[330px] overflow-hidden sm:h-[360px]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className={`
                      h-full w-full object-cover
                      transition-transform duration-700
                      md:group-hover:scale-110
                      ${isActive ? "scale-105" : ""}
                    `}
                  />

                  {/* Gradient */}
                  <div
                    className={`
                      absolute inset-0
                      bg-gradient-to-t from-black/60 via-black/10 to-transparent
                      transition-opacity duration-500
                      md:group-hover:opacity-30
                      ${isActive ? "opacity-20" : "opacity-100"}
                    `}
                  />

                  {/* Number */}
                  <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-xs font-bold text-purple-600 backdrop-blur-md">
                    0{index + 1}
                  </span>

                  {/* ================= MOBILE TITLE ================= */}
                  <div
                    className={`
                      absolute bottom-0 left-0 w-full p-6
                      transition-all duration-500
                      md:group-hover:translate-y-5
                      md:group-hover:opacity-0
                      ${isActive ? "translate-y-10 opacity-0" : ""}
                    `}
                  >
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-white/80">
                      {item.description}
                    </p>
                  </div>

                  {/* ================= MOBILE CLICK PANEL ================= */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          y: "100%",
                        }}
                        animate={{
                          y: 0,
                        }}
                        exit={{
                          y: "100%",
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          absolute
                          bottom-0
                          left-0
                          z-20
                          w-full
                          rounded-t-[1.5rem]
                          bg-white
                          p-6
                          md:hidden
                        "
                      >
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-500">
                          Skin Concern
                        </span>

                        <h3 className="mt-1 text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          {item.description}
                        </p>

                        {/* <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-900">
                          Explore care
                          <span>→</span>
                        </div> */}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ================= DESKTOP HOVER PANEL ================= */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      z-20
                      hidden
                      w-full
                      translate-y-full
                      rounded-t-[1.5rem]
                      bg-white
                      p-6
                      opacity-0
                      shadow-[0_-10px_30px_rgba(0,0,0,0.08)]
                      transition-all
                      duration-500
                      md:block
                      md:group-hover:translate-y-0
                      md:group-hover:opacity-100
                    "
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-500">
                      Skin Concern
                    </span>

                    <h3 className="mt-1 text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>

                    {/* <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-900">
                      Explore care
                      <span>→</span>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-purple-600">
            Find the right care
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkinConcerns;