"use client";

import React from "react";
import {
  FaBlender,
  FaCloud,
  FaLayerGroup,
  FaLeaf,
  FaMagic,
  FaSearch,
  FaShieldAlt,
  FaTint,
  FaUsers,
} from "react-icons/fa";

const values = [
  { icon: FaBlender, label: "Balanced\nCare" },
  { icon: FaCloud, label: "Unique\nTextures" },
  { icon: FaMagic, label: "Skin\nFirst" },
  { icon: FaShieldAlt, label: "Real &\nAuthentic" },
  { icon: FaLayerGroup, label: "Smart\nFormulas" },
  { icon: FaTint, label: "Refreshingly\nEffective" },
];

export default function StayConnected() {
  return (
    <section className="relative overflow-hidden py-10  lg:py-15">
      {/* Decorative leaf - hidden on small mobile */}
{/* 
      <div className=" absolute text-2xl rotate-13  right-2 lg:left-20 xl:-left-1 h-25 w-25 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#c0bac5"
            d="M859.29 140.28c-5.31-15.34-79.28-7-116 9.42s-163.34 116.58-188.52 172-17.35 64.14-30 84.29-17.1 33.3-22.12 27.66-2.24-16.66 7.83-36.5 28-55 32.21-78.58-10.15-111.32-11.56-147.31-15.46-105.8-33.6-106.37-69.25 69.39-75.15 122.11-17.46 139.43 4.21 195.12 34.11 42.14 41.25 66.88-14 82.5-40.95 117.38-37 46.84-48.27 43.18-17-29-9.06-46.76 26.22-37.12 26.48-61.55-9.33-113.22-15.22-136.06S360 291.87 358 272.34s2.85-67.45-10.61-72.41c-23.69-7.57-57.39 50.77-76.1 132.25s6.86 148 15.18 161.37 27.85 46.23 41.65 61.22 25.81 20.89 29.44 46.57 5.44 38.52-9.79 74.66-66.06 149.34-83 166.45c-4.19-42.4 6.47-30.15 7.41-63.57s-3.05-43.81 3-74.05-21.14-139.41-46-168.41c-12.13-15.05-8-53.59-15.32-54.33s-9.44-2.44-13.92 22.33-43 102-34.27 169.44 12.82 73.72 21.86 87.69 21.56 23.3 31.14 50.25 10.82 40.5 20.73 48.44-16.17 92.81-16.17 92.81l28.17 6s24.82-125.4 50.13-137 37.28 17.63 83.27 17.95 103.84-15.91 129.29-26.22 41.21-16.06 66.32-36.4 56.41-67.58 74.87-89.77 31.63-25.58 25.85-33.46-33.3-3.41-61-1.88-114.7 6.52-178.61 29.73-85.12 71.8-96.12 84.38-14.63 27.62-24.49 21.32-4.73-14.71 1.28-23.38 78.23-177 162.4-192.17c40.67-5.8 37.86 24.72 92.36 26s138.9-18.76 202.48-98.5c47.14-59.19 61-113.91 66.63-121s-28.71-13.21-53.39-6.47-35 16.15-58.92 19.32S607 402.11 563.34 443s-47.73 91-66.93 103.09-41.9 25-44.33 17.05 42.39-100.88 78.53-141.68c11.65-13.69 29-5.41 67.11-24.61s144-102.73 174.92-136.36 32.09-58.69 57.77-79.74 30.84-34.75 28.88-40.47z"
          />
          <path
            fill="#7800f0"
            d="M207.57 519c-11.4 41.54-7.11 122.14 1.1 161.26s31.48 151.17 31.48 151.17-17-118.18-24.28-165.4-8.3-147.03-8.3-147.03zm114.5-278.44C306.49 289.51 307.36 371 310.53 395s25.7 143.29 39 158.6c-17.27-74.25-28.49-121-33.21-164.41-4.65-43.1-.32-77.72 5.75-148.63zM641.9 671.54c-33.45 39-103.26 81.1-125.27 91S381.22 816 361.2 812.71c72.25-24.34 117.88-39.36 157.31-58.18 39.09-18.66 66.27-40.53 123.39-82.99zM486 95.61c-10.09 27.71-43.91 204.72-21.09 280.17C450.33 288.82 486 95.61 486 95.61zm306.13 85.6c-39.45 21.42-213.55 167.5-225.74 185.64 33.42-22.3 225.74-185.64 225.74-185.64zm16.69 230.44c-18.6 24.78-170.91 157-273.46 145 159.64-32.19 273.46-145 273.46-145z"
          />
        </svg>
      </div> */}
      <svg
        className="pointer-events-none absolute -right-20 top-0 hidden h-full w-60 text-purple-900/10 sm:block lg:-right-10 lg:w-72"
        viewBox="0 0 300 600"
        fill="none"
      >
        <path
          d="M260 0C220 90 240 180 190 260C150 325 90 360 40 420C0 470 -10 540 20 600"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M235 40C205 70 150 60 120 95C95 125 100 160 70 190"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M180 200C155 220 120 215 95 245"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M120 340C95 355 65 345 45 375"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      {/* Decorative blob */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/60 blur-2xl sm:-left-24 sm:-top-24 sm:h-64 sm:w-64" />

      {/* Container */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/60 backdrop-blur-sm ring-1 ring-purple-900/5 shadow-[0_20px_60px_-15px_rgba(88,28,135,0.15)] sm:rounded-[2rem]">
          <div className="grid grid-cols-1 gap-10 px-5 py-9 sm:gap-12 sm:px-8 sm:py-12 md:px-10 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-14">
            {/* ================= LEFT ================= */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <span className="flex items-center justify-center gap-2 text-[10px] md:text-xl font-semibold tracking-[0.18em] text-purple-700 sm:text-xs lg:justify-start lg:tracking-[0.2em]">
                STAY CONNECTED
              </span>

              <h2 className="mt-3 flex flex-wrap items-center justify-center gap-2 font-serif text-3xl leading-tight text-gray-900 sm:mt-4  lg:justify-start md:text-5  xl">
                <span>Be the First to</span>

                <span className="italic text-purple-700">Glow</span>

                <FaMagic className="h-5 w-5 shrink-0 text-purple-400 sm:h-6 sm:w-6" />
              </h2>

              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-500 sm:mt-5 sm:text-base lg:mx-0">
                Join our community and get skincare tips, expert advice &amp;
                exclusive updates.
              </p>

              {/* Privacy message */}
              <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-gray-400 sm:mt-6 lg:justify-start">
                <FaShieldAlt className="h-3.5 w-3.5 shrink-0 text-purple-400" />

                <span>No spam, ever. Unsubscribe anytime.</span>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex flex-col justify-center">
              {/* Section Heading */}
              <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
                <span className="h-px flex-1 bg-purple-900/10" />

                <span className="whitespace-nowrap text-[10px] font-semibold tracking-[0.15em] text-purple-700 sm:text-xs sm:tracking-[0.2em]">
                  OUR VALUES
                </span>

                <span className="h-px flex-1 bg-purple-900/10" />
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 overflow-hidden rounded-xl ring-1 ring-purple-900/[0.06] xs:grid-cols-2 sm:grid-cols-3 sm:rounded-2xl">
                {values.map(({ icon: Icon, label }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-b border-purple-900/[0.06] bg-white/40 px-4 py-4 transition hover:bg-white/80 sm:px-4 sm:py-5 lg:px-5 lg:py-6"
                  >
                    {/* Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-100/80 sm:h-10 sm:w-10">
                      <Icon className="h-4 w-4 text-purple-700 sm:h-[18px] sm:w-[18px]" />
                    </div>

                    {/* Text */}
                    <span className="whitespace-pre-line text-xs leading-snug text-gray-700 sm:text-sm">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
