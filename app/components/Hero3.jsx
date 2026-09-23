"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Fredoka } from "next/font/google";
import MobileStickyFooter from "./MobileStickyFooter";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

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
          text-[clamp(2rem,4vw,3.2rem)]
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

  /* =======================================================
     WAITLIST TABLET STATE
  ======================================================= */

  const [waitlistClicked, setWaitlistClicked] =
    useState(false);

  const [isTablet, setIsTablet] =
    useState(false);

  /* =======================================================
     DETECT TABLET ONLY
     
     Tablet:
     768px - 1023px
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
      className="relative w-full overflow-hidden bg-[#fff]"
    >
      {/* =====================================================
          DESKTOP / TABLET BANNER
      ====================================================== */}

      <div
        className="
          hidden
          relative
          h-[520px]
          w-full
          sm:block
          sm:h-[560px]
          md:h-[620px]
          lg:h-[680px]
          xl:h-[600px]
        "
      >
        {/* =================================================
            BACKGROUND IMAGE
        ================================================== */}

        <Image
          src="/WEB BANNER SOLVESTIC .png"
          alt="Solvestic skincare"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left sm:object-center"
        />

        {/* =================================================
            RIGHT SIDE SOFT OVERLAY
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
          "
        />

        {/* =================================================
            SUBTLE GLOW
        ================================================== */}

        <div
          ref={glowRef}
          className="
            pointer-events-none
            absolute
            right-[15%]
            top-[20%]
            h-[280px]
            w-[280px]
            rounded-full
            blur-[90px]
            sm:h-[350px]
            sm:w-[350px]
          "
        />

        {/* =================================================
            RIGHT CONTENT
        ================================================== */}

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
            justify-end
            px-4
            sm:px-10
            md:px-14
            lg:px-20
            xl:px-0
            sm:ml-4
          "
        >
          <div
            className="
              flex
              w-full
              max-w-[570px]
              flex-col
              items-center
              text-center
              lg:mr-[2%]
              xl:mr-[2%]
            "
          >
            {/* =================================================
                TAGLINE
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
              className="relative mb-8"
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
                  w-full
                  max-w-[520px]
                  px-10
                  text-left
                  text-[clamp(3rem,5vw,3.2rem)]
                  font-semibold
                  leading-[0.88]
                  tracking-[-0.030em]
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
                mt-2
                ml-10
                w-full
                max-w-[520px]
                rounded-[24px]
                border
                border-white/80
                bg-white/40
                py-5
                shadow-[0_20px_60px_rgba(60,20,100,0.12)]
                backdrop-blur-xl
                sm:px-7
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
                  gap-2
                  sm:gap-4
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
                    bg-[#7650A0]/25
                    sm:h-14
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
                    bg-[#7650A0]/25
                    sm:h-14
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
                    bg-[#7650A0]/25
                    sm:h-14
                  "
                />

                <TimerItem
                  value={pad(seconds)}
                  label="SECONDS"
                />
              </div>
            </motion.div>

            {/* =================================================
                JOIN WAITLIST BUTTON
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
                /*
                 * ONLY tablet gets the
                 * clicked pink state.
                 */
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
                mt-7
                ml-10
                flex
                w-fit
                items-center
                justify-center
                gap-5
                rounded-full
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
                sm:px-10
                sm:py-4
                sm:text-base

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
          MOBILE BANNER
      ====================================================== */}

      <div
        className="
          relative
          block
          h-[400px]
          w-full
          overflow-hidden
          sm:hidden
        "
      >
        <Image
          src="/mobileBanner.png"
          alt="For the skin-smart generation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
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