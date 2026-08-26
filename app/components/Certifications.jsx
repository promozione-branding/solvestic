"use client";

import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "ISO",
    subtitle: "CERTIFIED",
    description: "Quality Management",
    image: "/1.webp",
  },
  {
    title: "GMP",
    subtitle: "CERTIFIED",
    description: "Good Manufacturing",
    image: "/22.webp",
  },
  {
    title: "FDA",
    subtitle: "APPROVED",
    description: "Safety Standards",
    image: "/3.webp",
  },
  {
    title: "SULPHATE",
    subtitle: "FREE",
    description: "Clean Formulation",
    image: "/4.webp",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Certifications() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f7] py-6 md:py-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#eee9e2] opacity-50 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#eee9e2] opacity-50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-7"
        >
          {/* Small eyebrow */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-gray-300 sm:w-10" />

            <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-gray-500 sm:text-[10px]">
              Crafted With Confidence
            </span>

            <span className="h-px w-7 bg-gray-300 sm:w-10" />
          </div>

          <h2 className="text-2xl font-semibold uppercase tracking-[0.12em] text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Our Certifications
          </h2>

        
        </motion.div>

        {/* ================= CERTIFICATION GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#e5e1dc] bg-white sm:grid-cols-4"
        >
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className={`
                group relative flex min-h-[215px]
                flex-col items-center justify-center
                overflow-hidden px-4 py-8 text-center
                transition-all duration-500
                hover:bg-[#fcfbf9]

                ${index % 2 === 0 ? "border-r border-[#e8e4df]" : ""}
                ${index < 2 ? "border-b border-[#e8e4df]" : ""}

                sm:min-h-[270px]
                sm:border-b-0
                sm:px-6
                ${index < 3 ? "sm:border-r sm:border-[#e8e4df]" : ""}
              `}
            >
              {/* Hover background glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f1eee9] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              {/* Certification Logo */}
              <motion.div
                className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center sm:mb-6 sm:h-28 sm:w-28"
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#d8d3cc] transition-all duration-700 group-hover:rotate-180 group-hover:border-[#aaa39a]" />

                {/* Inner ring */}
                <div className="absolute inset-2 rounded-full border border-[#eeeae5]" />

                {/* Logo */}
                <div className="relative flex h-14 w-14 items-center justify-center sm:h-20 sm:w-20">
                  <img
                    src={item.image}
                    alt={`${item.title} ${item.subtitle}`}
                    className="max-h-full max-w-full object-contain   transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </motion.div>

              {/* Certification title */}
              <h3 className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 sm:text-sm">
                {item.title}
              </h3>

              {/* Subtitle */}
              <span className="relative z-10 mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-[10px]">
                {item.subtitle}
              </span>

              {/* Description */}
              <p className="relative z-10 mt-2 text-[10px] text-gray-800 sm:text-xs">
                {item.description}
              </p>

              {/* Bottom animated line */}
              <motion.span
                className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-gray-900"
                initial={{ width: 0 }}
                whileHover={{ width: 45 }}
                transition={{ duration: 0.4 }}
              />

              {/* Corner accent */}
              <span className="absolute right-0 top-0 h-0 w-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-[#f3f0ec] opacity-0 transition-all duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* ================= BOTTOM TRUST LINE ================= */}
       
      </div>
    </section>
  );
}