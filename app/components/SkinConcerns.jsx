"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skinConcerns = [
  {
    title: "Sun Tan",
    description:
      "Prolonged sun exposure can leave skin looking darker, dull and uneven. Tan buildup affects your natural radiance, making the complexion appear tired, patchy and less luminous.",
    image: "9.webp",
  },
  {
    title: "Melasma",
    description:
      "Melasma causes stubborn, uneven dark patches, often appearing on the cheeks and other facial areas. It can make your complexion look visibly uneven and reduce your skin’s natural glow.",
    image: "11.webp",
  },
  {
    title: "Post Acne Marks",
    description:
      "Acne may fade, but the marks can stay behind. Dark spots and uneven texture left after breakouts can make skin look dull, uneven and less smooth.",
    image: "444.webp",
  },
  {
    title: "Uneven Skin Tone",
    description:
      "Uneven skin tone creates visible differences in complexion across the face. Dark patches, redness and pigmentation can make skin appear dull, inconsistent and less naturally radiant.",
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
            Every skin has a story. Discover targeted care designed to bring out
            your healthiest, most radiant skin.
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

                  {/* Base gradient */}
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
                  <span className="absolute left-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-xs font-bold text-purple-600 backdrop-blur-md">
                    0{index + 1}
                  </span>

                  {/* ================= MOBILE DEFAULT TITLE ================= */}
                  <div
                    className={`
                      absolute bottom-0 left-0 z-10 w-full p-6
                      transition-all duration-500
                      md:group-hover:translate-y-5
                      md:group-hover:opacity-0
                      ${isActive ? "translate-y-10 opacity-0" : ""}
                    `}
                  >
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    {/* <p className="mt-1 text-sm text-white/80">
                      {item.description}
                    </p> */}
                  </div>

                  {/* ================================================= */}
                  {/* MOBILE - FULL CARD OVERLAY ON CLICK */}
                  {/* ================================================= */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 1.05,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          absolute inset-0 z-20
                          flex items-center justify-center
                          bg-white/95
                          p-8
                          text-center
                          md:hidden
                        "
                      >
                        <div className="flex max-w-[260px] flex-col items-center">
                          <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-500">
                            Skin Concern
                          </span>

                          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                            {item.title}
                          </h3>

                          <span className="my-4 h-px w-10 bg-purple-300" />

                          <p className="text-sm leading-6 text-gray-500">
                            {item.description}
                          </p>

                          <span className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                            Tap to close
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ================================================= */}
                  {/* DESKTOP - FULL CARD OVERLAY ON HOVER */}
                  {/* ================================================= */}
                  <div
                    className="
                      absolute inset-0 z-20
                      hidden
                      items-center
                      justify-center
                      bg-white/85
                      p-8
                      text-center
                      opacity-0
                      transition-all
                      duration-500
                      md:flex
                      md:scale-105
                      md:group-hover:scale-100
                      md:group-hover:opacity-100
                    "
                  >
                    <div className="flex max-w-[260px] flex-col items-center">
                      <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-500">
                        Skin Concern
                      </span>

                      <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                        {item.title}
                      </h3>

                      <span className="my-4 h-px w-10 bg-purple-300" />

                      <p className="text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-purple-600">
            Find the right care with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkinConcerns;
