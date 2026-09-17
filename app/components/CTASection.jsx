"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaSnapchatGhost,
    FaTwitter,
} from "react-icons/fa";
import { ArrowUpRight, Sparkles } from "lucide-react";

const socials = [
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/solvesticcare" },
    { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61592286175717" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
    { name: "Snapchat", icon: FaSnapchatGhost, href: "#" },
];

export default function CTASection() {
    return (
        <section className="relative overflow-hidden bg-[#faf8ff] px-4 py-12">

            {/* Background glow */}
            <motion.div
                animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[280px]
                    w-[280px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#9b5de5]/15
                    blur-[90px]
                "
            />

            <div className="relative mx-auto max-w-4xl">

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        relative
                        overflow-hidden
                        rounded-[26px]
                        border
                        border-white
                        bg-white/75
                        px-5
                        py-8
                        shadow-[0_20px_60px_rgba(70,35,120,0.10)]
                        backdrop-blur-xl
                        sm:rounded-[30px]
                        sm:px-8
                        sm:py-10
                    "
                >

                    {/* Small icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.15,
                            type: "spring",
                            stiffness: 200,
                        }}
                        className="
                            mx-auto
                            mb-3
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#f0e8ff]
                            text-[#7442c8]
                        "
                    >
                        <Sparkles size={16} />
                    </motion.div>

                    {/* Heading */}
                    <div className="text-center">

                        <p className="
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                            text-[#7442c8]
                        ">
                            Stay Connected
                        </p>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="
                                mt-1.5
                                text-2xl
                                font-black
                                leading-tight
                                tracking-[-0.035em]
                                text-[#19151f]
                                sm:text-3xl
                            "
                        >
                            Let’s make something
                            <span className="
                                ml-1.5
                                bg-gradient-to-r
                                from-[#7442c8]
                                to-[#e54891]
                                bg-clip-text
                                text-transparent
                            ">
                                amazing.
                            </span>
                        </motion.h2>

                        <p className="
                            mx-auto
                            mt-2
                            max-w-md
                            text-xs
                            leading-5
                            text-[#817789]
                            sm:text-sm
                        ">
                            Follow Solvestic and stay updated with what’s next.
                        </p>

                    </div>

                    {/* Small CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 }}
                        className="mt-5 flex justify-center"
                    >
                        <motion.a
                            href="#form"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-[#1d1627]
                                px-4
                                py-2.5
                                text-xs
                                font-bold
                                text-white
                                shadow-[0_8px_20px_rgba(30,20,40,0.16)]
                            "
                        >
                            <span>Let's Connect</span>

                            <span className="
                                flex
                                h-5
                                w-5
                                items-center
                                justify-center
                                rounded-full
                                bg-white/10
                                transition-transform
                                duration-300
                                group-hover:rotate-45
                            ">
                                <ArrowUpRight size={12} />
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* Divider */}
                    <div className="
                        mx-auto
                        my-6
                        h-px
                        max-w-xs
                        bg-gradient-to-r
                        from-transparent
                        via-[#e4dbea]
                        to-transparent
                    " />

                    {/* Social heading */}
                    <div className="text-center">

                      

                        <p className="
                            text-[10px]
                            text-[#968c9f]
                        ">
                            Find us on social media
                        </p>

                    </div>

                    {/* Social icons */}
                    <div className="
                        mt-4
                        flex
                        items-center
                        justify-center
                        gap-2.5
                        sm:gap-3
                    ">

                        {socials.map((social, index) => {
                            const Icon = social.icon;

                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    initial={{
                                        opacity: 0,
                                        y: 12,
                                        scale: 0.8,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.45 + index * 0.06,
                                        type: "spring",
                                        stiffness: 220,
                                    }}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.08,
                                    }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-[#ebe5f1]
                                        bg-white
                                        text-[#665c70]
                                        shadow-[0_5px_15px_rgba(50,30,80,0.06)]
                                        transition-all
                                        duration-300
                                        hover:border-[#d9c8ec]
                                        hover:bg-[#f8f3ff]
                                        hover:text-[#7442c8]
                                        sm:h-10
                                        sm:w-10
                                    "
                                >
                                    <Icon className="text-[15px] sm:text-[17px]" />
                                </motion.a>
                            );
                        })}

                    </div>

                </motion.div>

            </div>
        </section>
    );
}