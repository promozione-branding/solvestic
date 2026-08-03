"use client"
import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaChevronDown,
  FaLock,
  FaArrowRight,
  FaGift,
  FaTags,
  FaRegSmile,
  FaBell,
  FaSun,
  FaSmog,
  FaTint,
  FaThermometerHalf,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import { PiDropSimpleBold, PiSparkleFill } from "react-icons/pi";

// ---------- Countdown Hook ----------
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return time;
}

const pad = (n) => String(n).padStart(2, "0");

// ---------- Reusable Bits ----------
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

const WhyCard = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-3 sm:flex-col sm:items-start">
    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
      <Icon className="text-purple-900" size={18} />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 text-[15px]">{title}</h4>
      <p className="text-sm text-gray-500 mt-1 leading-snug">{desc}</p>
    </div>
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

const UnderstandItem = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center gap-3">
    <Icon className="text-purple-900" size={30} />
    <h4 className="font-semibold text-gray-900 text-[15px]">{title}</h4>
    <p className="text-sm text-gray-500 leading-snug">{desc}</p>
  </div>
);

const TimeBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/10 border border-white/20 rounded-xl px-3 sm:px-5 py-2 sm:py-3 min-w-[62px] sm:min-w-[80px] text-center">
      <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
        {value}
      </span>
    </div>
    <span className="text-[10px] sm:text-xs tracking-wide text-purple-200 mt-1.5 font-medium">
      {label}
    </span>
  </div>
);

const PurposeIcon = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <Icon className="text-purple-900" size={22} />
    <span className="text-xs text-gray-600 leading-tight">{label}</span>
  </div>
);

// ---------- Main Component ----------
export default function Homey() {
  // Launch date ~18 days from now to mirror the reference countdown
  const target = new Date();
  target.setDate(target.getDate() + 18);
  target.setHours(target.getHours() + 7, target.getMinutes() + 42, 36);

  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <div className="bg-[#fdf3f6] min-h-screen w-full font-sans">
      {/* ---------- Header ---------- */}
      <header className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 pt-8 pb-2">
        <div className="flex items-baseline">
          <span className="text-2xl sm:text-3xl font-bold text-purple-950">
            solvestic
          </span>
          <span className="text-pink-500 text-2xl sm:text-3xl font-bold">
            .
          </span>
        </div>
        <div className="hidden sm:block text-right">
          <p className="text-sm text-gray-600">
            Skincare that understands Indian skin
          </p>
          <div className="h-0.5 w-16 bg-gradient-to-r from-pink-400 to-purple-400 ml-auto mt-1 rounded-full" />
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-16 grid lg:grid-cols-2 gap-12 items-center">
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
            onSubmit={(e) => e.preventDefault()}
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
                icon={FaPhoneAlt}
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
                img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=600&auto=format&fit=crop",
                icon: FaSun,
                label: "Pigmentation",
                rotate: "-rotate-3",
              },
              {
                img: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?q=80&w=600&auto=format&fit=crop",
                icon: PiDropSimpleBold,
                label: "Dryness",
                rotate: "rotate-1",
              },
              {
                img: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=600&auto=format&fit=crop",
                icon: PiSparkleFill,
                label: "Dull & Uneven Skin",
                rotate: "rotate-3",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative w-24 sm:w-36 h-56 sm:h-80 rounded-2xl overflow-hidden shadow-lg ${item.rotate}`}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
                <ConcernCard icon={item.icon} label={item.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why Join ---------- */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 border-t border-purple-100/70">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-purple-950 mb-10">
          Why Join the Solvestic Waitlist?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <WhyCard
            icon={FaGift}
            title="Early Access"
            desc="Be the first to explore our exclusive skincare range."
          />
          <WhyCard
            icon={FaTags}
            title="Exclusive Offers"
            desc="Special launch discounts only for our waitlist tribe."
          />
          <WhyCard
            icon={FaRegSmile}
            title="Skin Solutions"
            desc="Personalized tips & solutions for your skin concerns."
          />
          <WhyCard
            icon={FaBell}
            title="Launch Updates"
            desc="Get notified the moment we go live."
          />
        </div>
      </section>

      {/* ---------- We Understand Indian Skin ---------- */}
      <section className="bg-purple-50/60 py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-purple-950 mb-12">
            We Understand Indian Skin
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
            <UnderstandItem
              icon={FaSun}
              title="Harsh Sun"
              desc="Leads to tanning & pigmentation"
            />
            <UnderstandItem
              icon={FaSmog}
              title="Pollution"
              desc="Causes dullness & clogged pores"
            />
            <UnderstandItem
              icon={FaTint}
              title="Hard Water"
              desc="Makes skin dry & flaky"
            />
            <UnderstandItem
              icon={FaThermometerHalf}
              title="Extreme Weather"
              desc="Weakens skin barrier & causes sensitivity"
            />

            <div className="sm:col-span-2 lg:col-span-1 bg-white rounded-2xl p-6 relative overflow-hidden border border-purple-100">
              <FaLeaf className="absolute -bottom-4 -right-4 text-purple-100" size={90} />
              <h4 className="font-semibold text-gray-900 relative z-10">
                Formulated for
              </h4>
              <h3 className="text-lg font-bold text-purple-950 relative z-10 mb-3">
                Indian Skin
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed relative z-10">
                Thoughtfully created with safe ingredients that work with our
                climate, lifestyle &amp; skin type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Countdown + Purpose ---------- */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-2 gap-6">
        {/* Countdown */}
        <div className="bg-purple-950 rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-bold">
              Launching Soon
            </h3>
            <p className="text-purple-200 text-sm mt-1">
              Great skin is just around the corner.
            </p>
            <div className="h-0.5 w-14 bg-pink-400 rounded-full mt-3 mb-7" />
          </div>
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <TimeBox value={pad(days)} label="DAYS" />
            <span className="text-white/40 text-xl pb-4">:</span>
            <TimeBox value={pad(hours)} label="HOURS" />
            <span className="text-white/40 text-xl pb-4">:</span>
            <TimeBox value={pad(minutes)} label="MINUTES" />
            <span className="text-white/40 text-xl pb-4">:</span>
            <TimeBox value={pad(seconds)} label="SECONDS" />
          </div>
        </div>

        {/* Skincare with Purpose */}
        <div className="bg-white rounded-2xl p-7 sm:p-8 border border-purple-100">
          <div className="w-12 h-12 rounded-full border-2 border-purple-200 flex items-center justify-center mb-4">
            <FaHeart className="text-purple-900" size={16} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Skincare with Purpose
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            At Solvestic, we believe in honest skincare that delivers real
            results – because healthy, glowing skin builds confidence.
          </p>
          <div className="grid grid-cols-4 gap-3">
            <PurposeIcon icon={FaLeaf} label="Safe Ingredients" />
            <PurposeIcon icon={FaLeaf} label="Dermatologically Considered" />
            <PurposeIcon icon={FaLeaf} label="Cruelty Free" />
            <PurposeIcon icon={FaLeaf} label="Made for Indian Skin" />
          </div>
        </div>
      </section>

      {/* ---------- Stay in the loop ---------- */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 border-t border-purple-100/70 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-900">Stay in the loop</h4>
          <p className="text-sm text-gray-500 mt-1 max-w-xs">
            Follow us for skincare tips, expert advice &amp; exciting updates.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-full border border-purple-200 flex items-center justify-center">
              <FaInstagram className="text-purple-900" size={16} />
            </div>
            <span className="text-xs text-gray-500">Instagram</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-full border border-purple-200 flex items-center justify-center">
              <FaFacebookF className="text-purple-900" size={16} />
            </div>
            <span className="text-xs text-gray-500">Facebook</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-full border border-purple-200 flex items-center justify-center">
              <FaYoutube className="text-purple-900" size={16} />
            </div>
            <span className="text-xs text-gray-500">YouTube</span>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-purple-950 text-purple-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="flex items-baseline justify-center sm:justify-start">
              <span className="text-xl font-bold text-white">solvestic</span>
              <span className="text-pink-400 text-xl font-bold">.</span>
            </div>
            <p className="text-xs mt-1">
              Science-backed skincare.
              <br className="hidden sm:block" /> Made for Indian skin.
            </p>
          </div>
          <p className="text-xs">© 2026 Solvestic. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span className="text-purple-700">|</span>
            <a href="#" className="hover:text-white transition">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}