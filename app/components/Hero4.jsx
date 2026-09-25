"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Fredoka } from "next/font/google";
import MobileStickyFooter from "./MobileStickyFooter";

/* =========================================================
   FONT
========================================================= */

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

/* =========================================================
   TARGET DATE
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

/* =========================================================
   PAD NUMBER
========================================================= */

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
          text-[clamp(1.6rem,3vw,3rem)]
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
          text-[7px]
          font-semibold
          tracking-[0.2em]
          text-[#563477]
          sm:text-[9px]
          md:text-[10px]
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

  const [waitlistClicked, setWaitlistClicked] =
    useState(false);

  const [isTablet, setIsTablet] =
    useState(false);

  /* =======================================================
     TABLET DETECTION
  ======================================================= */

  useEffect(() => {
    const checkTablet = () => {
      const width = window.innerWidth;

      setIsTablet(
        width >= 768 && width < 1024
      );
    };

    checkTablet();

    window.addEventListener(
      "resize",
      checkTablet
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkTablet
      );
    };
  }, []);

  /* =======================================================
     COUNTDOWN
  ======================================================= */

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
      /* -----------------------------------------------
         ANIMATED GLOW
      ------------------------------------------------ */

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.08,
          opacity: 0.65,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      /* -----------------------------------------------
         MOUSE MOVEMENT
      ------------------------------------------------ */

      const handleMouseMove = (event) => {
        if (!heroRef.current) return;

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

        if (contentRef.current) {
          gsap.to(contentRef.current, {
            x: x * 6,
            y: y * 4,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        }

        if (glowRef.current) {
          gsap.to(glowRef.current, {
            x: x * -15,
            y: y * -8,
            duration: 1,
            ease: "power3.out",
            overwrite: "auto",
          });
        }
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
        bg-white
      "
    >

      {/* =====================================================
          DESKTOP + TABLET HERO
          
          SAME DESIGN ON BOTH
          
          60% IMAGE
          40% CONTENT
      ====================================================== */}

      <div
        className="
          relative
          hidden
          w-full
          overflow-hidden
          bg-white

          sm:flex
          sm:flex-row

          sm:min-h-[500px]
          md:min-h-[540px]
          lg:min-h-[600px]
          xl:min-h-[650px]
        "
      >

        {/* =================================================
            IMAGE — 60%
        ================================================== */}

        <div
          className="
            relative
            h-auto
            min-h-[500px]
            w-[60%]
            shrink-0
            overflow-hidden

            md:min-h-[540px]
            lg:min-h-[600px]
            xl:min-h-[650px]
          "
        >
          <Image
            src="/solvesticnewbanner.png"
            alt="Solvestic skincare"
            fill
            priority
            sizes="60vw"
            className="
              object-cover
              object-center
            "
          />
        </div>

        {/* =================================================
            CONTENT — 40%
        ================================================== */}

        <div
          ref={contentRef}
          className="
            relative
            z-20
            flex
            h-auto
            min-h-[500px]
            w-[40%]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            bg-white

            px-5
            py-8

            md:min-h-[540px]
            md:px-7
            md:py-10

            lg:min-h-[600px]
            lg:px-8
            lg:py-12

            xl:min-h-[650px]
            xl:px-12
          "
        >

          {/* =================================================
              GLOW
          ================================================== */}

          <div
            ref={glowRef}
            className="
              pointer-events-none
              absolute
              right-[-80px]
              top-[15%]

              h-[220px]
              w-[220px]

              rounded-full
              bg-[#E8D8F5]
              opacity-40
              blur-[80px]

              md:h-[280px]
              md:w-[280px]

              lg:h-[320px]
              lg:w-[320px]

              xl:h-[350px]
              xl:w-[350px]
            "
          />

          {/* =================================================
              CONTENT WRAPPER
          ================================================== */}

          <div
            className="
              relative
              z-10
              flex
              w-full
              max-w-[500px]
              flex-col
              items-center
              text-center
            "
          >

            {/* =================================================
                HEADING
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mb-5
                w-full

                md:mb-6
              "
            >
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mx-auto
                  w-full
                  text-start

                  text-[clamp(2rem,3.5vw,3.5rem)]

                  font-semibold
                  leading-[0.9]
                  tracking-[-0.03em]
                  text-black
                "
              >
                For the
                <br />
                skin-smart
                <br />
                generation
              </motion.h1>
            </motion.div>

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
                w-full
                max-w-[430px]
                rounded-[24px]
                border
                border-white
                bg-white/70
                px-2
                py-4

                shadow-[0_20px_60px_rgba(60,20,100,0.12)]

                backdrop-blur-xl

                md:px-4
                md:py-5

                lg:px-5
                lg:py-6
              "
            >

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-1

                  md:gap-2
                  lg:gap-3
                "
              >

                <TimerItem
                  value={pad(days)}
                  label="DAYS"
                />

                <div
                  className="
                    h-8
                    w-px
                    bg-[#7650A0]/25

                    md:h-10
                    lg:h-12
                  "
                />

                <TimerItem
                  value={pad(hours)}
                  label="HOURS"
                />

                <div
                  className="
                    h-8
                    w-px
                    bg-[#7650A0]/25

                    md:h-10
                    lg:h-12
                  "
                />

                <TimerItem
                  value={pad(minutes)}
                  label="MINUTES"
                />

                <div
                  className="
                    h-8
                    w-px
                    bg-[#7650A0]/25

                    md:h-10
                    lg:h-12
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

            <motion.a
              href="#form"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 18px 45px rgba(84,33,140,0.30)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => {
                if (isTablet) {
                  setWaitlistClicked(true);
                }
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className={`
                group
                mt-6

                flex
                w-fit
                items-center
                justify-center
                gap-3
                text-center

                rounded-full

                px-5
                py-3

                text-[11px]
                font-semibold
                uppercase
                tracking-[0.08em]

                text-white

                shadow-[0_12px_30px_rgba(90,35,150,0.25)]

                transition-all
                duration-300

                md:mt-7
                md:gap-4
                md:px-7
                md:py-3.5
                md:text-xs

                lg:px-8
                lg:py-4
                lg:text-sm

                ${
                  isTablet && waitlistClicked
                    ? "bg-[#FD83FF]"
                    : "bg-[#7D45C2] hover:bg-[#FD83FF]"
                }
              `}
            >
              JOIN WAITLIST

              <span
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-2

                  md:text-xl
                "
              >
                →
              </span>
            </motion.a>

          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE HERO
          
          BELOW 768px ONLY
      ====================================================== */}

      <div
        className="
          block
          w-full
          overflow-hidden
          bg-white
          sm:hidden
        "
      >

        {/* =================================================
            MOBILE IMAGE
        ================================================== */}

        <div
          className="
            relative
            h-[360px]
            w-full
            overflow-hidden
          "
        >
          <Image
            src="/mobileBanner.png"
            alt="For the skin-smart generation"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />
        </div>

        {/* =================================================
            MOBILE CONTENT
        ================================================== */}

        <div
          className="
            relative
            flex
            w-full
            items-center
            justify-center
            overflow-hidden
            bg-white
            px-5
            py-10
          "
        >

          {/* MOBILE GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-100px]
              top-[10%]
              h-[250px]
              w-[250px]
              rounded-full
              bg-[#E8D8F5]
              opacity-40
              blur-[90px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              w-full
              max-w-[500px]
              flex-col
              items-center
              text-center
            "
          >

            {/* MOBILE HEADING */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                text-center
                text-[clamp(2.3rem,11vw,3.2rem)]
                font-semibold
                leading-[0.9]
                tracking-[-0.03em]
                text-black
              "
            >
              For the
              <br />
              skin-smart
              <br />
              generation
            </motion.h1>

            {/* MOBILE COUNTDOWN */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mt-7
                w-full
                rounded-[22px]
                border
                border-white
                bg-white/70
                px-3
                py-5
                shadow-[0_20px_60px_rgba(60,20,100,0.12)]
                backdrop-blur-xl
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-1
                "
              >

                <TimerItem
                  value={pad(days)}
                  label="DAYS"
                />

                <div
                  className="
                    h-8
                    w-px
                    bg-[#7650A0]/25
                  "
                />

                <TimerItem
                  value={pad(hours)}
                  label="HOURS"
                />

                <div
                  className="
                    h-8
                    w-px
                    bg-[#7650A0]/25
                  "
                />

                <TimerItem
                  value={pad(minutes)}
                  label="MINUTES"
                />

                <div
                  className="
                    h-8
                    w-px
                    bg-[#7650A0]/25
                  "
                />

                <TimerItem
                  value={pad(seconds)}
                  label="SECONDS"
                />

              </div>
            </motion.div>

            {/* MOBILE BUTTON */}

            <motion.a
              href="#form"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
              className="
                group
                mt-7
                flex
                w-full
                max-w-[300px]
                items-center
                justify-center
                gap-5
                rounded-full
                bg-[#7D45C2]
                px-8
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.1em]
                text-white
                shadow-[0_12px_30px_rgba(90,35,150,0.25)]
                transition-all
                duration-300
                hover:bg-[#FD83FF]
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
            </motion.a>

          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE STICKY FOOTER
      ====================================================== */}

      <MobileStickyFooter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />

    </section>
  );
}