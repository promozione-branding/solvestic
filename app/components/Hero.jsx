import Image from "next/image";
import React from "react";
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

export default function Hero() {
  return (
    <>
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-0 md:pt-3 pb-2 md:pb-7 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy + form */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-950 leading-tight">
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
              <p className="font-semibold text-gray-900">Join the Waitlist</p>
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
              className="mt-2 bg-purple-950 hover:bg-purple-900 transition text-white font-medium rounded-xl py-3.5 flex items-center justify-center gap-2"
            >
              Join Waitlist <FaArrowRight size={14} />
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-1">
              <FaLock size={10} /> No spam. Only skin &amp; launch updates.
            </p>
          </form>
        </div>

        {/* Right: images */}
        <div className="relative">
          <p className="text-center lg:text-left text-lg sm:text-xl font-semibold text-purple-950 mb-6">
            We&apos;re here for every
            <br />
            skin concern{" "}
            <span className="relative inline-block">
              you face.
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-300 rounded-full" />
            </span>
          </p>

          <div className="relative flex justify-center gap-3 sm:gap-4">
            {/* decorative blob */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-purple-200/40 rounded-full blur-2xl" />
            </div>

            {[
              {
                img: "/face1.webp",
                icon: FaSun,
                label: "Pigmentation",
                rotate: "rotate-3",
              },
              {
                img: "/face2.webp",
                icon: PiDropSimpleBold,
                label: "Dryness",
                rotate: "rotate-3",
              },
              {
                img: "/face3.webp",
                icon: PiSparkleFill,
                label: "Glow & Shine",
                rotate: "rotate-3",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative md:h-[420px] w-30 md:w-[190px] hover:scale-105 transition-transform duration-150  md:rounded-2xl overflow-hidden  ${item.rotate}`}
              >
                <img
                  src={item.img}
                  height={1000}
                  width={1000}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
                <ConcernCard icon={item.icon} label={item.label} />
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
