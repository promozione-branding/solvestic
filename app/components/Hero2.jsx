"use client";

import { useEffect, useState } from "react";

const TimeBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="min-w-[65px] rounded-xl border border-white/60 bg-white/90 px-3 py-3 text-center shadow-lg backdrop-blur-sm sm:min-w-[85px] sm:px-5 sm:py-4 md:min-w-[105px] md:px-6">
      <span className="text-2xl font-bold tabular-nums text-[#B271C7] sm:text-3xl md:text-5xl">
        {String(value).padStart(2, "0")}
      </span>
    </div>

    <span className="mt-2 text-[9px] font-semibold uppercase tracking-widest text-black  md:text-base">
      {label}
    </span>
  </div>
);

function useCountdown(targetDate) {
  const calculate = () => {
    const diff = +targetDate - +new Date();

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return time;
}

export default function Hero2() {
  const target = new Date("2026-10-11T07:42:36");

  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 md:py-24">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://pub-08fb7f5808604480adbbb24bfad1d050.r2.dev/what%20our%20Skin%20deals%20with%20(2).mp4" type="video/mp4" />
      </video>

      {/* Video Overlay */}

      {/* Soft decorative circles */}
      <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute inset-0 bg-white/30" />
        
      <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#B271C7]/10 blur-3xl" />

      {/* Countdown */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8E5A9F] sm:mb-7 sm:text-sm md:text-base">
          Coming Soon
        </p>

        <div className="flex items-center gap-1.5 sm:gap-3 md:gap-5">
          <TimeBox value={days} label="Days" />

          <span className="pb-6 text-xl font-bold text-[#B271C7] sm:text-3xl md:text-4xl">
            :
          </span>

          <TimeBox value={hours} label="Hours" />

          <span className="pb-6 text-xl font-bold text-[#B271C7] sm:text-3xl md:text-4xl">
            :
          </span>

          <TimeBox value={minutes} label="Minutes" />

          <span className="pb-6 text-xl font-bold text-[#B271C7] sm:text-3xl md:text-4xl">
            :
          </span>

          <TimeBox value={seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}