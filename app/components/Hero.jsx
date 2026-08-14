"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaChevronDown,
  FaEnvelope,
  FaHeadphonesAlt,
  FaLock,
  FaPhoneAlt,
  FaSun,
  FaUser,
} from "react-icons/fa";
import { PiDropSimpleBold, PiSparkleFill } from "react-icons/pi";

const InputField = ({ icon: Icon, placeholder, type = "text" }) => (
  <div className="flex items-center gap-3 bg-white border border-purple-100 rounded-xl px-4 py-3 w-full focus-within:ring-2 focus-within:ring-purple-200 transition">
    <Icon className="text-purple-900/70 shrink-0" size={16} />
    <input
      type={type}
      placeholder={placeholder}
      className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent"
    />
  </div>
);

const SelectField = ({ icon: Icon, label, options }) => (
  <div className="relative flex items-center gap-3 bg-white border border-purple-100 rounded-xl px-4 py-3 w-full">
    <Icon className="text-purple-900/70 shrink-0" size={16} />
    <select
      defaultValue=""
      className="w-full outline-none text-sm text-gray-400 bg-transparent appearance-none cursor-pointer"
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="text-gray-700">
          {opt}
        </option>
      ))}
    </select>
    <FaChevronDown className="text-gray-400 shrink-0" size={12} />
  </div>
);

const ConcernCard = ({ icon: Icon, label, className = "" }) => (
  <div
    className={`absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md px-3 py-1.5 flex items-center gap-1.5 whitespace-nowrap ${className}`}
  >
    <Icon className="text-purple-900" size={12} />
    <span className="text-[11px] sm:text-xs font-medium text-gray-800">
      {label}
    </span>
  </div>
);

const TimeBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white  px-4 sm:px-6 py-3 sm:py-4 shadow-md min-w-[70px] sm:min-w-[90px] text-center">
      <span className="text-2xl sm:text-3xl font-bold text-purple-900 tabular-nums">
        {value}
      </span>
    </div>
    <span className="text-[10px] sm:text-xs tracking-wide text-white mt-2 font-semibold">
      {label}
    </span>
  </div>
);

function useCountdown(targetDate) {
  const calculate = () => {
    const diff = +targetDate - +new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
}

const pad = (n) => String(n).padStart(2, "0");

export default function Hero() {
  const target = new Date("2026-10-11T07:42:36");
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <>
      <div className="w-full ">
        <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-0 md:pt-3 pb-2 md:pb-7 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy + form */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#ad51c1] leading-tight">
              Real Skin.
              <br />
              Real Solutions.
              <br />
              <span className="italic font-serif text-pink-400 font-semibold">
                Coming Soon.
              </span>
            </h1>
            <p className="text-gray-500 mt-5 max-w-md leading-relaxed">
              Solvestic is on a mission to solve the most common Indian skin
              concerns with science-backed care.
            </p>

            <div className="flex items-center gap-3 mt-8 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-purple-300 flex items-center justify-center">
                <FaUser className="text-purple-900" size={14} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Get early access & Unlock Your offers
                </p>
                <p className="text-xs text-gray-500">
                  Be the first to know when we launch!
                </p>
              </div>
            </div>

            <form
              // onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 max-w-lg"
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <InputField icon={FaUser} placeholder="Full Name" />
                <InputField
                  icon={FaEnvelope}
                  placeholder="Email Address"
                  type="email"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <InputField
                  icon={FaHeadphonesAlt}
                  placeholder="Phone Number"
                  type="tel"
                />
                <SelectField
                  icon={PiSparkleFill}
                  label="Skin Concern"
                  options={["Pigmentation", "Dryness", "Dull & Uneven Skin"]}
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-[#ad51c1] hover:bg-purple-900 transition text-white font-medium rounded-xl py-3.5 flex items-center justify-center gap-2"
              >
                Join Waitlist <FaArrowRight size={14} />
              </button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-1">
                <FaLock size={10} /> No spam. Only skin &amp; launch updates.
              </p>
            </form>
          </div>

          {/* Right: images */}
          <div className="relative  ">
            <Image
              fill
              src="/bg.png"
              className="absolute inset-0 z-0 w-full h-full object-cover object-center scale-105 md:scale-130"
              alt="bg"
            />

            {/* Heading */}
            <div className="relative z-10">
              <p className="text-center z-50 pl-2 lg:text-left text-lg sm:text-xl font-semibold text-purple-950 mb-6">
                We&apos;re here for every
                <br />
                skin concern{" "}
                <span className="relative  z-50 inline-block">
                  you face.
                  <span className="absolute z-50 left-0 -bottom-1 w-full h-0.5 bg-pink-300 rounded-full" />
                </span>
              </p>
            </div>

            {/* BLOBS */}

            {/* IMAGES */}
            <div>
              <div className="absolute  h-58 md:h-109 w-full z-50 flex justify-center items-center gap-5 ">
                <TimeBox value={pad(days)} label="DAYS" />
                <span className="text-white font-bold text-xl mb-5">
                  :
                </span>
                <TimeBox value={pad(hours)} label="HOURS" />
                <span className="text-white font-bold text-xl mb-5 ">
                  :
                </span>
                <TimeBox value={pad(minutes)} label="MINUTES" />
              </div>
              <div className="relative z-40 flex justify-center items-end ">
                {[
                  {
                    img: "/leftimg.jpeg",
                    icon: FaSun,
                    label: "Pigmentation",
                  },
                  {
                    img: "/centerimg.jpeg",
                    icon: PiDropSimpleBold,
                    label: "Dryness",
                  },
                  {
                    img: "/rightimg.jpeg",
                    icon: PiSparkleFill,
                    label: "Glow & Shine",
                  },
                ].map((item, i) => (
                  <>
                    <div
                      key={i}
                      className={`
          relative
          w-[100px] h-[180px]
         
          md:w-[180px] md:h-[420px]
          
          overflow-hidden
         
        `}
                    >
                      <Image
                        height={100}
                        width={100}
                        src={item.img}
                        alt={item.label}
                        className="w-full h-full object-cover"
                      />

                      {/* <ConcernCard icon={item.icon} label={item.label} /> */}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
