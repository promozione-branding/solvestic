"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Gift, Trophy, Music2, Radio, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AirPodsGiveaway() {
    const orders = 73;
    const progress = (orders / 100) * 100;

    const sectionRef = useRef(null);
    const visualRef = useRef(null);

    const boxRef = useRef(null);
    const boxBodyRef = useRef(null);
    const lidRef = useRef(null);
    const ribbonVerticalRef = useRef(null);
    const ribbonHorizontalRef = useRef(null);

    const insideRef = useRef(null);
    const glowRef = useRef(null);
    const airpodsRef = useRef(null);
    const airpodsGlowRef = useRef(null);

    const particleRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /*
            =========================================================
            INITIAL STATE
            =========================================================
            */

            gsap.set(boxRef.current, {
                y: 0,
                scale: 1,
                transformPerspective: 1000,
            });

            gsap.set(lidRef.current, {
                rotationX: 0,
                y: 0,
                z: 0,
                transformOrigin: "50% 100%",
            });

            gsap.set(insideRef.current, {
                scale: 0.6,
                opacity: 0,
            });

            gsap.set(glowRef.current, {
                scale: 0.3,
                opacity: 0,
            });

            gsap.set(airpodsRef.current, {
                y: 150,
                scale: 0.72,
                opacity: 0,
                rotation: -8,
                transformPerspective: 1200,
            });

            gsap.set(airpodsGlowRef.current, {
                scale: 0.4,
                opacity: 0,
            });

            gsap.set(ribbonVerticalRef.current, {
                opacity: 1,
            });

            gsap.set(ribbonHorizontalRef.current, {
                opacity: 1,
            });

            particleRefs.current.forEach((el) => {
                if (!el) return;

                gsap.set(el, {
                    x: 0,
                    y: 20,
                    scale: 0,
                    opacity: 0,
                    rotation: 0,
                });
            });

            /*
            =========================================================
            MAIN SCROLL TIMELINE
            =========================================================
            */

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: visualRef.current,
                    start: "top 72%",
                    end: "center 25%",
                    scrub: 1.2,
                },
            });

            // Small anticipation
            tl.to(
                boxRef.current,
                {
                    y: 8,
                    scale: 0.985,
                    duration: 0.2,
                    ease: "power2.out",
                },
                0
            );

            // Slight squash
            tl.to(
                boxBodyRef.current,
                {
                    scaleY: 0.96,
                    duration: 0.2,
                    ease: "power2.out",
                },
                0
            );

            // Remove center ribbons as lid starts opening
            tl.to(
                ribbonVerticalRef.current,
                {
                    opacity: 0,
                    duration: 0.2,
                },
                0.12
            );

            tl.to(
                ribbonHorizontalRef.current,
                {
                    opacity: 0,
                    duration: 0.2,
                },
                0.12
            );

            /*
            ---------------------------------------------------------
            LID OPEN
            ---------------------------------------------------------
            */

            tl.to(
                lidRef.current,
                {
                    rotationX: -105,
                    y: -34,
                    z: 20,
                    duration: 0.9,
                    ease: "power3.out",
                },
                0.18
            );

            /*
            ---------------------------------------------------------
            INSIDE REVEAL
            ---------------------------------------------------------
            */

            tl.to(
                insideRef.current,
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.45,
                    ease: "power2.out",
                },
                0.32
            );

            /*
            ---------------------------------------------------------
            LIGHT / GLOW
            ---------------------------------------------------------
            */

            tl.to(
                glowRef.current,
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                },
                0.35
            );

            tl.to(
                airpodsGlowRef.current,
                {
                    scale: 1,
                    opacity: 0.8,
                    duration: 0.7,
                    ease: "power2.out",
                },
                0.38
            );

            /*
            ---------------------------------------------------------
            AIRPODS EMERGE
            ---------------------------------------------------------
            */

            tl.to(
                airpodsRef.current,
                {
                    y: -35,
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    duration: 1,
                    ease: "back.out(1.35)",
                },
                0.4
            );

            /*
            ---------------------------------------------------------
            AIRPODS FINAL MICRO MOVEMENT
            ---------------------------------------------------------
            */

            tl.to(
                airpodsRef.current,
                {
                    y: -48,
                    duration: 0.35,
                    ease: "power2.out",
                },
                0.95
            );

            /*
            ---------------------------------------------------------
            PARTICLE BURST
            ---------------------------------------------------------
            */

            particleRefs.current.forEach((el, index) => {
                if (!el) return;

                const directions = [
                    { x: -105, y: -95, r: -35 },
                    { x: -55, y: -125, r: 30 },
                    { x: 0, y: -145, r: 0 },
                    { x: 58, y: -120, r: -25 },
                    { x: 110, y: -85, r: 35 },
                    { x: -130, y: -35, r: -45 },
                    { x: 125, y: -30, r: 45 },
                    { x: 72, y: -155, r: 20 },
                ];

                const p = directions[index];

                tl.to(
                    el,
                    {
                        x: p.x,
                        y: p.y,
                        scale: index % 2 === 0 ? 1 : 0.7,
                        opacity: 1,
                        rotation: p.r,
                        duration: 0.55,
                        ease: "power3.out",
                    },
                    0.62 + index * 0.025
                );

                tl.to(
                    el,
                    {
                        opacity: 0,
                        scale: 0.2,
                        duration: 0.35,
                    },
                    1.1 + index * 0.02
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#faf8ff] py-20 sm:py-28"
        >
            {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
                        absolute
                        left-[10%]
                        top-[15%]
                        h-[350px]
                        w-[350px]
                        rounded-full
                        bg-[#c084fc]/10
                        blur-[100px]
                    "
                />

                <div
                    className="
                        absolute
                        bottom-[5%]
                        right-[5%]
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-[#f472b6]/10
                        blur-[120px]
                    "
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="mx-auto mb-12 max-w-3xl text-center">

                    <div
                        className="
                            mb-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#e9ddff]
                            bg-white/80
                            px-4
                            py-2
                            text-[10px]
                            font-black
                            tracking-[0.18em]
                            text-[#7442c8]
                            shadow-[0_8px_30px_rgba(100,50,180,0.08)]
                            backdrop-blur-xl
                        "
                    >
                        <Gift size={14} />
                        SOLVESTIC FIRST DROP
                    </div>

                    <h2
                        className="
                            text-4xl
                            font-black
                            leading-[1.02]
                            tracking-[-0.04em]
                            text-[#18151f]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Your order could come
                        <span className="block bg-gradient-to-r from-[#713fc4] to-[#e54891] bg-clip-text text-transparent">
                            with AirPods.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#756d80] sm:text-base">
                        Spend ₹1,999/- on the Solvestic First Drop
                        for a chance to win.
                    </p>
                </div>

                {/* =================================================
                    MAIN CARD
                ================================================= */}

                <div
                    className="
                        overflow-hidden
                        rounded-[36px]
                        border
                        border-white
                        bg-white/80
                        shadow-[0_30px_100px_rgba(70,35,120,0.12)]
                        backdrop-blur-xl
                        lg:grid
                        lg:grid-cols-[1.05fr_0.95fr]
                    "
                >

                    {/* =================================================
                        VISUAL
                    ================================================= */}

                    <div
                        ref={visualRef}
                        className="
                            relative
                            flex
                            min-h-[520px]
                            items-center
                            justify-center
                            overflow-hidden
                            bg-gradient-to-br
                            from-[#eee5ff]
                            via-[#f7f1ff]
                            to-[#fff1f7]
                            sm:min-h-[620px]
                        "
                    >

                        {/* Radial light */}
                        <div
                            ref={glowRef}
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-[48%]
                                z-[2]
                                h-[280px]
                                w-[280px]
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(202,163,255,0.35)_40%,transparent_72%)]
                                blur-2xl
                            "
                        />

                        {/* Floor shadow */}
                        <div
                            className="
                                absolute
                                bottom-[65px]
                                left-1/2
                                h-[35px]
                                w-[300px]
                                -translate-x-1/2
                                rounded-[50%]
                                bg-[#5c397d]/15
                                blur-2xl
                            "
                        />

                        {/* =================================================
                            PARTICLES
                        ================================================= */}

                        {[
                            "✦",
                            "•",
                            "✧",
                            "◆",
                            "✦",
                            "•",
                            "✧",
                            "✦",
                        ].map((symbol, index) => (
                            <span
                                key={index}
                                ref={(el) => {
                                    particleRefs.current[index] = el;
                                }}
                                className="
                                    absolute
                                    left-1/2
                                    top-[55%]
                                    z-[40]
                                    text-xl
                                    font-bold
                                    text-[#884dcc]
                                "
                            >
                                {symbol}
                            </span>
                        ))}

                        {/* =================================================
                            AIRPODS
                        ================================================= */}

                        <div
                            ref={airpodsRef}
                            className="
                                absolute
                                left-1/2
                                top-[100px]
                                z-[25]
                                -translate-x-1/2
                                will-change-transform
                            "
                        >
                            <div
                                ref={airpodsGlowRef}
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    h-[280px]
                                    w-[280px]
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    rounded-full
                                    bg-white/80
                                    blur-[55px]
                                "
                            />

                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [0, 0.5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <img
                                    src="/ChatGPT Image Sep 17, 2026, 04_30_32 PM.png"
                                    alt="Solvestic AirPods"
                                    className="
                                        relative
                                        z-10
                                        w-[280px]
                                        object-contain
                                        drop-shadow-[0_35px_45px_rgba(58,35,90,0.28)]
                                        sm:w-[350px]
                                        lg:w-[390px]
                                    "
                                />
                            </motion.div>
                        </div>

                        {/* =================================================
                            GIFT BOX
                        ================================================= */}

                        <div
                            ref={boxRef}
                            className="
                                absolute
                                bottom-[65px]
                                left-1/2
                                z-[30]
                                w-[270px]
                                -translate-x-1/2
                                sm:w-[320px]
                            "
                            style={{
                                perspective: "1000px",
                            }}
                        >

                            {/* ==============================
                                OPENING / INNER
                            ============================== */}

                            <div
                                ref={insideRef}
                                className="
                                    absolute
                                    left-1/2
                                    top-[-8px]
                                    z-[1]
                                    h-[100px]
                                    w-[235px]
                                    -translate-x-1/2
                                    rounded-[50%]
                                    bg-[#241335]
                                    shadow-[inset_0_12px_30px_rgba(0,0,0,0.6)]
                                "
                            >
                                <div
                                    className="
                                        absolute
                                        inset-[10px]
                                        rounded-[50%]
                                        bg-gradient-to-br
                                        from-[#5e2a8e]
                                        via-[#27143b]
                                        to-[#120b1b]
                                    "
                                />
                            </div>

                            {/* ==============================
                                LID
                            ============================== */}

                            <div
                                ref={lidRef}
                                className="
                                    absolute
                                    left-1/2
                                    top-0
                                    z-[50]
                                    h-[76px]
                                    w-[286px]
                                    -translate-x-1/2
                                    rounded-[18px]
                                    border
                                    border-white/20
                                    bg-gradient-to-br
                                    from-[#2e2140]
                                    via-[#21162f]
                                    to-[#140d1e]
                                    shadow-[0_18px_35px_rgba(30,15,45,0.3)]
                                    will-change-transform
                                "
                            >
                                {/* Lid highlight */}
                                <div
                                    className="
                                        absolute
                                        inset-[1px]
                                        rounded-[17px]
                                        border
                                        border-white/10
                                        bg-gradient-to-br
                                        from-white/10
                                        to-transparent
                                    "
                                />

                                {/* Ribbon */}
                                <div
                                    ref={ribbonVerticalRef}
                                    className="
                                        absolute
                                        left-1/2
                                        top-0
                                        h-full
                                        w-[42px]
                                        -translate-x-1/2
                                        bg-gradient-to-r
                                        from-[#d946ef]
                                        via-[#f472b6]
                                        to-[#d946ef]
                                    "
                                />

                                <div
                                    ref={ribbonHorizontalRef}
                                    className="
                                        absolute
                                        left-0
                                        top-1/2
                                        h-[18px]
                                        w-full
                                        -translate-y-1/2
                                        bg-gradient-to-r
                                        from-[#d946ef]
                                        via-[#f472b6]
                                        to-[#d946ef]
                                    "
                                />
                            </div>

                            {/* ==============================
                                BOX BODY
                            ============================== */}

                            <div
                                ref={boxBodyRef}
                                className="
                                    relative
                                    z-[20]
                                    mt-[38px]
                                    h-[170px]
                                    w-full
                                    rounded-[22px]
                                    border
                                    border-white/10
                                    bg-gradient-to-br
                                    from-[#31213f]
                                    via-[#21152e]
                                    to-[#130b1d]
                                    shadow-[0_30px_45px_rgba(40,20,60,0.35)]
                                    will-change-transform
                                "
                            >
                                {/* Front shine */}
                                <div
                                    className="
                                        absolute
                                        inset-x-0
                                        bottom-0
                                        h-[70%]
                                        rounded-b-[22px]
                                        bg-gradient-to-t
                                        from-black/20
                                        to-transparent
                                    "
                                />

                                {/* Center ribbon */}
                                <div
                                    className="
                                        absolute
                                        left-1/2
                                        top-0
                                        h-full
                                        w-[42px]
                                        -translate-x-1/2
                                        bg-gradient-to-r
                                        from-[#d946ef]
                                        via-[#f472b6]
                                        to-[#d946ef]
                                    "
                                />

                                {/* Logo */}
                                <div
                                    className="
                                        absolute
                                        left-1/2
                                        top-1/2
                                        z-10
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        whitespace-nowrap
                                        text-[19px]
                                        font-black
                                        tracking-[-0.04em]
                                        text-white
                                    "
                                >
                                    solvestic<span className="text-[#f472b6]">.</span>
                                </div>
                            </div>

                            {/* ==============================
                                BOTTOM SHADOW
                            ============================== */}

                            <div
                                className="
                                    absolute
                                    bottom-[-12px]
                                    left-1/2
                                    h-[20px]
                                    w-[90%]
                                    -translate-x-1/2
                                    rounded-full
                                    bg-black/20
                                    blur-xl
                                "
                            />
                        </div>

                        {/* =================================================
                            SCROLL LABEL
                        ================================================= */}

                        <div
                            className="
                                absolute
                                bottom-5
                                right-5
                                z-[60]
                                hidden
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/70
                                bg-white/70
                                px-3
                                py-2
                                text-[9px]
                                font-black
                                uppercase
                                tracking-widest
                                text-[#6d4a91]
                                shadow-lg
                                backdrop-blur-xl
                                sm:flex
                            "
                        >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d946ef]" />
                            Scroll to reveal
                        </div>

                    </div>

                    {/* =================================================
                        RIGHT CONTENT
                    ================================================= */}

                    <div className="p-7 sm:p-10 lg:p-12">

                        {/* Prize */}

                        <div className="mb-7 flex items-center gap-4">

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-gradient-to-br
                                    from-[#eee3ff]
                                    to-[#fce5f2]
                                    text-[#7442c8]
                                "
                            >
                                <Trophy size={21} />
                            </div>

                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#9a90a5]">
                                    The Prize
                                </p>

                                <h3 className="text-xl font-black text-[#211c29]">
                                    AirPods
                                </h3>
                            </div>

                            <div className="ml-auto text-right">
                                <p className="text-xl font-black text-[#7442c8]">
                                    ₹14,900
                                </p>
                                <p className="text-[10px] text-[#9a90a5]">
                                    Prize value
                                </p>
                            </div>

                        </div>

                        {/* Apple Music */}

                        <div
                            className="
                                mb-7
                                flex
                                items-center
                                gap-4
                                rounded-2xl
                                border
                                border-[#f0e7f8]
                                bg-[#fcf9ff]
                                p-4
                            "
                        >
                            <Music2 size={21} className="text-[#e54891]" />

                            <div>
                                <p className="text-sm font-bold text-[#25202e]">
                                    3 Months Apple Music Free
                                </p>

                                <p className="mt-1 text-xs text-[#8a7e94]">
                                    Included with the giveaway prize
                                </p>
                            </div>
                        </div>

                        {/* Eligibility */}

                        <div
                            className="
                                mb-7
                                overflow-hidden
                                rounded-[24px]
                                bg-[#1d1627]
                                p-6
                                text-white
                                shadow-[0_20px_40px_rgba(25,15,35,0.12)]
                            "
                        >
                            <div className="flex items-end justify-between">

                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                                        Spend
                                    </p>

                                    <p className="mt-1 text-3xl font-black">
                                        ₹1,999/-
                                    </p>
                                </div>

                                <Sparkles
                                    size={22}
                                    className="mb-1 text-[#f472b6]"
                                />

                            </div>

                            <p className="mt-3 max-w-sm text-xs leading-5 text-white/55">
                                on the Solvestic First Drop to become eligible
                                for the giveaway.
                            </p>
                        </div>

                        {/* Progress */}

                        <div className="mb-7">

                            <div className="mb-3 flex items-center justify-between">

                                <div>
                                    <p className="text-sm font-black text-[#28222f]">
                                        Current Batch
                                    </p>

                                    <p className="mt-1 text-[11px] text-[#8b8094]">
                                        1 winner selected for every 100 eligible orders
                                    </p>
                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-red-50
                                        px-3
                                        py-1.5
                                        text-[10px]
                                        font-black
                                        text-red-500
                                    "
                                >
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                                    LIVE
                                </div>

                            </div>

                            <div className="h-2.5 overflow-hidden rounded-full bg-[#eee8f4]">

                                <div
                                    className="
                                        h-full
                                        rounded-full
                                        bg-gradient-to-r
                                        from-[#7442c8]
                                        via-[#b04bd4]
                                        to-[#ef5793]
                                    "
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                />

                            </div>

                            <div className="mt-2 flex justify-between text-[10px] font-semibold text-[#8a7e94]">
                                <span>{orders} eligible orders</span>
                                <span>100</span>
                            </div>

                        </div>

                        {/* Steps */}

                        <div className="mb-7 grid grid-cols-3 gap-2">

                            {[
                                ["01", "Place eligible order"],
                                ["02", "Complete 100 orders"],
                                ["03", "Live winner selection"],
                            ].map(([number, text]) => (
                                <div
                                    key={number}
                                    className="
                                        rounded-2xl
                                        border
                                        border-[#eee8f5]
                                        bg-[#fbf9fd]
                                        p-3.5
                                    "
                                >
                                    <p className="mb-1 text-[10px] font-black text-[#7442c8]">
                                        {number}
                                    </p>

                                    <p className="text-[11px] font-semibold leading-4 text-[#41394b]">
                                        {text}
                                    </p>
                                </div>
                            ))}

                        </div>

                        {/* Live Selection */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-2xl
                                border
                                border-[#e8dff1]
                                bg-white
                                p-4
                            "
                        >

                            <div
                                className="
                                    relative
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#f1eaff]
                                    text-[#7442c8]
                                "
                            >
                                <Radio size={18} />

                                <span
                                    className="
                                        absolute
                                        right-1
                                        top-1
                                        h-2
                                        w-2
                                        animate-pulse
                                        rounded-full
                                        bg-red-500
                                    "
                                />
                            </div>

                            <div>
                                <p className="text-xs font-black text-[#27212e]">
                                    Automated Live Winner Selection
                                </p>

                                <p className="mt-1 text-[10px] text-[#8b8094]">
                                    Transparent selection process
                                </p>
                            </div>

                            <ShieldCheck
                                size={18}
                                className="ml-auto text-[#7442c8]"
                            />

                        </div>

                        <p className="mt-5 text-center text-[10px] text-[#988da2]">
                            Your order could be the one. &nbsp; Terms & Conditions apply.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}