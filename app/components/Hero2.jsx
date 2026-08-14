"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TimeBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/85 backdrop-blur-sm rounded-lg px-3 sm:px-5 py-2 sm:py-3 shadow-md min-w-[58px] sm:min-w-[80px] text-center">
      <span className="text-2xl  md:text-5xl font-bold text-[#B271C7] tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
    </div>

    <span className="text-[9px] sm:text-xs tracking-wide text-white mt-1.5 font-semibold uppercase">
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
    <section className="relative w-full overflow-hidden">
      {/* Banner */}
      <picture className="bg-black/50">
        {/* Mobile */}
        <source
          media="(max-width: 767px)"
          srcSet="/mob3.webp"
        />
        {/* Desktop */}
        <div className="absolute inset-0 bg-black/10"></div>
        <Image
          src="/desk3.webp"
          alt="Hero Banner"
          width={1920}
          height={700}
          priority
          className="w-full  h-auto object-cover"
        />
      </picture>

      {/* Countdown Bottom */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-39 left-0 right-0">
        <div className="flex justify-center">
          <div className="flex justify-center">
  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
    <TimeBox value={days} label="Days" />

    <span className="text-[#B271C7]  text-xl sm:text-2xl md:text-3xl font-bold pb-5">
      :
    </span>

    <TimeBox value={hours} label="Hours" />

    <span className="text-[#B271C7] text-xl sm:text-2xl md:text-3xl font-bold pb-5">
      :
    </span>

    <TimeBox value={minutes} label="Minutes" />

    <span className="text-[#B271C7]  text-xl sm:text-2xl md:text-3xl font-bold pb-5">
      :
    </span>

    <TimeBox value={seconds} label="Seconds" />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}