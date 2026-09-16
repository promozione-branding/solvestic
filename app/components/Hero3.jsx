"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

/* =========================================================
   COUNTDOWN DATE
========================================================= */

const TARGET_DATE = new Date("2026-10-20T07:42:36");

/* =========================================================
   COUNTDOWN HOOK
========================================================= */

function useCountdown(targetDate) {
  const calculateTime = () => {
    const difference = targetDate.getTime() - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return time;
}

const pad = (value) =>
  String(value).padStart(2, "0");

/* =========================================================
   TIMER ITEM
========================================================= */

function TimerItem({ value, label }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center">
      <motion.div
        key={value}
        initial={{
          opacity: 0.5,
          y: 5,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          tabular-nums
          text-[clamp(2rem,4vw,4.2rem)]
          font-semibold
          leading-none
          tracking-[-0.05em]
          text-[#2D1557]
        "
      >
        {value}
      </motion.div>

      <span
        className="
          mt-2
          text-[8px]
          font-semibold
          tracking-[0.25em]
          text-[#563477]
          sm:text-[10px]
          md:text-xs
        "
      >
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero3() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const glowRef = useRef(null);

  const {
    days,
    hours,
    minutes,
    seconds,
  } = useCountdown(TARGET_DATE);

  /* =======================================================
     GSAP
  ======================================================= */

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      /* Soft animated glow */
      gsap.to(glowRef.current, {
        scale: 1.08,
        opacity: 0.65,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      /* Subtle mouse movement */
      const handleMouseMove = (event) => {
        const rect =
          heroRef.current.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
          rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
          rect.height -
          0.5;

        gsap.to(contentRef.current, {
          x: x * 8,
          y: y * 5,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
        });

        gsap.to(glowRef.current, {
          x: x * -15,
          y: y * -8,
          duration: 1,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      window.addEventListener(
        "mousemove",
        handleMouseMove
      );

      return () => {
        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#A980D7]
      "
    >
      {/* =====================================================
          BANNER
          REDUCED HEIGHT
      ====================================================== */}

      <div
        className="
          relative
          h-[520px]
          w-full
          sm:h-[560px]
          md:h-[590px]
          lg:h-[620px]
          xl:h-[650px]
        "
      >
        {/* ===================================================
            YOUR COMPLETE BACKGROUND IMAGE
        ==================================================== */}

        <Image
          src="/WhatsApp Image 2026-09-16 at 3.41.14 PM.jpeg"
          alt="Solvestic skincare"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />

        {/* ===================================================
            LEFT SIDE LIGHT GRADIENT

            Keeps text readable without covering
            the product on the right.
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-white/35
            via-white/5
            to-transparent
          "
        />

        {/* ===================================================
            SOFT PURPLE GLOW
        ==================================================== */}

        <div
          ref={glowRef}
          className="
            pointer-events-none
            absolute
            left-[5%]
            top-[18%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#DDBBFF]/25
            blur-[80px]
            sm:h-[330px]
            sm:w-[330px]
          "
        />

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div
          ref={contentRef}
          className="
            relative
            z-20
            mx-auto
            flex
            h-full
            w-full
            max-w-[1600px]
            items-center
            px-6
            sm:px-10
            lg:px-16
            xl:px-20
          "
        >
          <div
            className="
              w-full
              max-w-[700px]
              pt-2
              lg:w-[55%]
            "
          >
            {/* =================================================
                LOGO
            ================================================== */}

            {/* <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mb-5
                sm:mb-7
              "
            >
              <Image
                src="/newlogo1.png"
                alt="Solvestic"
                width={330}
                height={90}
                priority
                className="
                  h-auto
                  w-[150px]
                  sm:w-[180px]
                  md:w-[210px]
                "
              />
            </motion.div> */}

            {/* =================================================
                EXACT TEXT
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mb-3
                text-[11px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#301653]
                sm:text-sm
                md:text-base
              "
            >
              A NEW SKIN STORY BEGINS
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[clamp(2.7rem,5.8vw,6rem)]
                font-semibold
                uppercase
                leading-[0.88]
                tracking-[-0.06em]
                text-[#ad51c1]
              "
            >
              SOLVESTIC
              <span className="text-[#ff8ba9]">
                .
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="
                mt-3
                text-[clamp(1.2rem,2.4vw,2.4rem)]
                font-medium
                uppercase
                tracking-[0.12em]
                text-[#54218C]
              "
            >
              IS ON THE WAY
            </motion.p>

            {/* =================================================
                COUNTDOWN
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-7
                w-full
                max-w-[650px]
                rounded-[20px]
                border
                border-white/70
                bg-white/45
                px-4
                py-5
                shadow-[0_15px_45px_rgba(60,20,100,0.12)]
                backdrop-blur-xl
                sm:mt-8
                sm:px-6
                sm:py-6
                md:px-8
                md:py-7
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-1
                  sm:gap-3
                "
              >
                <TimerItem
                  value={pad(days)}
                  label="DAYS"
                />

                <div
                  className="
                    h-10
                    w-px
                    bg-[#7650A0]/30
                    sm:h-14
                    md:h-16
                  "
                />

                <TimerItem
                  value={pad(hours)}
                  label="HOURS"
                />

                <div
                  className="
                    h-10
                    w-px
                    bg-[#7650A0]/30
                    sm:h-14
                    md:h-16
                  "
                />

                <TimerItem
                  value={pad(minutes)}
                  label="MINUTES"
                />

                <div
                  className="
                    h-10
                    w-px
                    bg-[#7650A0]/30
                    sm:h-14
                    md:h-16
                  "
                />

                <TimerItem
                  value={pad(seconds)}
                  label="SECONDS"
                />
              </div>
            </motion.div>

            {/* =================================================
                JOIN WAITLIST
            ================================================== */}

            <motion.button
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0 18px 40px rgba(84,33,140,0.35)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="
                group
                mt-5
                flex
                items-center
                justify-center
                gap-5
                rounded-full
                bg-[#7D45C2]
                px-8
                py-3.5
                text-sm
                font-semibold
                uppercase
                tracking-[0.08em]
                text-white
                shadow-[0_12px_30px_rgba(90,35,150,0.25)]
                sm:px-10
                sm:py-4
                sm:text-base
              "
            >
              JOIN WAITLIST

              <span
                className="
                  text-xl
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}