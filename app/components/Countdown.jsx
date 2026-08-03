"use client"
import React, { useEffect, useState } from 'react'
import { FaHeart, FaLeaf } from 'react-icons/fa'


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


export default function Countdown() {

 const target = new Date("2026-10-11T07:42:36");

  const { days, hours, minutes, seconds } = useCountdown(target);
  return (
    <div className='w-full'>
         <section className="max-w-7xl mx-auto px-5 py-7 md:py-14 grid lg:grid-cols-2 gap-6">
                {/* Countdown */}
                <div className="bg-purple-950 rounded-2xl p-7 sm:p-8 flex flex-col justify-evenly">
                  <div>
                    <h3 className="text-white text-center text-2xl sm:text-2xl font-bold">
                      Launching Soon
                    </h3>
                    <p className="text-purple-200 text-center text-base mt-1">
                      Great skin is just around the corner.
                    </p>
                    <div className='flex justify-center '>
                    <div className="h-0.5 w-14  bg-pink-400 rounded-full mt-3 mb-7" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-1 sm:gap-3">
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
    </div>
  )
}
