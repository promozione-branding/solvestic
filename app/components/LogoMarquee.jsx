"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoMarquee() {
  const logos = [
    "/newlogo1.png",
    "/newlogo1.png",
    "/newlogo1.png",
    "/newlogo1.png",
    "/newlogo1.png",
    "/newlogo1.png",
    "/newlogo1.png",
    "/newlogo1.png",
    "/newlogo1.png",
    "/newlogo1.png",
  ];

  return (
  <div className="flex h-17 w-full items-center overflow-hidden bg-white">
  <motion.div
    className="flex w-max items-center"
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      x: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    }}
  >
    {/* First Set */}
    <div className="flex h-20 shrink-0 items-center">
      {logos.map((logo, index) => (
        <div
          key={`first-${index}`}
          className="flex h-20 w-52 shrink-0 items-center justify-center px-4 md:w-72"
        >
          <Image
            src={logo}
            alt={`Brand logo ${index + 1}`}
            width={300}
            height={150}
            priority={index < 3}
            className="h-auto w-[190px] object-contain sm:w-[220px] md:w-[270px]"
          />
        </div>
      ))}
    </div>

    {/* Duplicate Set */}
    <div
      className="flex h-20 shrink-0 items-center"
      aria-hidden="true"
    >
      {logos.map((logo, index) => (
        <div
          key={`second-${index}`}
          className="flex h-20 w-52 shrink-0 items-center justify-center px-4 md:w-72"
        >
          <Image
            src={logo}
            alt=""
            width={300}
            height={150}
            className="h-auto w-[190px] object-contain sm:w-[220px] md:w-[270px]"
          />
        </div>
      ))}
    </div>
  </motion.div>
</div>
  );
}