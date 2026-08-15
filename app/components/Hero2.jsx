"use client";

import { useEffect, useState } from "react";

const TimeBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-5 md:px-6 py-3 sm:py-4 shadow-lg min-w-[65px] sm:min-w-[85px] md:min-w-[105px] text-center border border-white/60">
      <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#B271C7] tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
    </div>

    <span className="text-[9px] sm:text-xs md:text-sm tracking-widest text-[#8E5A9F] mt-2 font-semibold uppercase">
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
    <section className="relative w-full bg-[#EFDFE5] py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Soft decorative circles */}
      <div className="absolute -top-20 -left-20 w-52 h-52 bg-white/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-20 w-64 h-64 bg-[#B271C7]/10 rounded-full blur-3xl" />

      {/* Countdown */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="text-[#8E5A9F] text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-5 sm:mb-7">
          Coming Soon
        </p>

        <div className="flex items-center gap-1.5 sm:gap-3 md:gap-5">
          <TimeBox value={days} label="Days" />

          <span className="text-[#B271C7] text-xl sm:text-3xl md:text-4xl font-bold pb-6">
            :
          </span>

          <TimeBox value={hours} label="Hours" />

          <span className="text-[#B271C7] text-xl sm:text-3xl md:text-4xl font-bold pb-6">
            :
          </span>

          <TimeBox value={minutes} label="Minutes" />

          <span className="text-[#B271C7] text-xl sm:text-3xl md:text-4xl font-bold pb-6">
            :
          </span>

          <TimeBox value={seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}