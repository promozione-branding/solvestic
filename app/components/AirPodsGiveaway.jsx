"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import {
    Gift,
    Trophy,
    Music2,
    Radio,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AirPodsGiveaway() {
    const [orders] = useState(73);

    const progress = (orders / 100) * 100;

    const visualRef = useRef(null);
    const boxRef = useRef(null);

    const lidRef = useRef(null);
    const airpodsRef = useRef(null);
    const glowRef = useRef(null);
    // const insideRef = useRef(null);

    const sparkleRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /*
            =====================================================
            INITIAL CLOSED STATE
            =====================================================
            */

            // Lid closed
            gsap.set(lidRef.current, {
                rotationX: 0,
                y: 0,
                z: 0,
                transformOrigin: "center bottom",
            });

            // AirPods hidden inside box
            gsap.set(airpodsRef.current, {
                y: 105,
                scale: 0.72,
                opacity: 0,
                rotate: -8,
            });

            // Inner glow hidden
            gsap.set(glowRef.current, {
                opacity: 0,
                scale: 0.35,
            });

            // Dark inside hidden
            // gsap.set(insideRef.current, {
            //     opacity: 0,
            // });

            // Sparkles hidden
            sparkleRefs.current.forEach((el) => {
                if (!el) return;

                gsap.set(el, {
                    opacity: 0,
                    scale: 0,
                });
            });

            /*
            =====================================================
            SCROLL ANIMATION
            =====================================================
            */

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: visualRef.current,
                    start: "top 78%",
                    end: "center 30%",
                    scrub: 1.1,
                },
            });

            // Small anticipation
            tl.to(
                boxRef.current,
                {
                    y: 4,
                    duration: 0.12,
                    ease: "power2.out",
                },
                0
            );

            // Open gift lid
            tl.to(
                lidRef.current,
                {
                    rotationX: -72,
                    y: -34,
                    z: 22,
                    duration: 0.7,
                    ease: "power3.out",
                },
                0.08
            );

            // Reveal inside
            // tl.to(
            //     insideRef.current,
            //     {
            //         opacity: 1,
            //         duration: 0.3,
            //         ease: "power2.out",
            //     },
            //     0.20
            // );

            // Glow
            tl.to(
                glowRef.current,
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out",
                },
                0.25
            );

            // AirPods rise
            tl.to(
                airpodsRef.current,
                {
                    y: -18,
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                    duration: 0.9,
                    ease: "back.out(1.5)",
                },
                0.32
            );

            // Sparkles
            sparkleRefs.current.forEach((el, index) => {
                if (!el) return;

                tl.to(
                    el,
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3,
                        ease: "back.out(2)",
                    },
                    0.58 + index * 0.07
                );
            });
        }, visualRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#FAF8FF] py-12 sm:py-16">

            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* =====================================================
                    HEADING
                ===================================================== */}

                <div className="mb-8 text-center">

                    <div
                        className="
                            mb-3
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-white
                            px-4
                            py-2
                            text-xs
                            font-bold
                            tracking-wider
                            text-[#704bbd]
                            shadow-sm
                        "
                    >
                        <Gift size={15} />
                        SOLVESTIC FIRST DROP
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-black
                            leading-tight
                            text-[#18151f]
                            sm:text-4xl
                        "
                    >
                        YOUR ORDER COULD COME

                        <span className="block text-[#704bbd]">
                            WITH AIRPODS.
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-3
                            max-w-xl
                            text-sm
                            text-[#746b80]
                            sm:text-base
                        "
                    >
                        Spend ₹1,999/- on the Solvestic First Drop
                        for a chance to win.
                    </p>

                </div>


                {/* =====================================================
                    MAIN CARD
                ===================================================== */}

                <div
                    className="
                        grid
                        overflow-hidden
                        rounded-[28px]
                        bg-white
                        shadow-[0_20px_60px_rgba(80,50,130,0.12)]
                        lg:grid-cols-[0.9fr_1.1fr]
                    "
                >

                    {/* =================================================
                        LEFT VISUAL
                    ================================================= */}

                    <div
                        ref={visualRef}
                        className="
                            relative
                            flex
                            min-h-[340px]
                            items-center
                            justify-center
                            overflow-hidden
                            bg-gradient-to-br
                            from-[#dfd2ff]
                            via-[#eee4ff]
                            to-[#fff0f7]
                            sm:min-h-[400px]
                        "
                    >

                        {/* Background glow */}

                        <div
                            className="
                                absolute
                                left-1/2
                                top-[38%]
                                h-[270px]
                                w-[270px]
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-[#a985ed]/20
                                blur-3xl
                            "
                        />


                        {/* =================================================
                            INSIDE BOX
                        ================================================= */}

                        {/* <div
                            ref={insideRef}
                            className="
                                absolute
                                bottom-[112px]
                                left-1/2
                                z-[8]
                                h-[80px]
                                w-[185px]
                                -translate-x-1/2
                                rounded-[50%]
                                bg-[#24113f]
                                opacity-0
                                shadow-[inset_0_8px_18px_rgba(0,0,0,0.65)]
                            "
                        /> */}


                        {/* =================================================
                            INNER GLOW
                        ================================================= */}

                        <div
                            ref={glowRef}
                            className="
                                absolute
                                bottom-[100px]
                                left-1/2
                                z-[9]
                                h-[150px]
                                w-[180px]
                                -translate-x-1/2
                                rounded-full
                                bg-white/80
                                opacity-0
                                blur-3xl
                            "
                        />


                        {/* =================================================
                            SPARKLES
                        ================================================= */}

                        <motion.span
                            ref={(el) => {
                                sparkleRefs.current[0] = el;
                            }}
                            className="
                                absolute
                                left-[15%]
                                top-[28%]
                                z-40
                                text-3xl
                                text-[#8054c8]
                            "
                            animate={{
                                rotate: [0, 20, -10, 0],
                                scale: [1, 1.15, 0.9, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            ✦
                        </motion.span>


                        <motion.span
                            ref={(el) => {
                                sparkleRefs.current[1] = el;
                            }}
                            className="
                                absolute
                                right-[17%]
                                top-[31%]
                                z-40
                                text-xl
                                text-[#a06bd3]
                            "
                            animate={{
                                rotate: [0, -25, 15, 0],
                                scale: [0.8, 1.2, 0.9, 0.8],
                            }}
                            transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.4,
                            }}
                        >
                            ✧
                        </motion.span>


                        <motion.span
                            ref={(el) => {
                                sparkleRefs.current[2] = el;
                            }}
                            className="
                                absolute
                                left-[25%]
                                top-[47%]
                                z-40
                                text-lg
                                text-[#8054c8]
                            "
                            animate={{
                                rotate: [0, 30, 0],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.8,
                            }}
                        >
                            ✦
                        </motion.span>


                        <motion.span
                            ref={(el) => {
                                sparkleRefs.current[3] = el;
                            }}
                            className="
                                absolute
                                right-[26%]
                                top-[49%]
                                z-40
                                text-lg
                                text-[#8054c8]
                            "
                            animate={{
                                rotate: [0, -30, 0],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 2.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.1,
                            }}
                        >
                            ✧
                        </motion.span>


                        {/* =================================================
                            AIRPODS
                            GSAP controls reveal.
                            Framer controls floating AFTER reveal.
                        ================================================= */}

                        <div
                            ref={airpodsRef}
                            className="
                                absolute
                                top-[38px]
                                z-[15]
                                flex
                                items-center
                                justify-center
                                opacity-0
                            "
                        >

                            <motion.div
                                animate={{
                                    y: [0, -7, 0],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >

                                {/* AirPods glow */}

                                <div
                                    className="
                                        absolute
                                        left-1/2
                                        top-1/2
                                        h-[190px]
                                        w-[190px]
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        rounded-full
                                        bg-white/70
                                        blur-3xl
                                    "
                                />

                                <img
                                    src="/317571_0_86sq77g0G.webp"
                                    alt="AirPods 5"
                                    className="
                                        relative
                                        z-10
                                        w-[300px]
                                        object-contain
                                        drop-shadow-[0_28px_30px_rgba(75,45,120,0.30)]
                                    "
                                />

                            </motion.div>

                        </div>


                        {/* =================================================
                            GIFT BOX
                        ================================================= */}

                        <div
                            ref={boxRef}
                            className="absolute bottom-[22px] sm:flex hidden z-20 flex items-end justify-center"
                        >
                            <img
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/opened-pink-gift-box-3d-icon-png-download-10090199.png?f=webp"
                                alt="Solvestic gift box"
                                className="w-[240px] object-contain drop-shadow-[0_25px_25px_rgba(75,45,120,0.25)] sm:w-[300px]"
                            />
                        </div>


                        {/* =================================================
                            BADGE
                        ================================================= */}

                        <div
                            className="
                                absolute
                                bottom-4
                                left-4
                                z-[60]
                                flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-white
                                bg-white/90
                                px-3
                                py-1.5
                                text-[10px]
                                font-bold
                                text-[#6846b5]
                                shadow-lg
                                backdrop-blur
                            "
                        >
                            <span>🎁</span>
                            1 WINNER EVERY 100 ORDERS
                        </div>

                    </div>


                    {/* =====================================================
                        RIGHT INFORMATION
                    ===================================================== */}

                    <div className="p-6 sm:p-8 lg:p-10">

                        {/* Prize */}

                        <div className="mb-5 flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#eee7ff]
                                    text-[#704bbd]
                                "
                            >
                                <Trophy size={19} />
                            </div>

                            <div>

                                <p
                                    className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-[#91869e]
                                    "
                                >
                                    The Prize
                                </p>

                                <h3
                                    className="
                                        text-lg
                                        font-black
                                        text-[#211c29]
                                    "
                                >
                                    AirPods 5
                                </h3>

                            </div>

                            <div className="ml-auto text-right">

                                <p
                                    className="
                                        text-xl
                                        font-black
                                        text-[#704bbd]
                                    "
                                >
                                    ₹14,900
                                </p>

                                <p className="text-[10px] text-[#91869e]">
                                    Prize value
                                </p>

                            </div>

                        </div>


                        {/* Apple Music */}

                        <div
                            className="
                                mb-5
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                bg-[#faf7ff]
                                p-3
                            "
                        >

                            <Music2
                                size={20}
                                className="text-[#e65489]"
                            />

                            <div>

                                <p
                                    className="
                                        text-sm
                                        font-bold
                                        text-[#25202e]
                                    "
                                >
                                    3 Months Apple Music Free
                                </p>

                                <p className="text-xs text-[#8a7e94]">
                                    Included with the giveaway prize
                                </p>

                            </div>

                        </div>


                        {/* Eligibility */}

                        <div
                            className="
                                mb-5
                                rounded-2xl
                                bg-[#1b1722]
                                p-5
                                text-white
                            "
                        >

                            <p className="text-xs text-white/60">
                                SPEND
                            </p>

                            <p className="mt-1 text-3xl font-black">
                                ₹1,999/-
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    leading-5
                                    text-white/60
                                "
                            >
                                on the Solvestic First Drop to become
                                eligible.
                            </p>

                        </div>


                        {/* Progress */}

                        <div className="mb-5">

                            <div
                                className="
                                    mb-2
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-bold
                                            text-[#28222f]
                                        "
                                    >
                                        Current Batch
                                    </p>

                                    <p
                                        className="
                                            text-[11px]
                                            text-[#8b8094]
                                        "
                                    >
                                        1 winner selected for every
                                        100 eligible orders
                                    </p>

                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1.5
                                        rounded-full
                                        bg-red-50
                                        px-2.5
                                        py-1
                                        text-[10px]
                                        font-bold
                                        text-red-500
                                    "
                                >
                                    <span
                                        className="
                                            h-1.5
                                            w-1.5
                                            animate-pulse
                                            rounded-full
                                            bg-red-500
                                        "
                                    />
                                    LIVE
                                </div>

                            </div>


                            <div
                                className="
                                    h-2
                                    overflow-hidden
                                    rounded-full
                                    bg-[#e9e2f3]
                                "
                            >

                                <div
                                    className="
                                        h-full
                                        rounded-full
                                        bg-gradient-to-r
                                        from-[#704bbd]
                                        to-[#e75a91]
                                    "
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                />

                            </div>


                            <div
                                className="
                                    mt-1
                                    flex
                                    justify-between
                                    text-[10px]
                                    font-semibold
                                    text-[#8a7e94]
                                "
                            >

                                <span>
                                    {orders} eligible orders
                                </span>

                                <span>100</span>

                            </div>

                        </div>


                        {/* Steps */}

                        <div className="mb-5 grid grid-cols-3 gap-2">

                            <div className="rounded-xl bg-[#f8f5fc] p-3">

                                <p
                                    className="
                                        mb-1
                                        text-[10px]
                                        font-black
                                        text-[#704bbd]
                                    "
                                >
                                    01
                                </p>

                                <p
                                    className="
                                        text-[11px]
                                        font-semibold
                                        leading-4
                                        text-[#41394b]
                                    "
                                >
                                    Place eligible order
                                </p>

                            </div>


                            <div className="rounded-xl bg-[#f8f5fc] p-3">

                                <p
                                    className="
                                        mb-1
                                        text-[10px]
                                        font-black
                                        text-[#704bbd]
                                    "
                                >
                                    02
                                </p>

                                <p
                                    className="
                                        text-[11px]
                                        font-semibold
                                        leading-4
                                        text-[#41394b]
                                    "
                                >
                                    Complete 100 orders
                                </p>

                            </div>


                            <div className="rounded-xl bg-[#f8f5fc] p-3">

                                <p
                                    className="
                                        mb-1
                                        text-[10px]
                                        font-black
                                        text-[#704bbd]
                                    "
                                >
                                    03
                                </p>

                                <p
                                    className="
                                        text-[11px]
                                        font-semibold
                                        leading-4
                                        text-[#41394b]
                                    "
                                >
                                    Live winner selection
                                </p>

                            </div>

                        </div>


                        {/* Live selection */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-[#e6ddf3]
                                p-3
                            "
                        >

                            <div
                                className="
                                    relative
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-[#f0eaff]
                                    text-[#704bbd]
                                "
                            >

                                <Radio size={17} />

                                <span
                                    className="
                                        absolute
                                        right-0.5
                                        top-0.5
                                        h-2
                                        w-2
                                        animate-pulse
                                        rounded-full
                                        bg-red-500
                                    "
                                />

                            </div>

                            <div>

                                <p
                                    className="
                                        text-xs
                                        font-black
                                        text-[#27212e]
                                    "
                                >
                                    Automated Live Winner Selection
                                </p>

                                <p
                                    className="
                                        mt-0.5
                                        text-[10px]
                                        text-[#8b8094]
                                    "
                                >
                                    Transparent selection process
                                </p>

                            </div>

                            <ShieldCheck
                                size={17}
                                className="ml-auto text-[#704bbd]"
                            />

                        </div>


                        {/* Footer */}

                        <p
                            className="
                                mt-4
                                text-center
                                text-[10px]
                                text-[#988da2]
                            "
                        >
                            Your order could be the one.
                            &nbsp;
                            Terms & Conditions apply.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}