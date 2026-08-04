"use client";
import React, { useEffect, useState } from "react";

const TimeBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-md min-w-[70px] sm:min-w-[90px] text-center">
      <span className="text-2xl sm:text-3xl font-bold text-purple-900 tabular-nums">
        {value}
      </span>
    </div>
    <span className="text-[10px] sm:text-xs tracking-wide text-purple-700 mt-2 font-semibold">
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

export default function Countdown() {
  const target = new Date("2026-10-11T07:42:36");
  const { days, hours, minutes, seconds } = useCountdown(target);
  return (
    <section className="w-full px-4  py-2 ">
      <div className="max-w-7xl mx-auto">
        {/* Gradient Card */}
        <div className="rounded-3xl p-5 md:p-6  bg-gradient-to-r from-purple-100 via-purple-200 to-pink-100 shadow-lg">
          {/* Top Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Text */}
            <div className="text-center lg:text-left">
              <p className="text-xs md:text-lg font-semibold text-pink-500 tracking-wide uppercase">
                Launching Soon
              </p>
              <h2 className="text-lg md:text-4xl font-bold text-purple-900 mt-1">
                Something Beautiful <br className="hidden sm:block" /> is on the
                way! 💜
              </h2>
            </div>

            {/* Countdown */}
            <div className="flex justify-center items-center gap-2 sm:gap-4">
              <TimeBox value={pad(days)} label="DAYS" />
              <span className="text-purple-500 font-bold text-xl mb-5">:</span>
              <TimeBox value={pad(hours)} label="HOURS" />
              <span className="text-purple-500 font-bold text-xl mb-5 ">:</span>
              <TimeBox value={pad(minutes)} label="MINUTES" />
              <span className="text-purple-500 font-bold text-xl mb-5">:</span>
                <TimeBox value={pad(seconds)} label="SECONDS" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
