"use client";

import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    Gift,
    Sparkles,
    Trophy,
    Music2,
    ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AirPodsGiveaway() {
    const sectionRef = useRef(null);
    const stageRef = useRef(null);

    const productRef = useRef(null);
    const caseRef = useRef(null);

    const lidRef = useRef(null);
    const baseRef = useRef(null);

    const glowRef = useRef(null);

    const particleRefs = useRef([]);

    const orders = 73;
    const remaining = 100 - orders;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state
            gsap.set(productRef.current, {
                y: 120,
                scale: 0.82,
                opacity: 0,
                rotation: -5,
            });

            gsap.set(caseRef.current, {
                y: 20,
                scale: 0.92,
            });

            gsap.set(lidRef.current, {
                rotationX: 0,
                y: 0,
                transformOrigin: "50% 100%",
            });

            gsap.set(baseRef.current, {
                scaleY: 0.92,
            });

            gsap.set(glowRef.current, {
                opacity: 0,
                scale: 0.5,
            });

            particleRefs.current.forEach((el) => {
                if (!el) return;

                gsap.set(el, {
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: stageRef.current,
                    start: "top 78%",
                    end: "center 30%",
                    scrub: 1,
                },
            });

            // Small entrance
            tl.to(
                caseRef.current,
                {
                    y: 5,
                    scale: 1,
                    duration: 0.25,
                    ease: "power2.out",
                },
                0
            );

            // Lid opens
            tl.to(
                lidRef.current,
                {
                    rotationX: -112,
                    y: -18,
                    duration: 0.75,
                    ease: "power3.out",
                },
                0.15
            );

            // Base opens slightly
            tl.to(
                baseRef.current,
                {
                    scaleY: 1,
                    duration: 0.4,
                    ease: "power2.out",
                },
                0.2
            );

            // Glow
            tl.to(
                glowRef.current,
                {
                    opacity: 0.8,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out",
                },
                0.3
            );

            // AirPods rise
            tl.to(
                productRef.current,
                {
                    y: -42,
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    duration: 1,
                    ease: "back.out(1.35)",
                },
                0.35
            );

            // Slight lift
            tl.to(
                productRef.current,
                {
                    y: -54,
                    duration: 0.35,
                    ease: "power2.out",
                },
                1.05
            );

            // Particles
            const positions = [
                [-100, -75],
                [-65, -105],
                [-20, -125],
                [30, -118],
                [72, -90],
                [108, -45],
            ];

            particleRefs.current.forEach((el, index) => {
                if (!el) return;

                const [x, y] = positions[index];

                tl.to(
                    el,
                    {
                        x,
                        y,
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        ease: "back.out(1.8)",
                    },
                    0.7 + index * 0.05
                );

                tl.to(
                    el,
                    {
                        opacity: 0,
                        scale: 0.2,
                        duration: 0.3,
                    },
                    1.15 + index * 0.04
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#fbfafc] py-10 sm:py-12 lg:py-14"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* ================= HEADER ================= */}

                <div className="mb-6 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:items-end sm:justify-between">

                    <div className="max-w-xl">
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#e8e0ed] bg-white px-3 py-1.5">
                            <Sparkles
                                size={11}
                                className="text-[#9b72b3]"
                            />

                            <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#80658e]">
                                Solvestic First Drop
                            </span>
                        </div>

                        <h2 className="text-3xl font-black leading-[0.98] tracking-[-0.055em] text-[#211d24] sm:text-4xl lg:text-[46px]">
                            Your next order
                            <span className="block text-[#8e68a5]">
                                could be a little extra.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-[280px] text-[11px] leading-5 text-[#8c838f] sm:text-right">
                        Every 100 eligible orders creates another
                        chance to take home Apple AirPods.
                    </p>
                </div>

                {/* ================= MAIN CARD ================= */}

                <div className="overflow-hidden rounded-[28px] border border-[#eee9f1] bg-white shadow-[0_18px_55px_rgba(55,35,65,0.07)]">

                    <div className="grid lg:grid-cols-[1.08fr_0.92fr]">

                        {/* ================= VISUAL ================= */}

                        <div
                            ref={stageRef}
                            className="relative min-h-[390px] overflow-hidden bg-[#f8f5fa] sm:min-h-[430px] lg:min-h-[470px]"
                        >
                            {/* Decorative circles */}
                            <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-[#d8bfdc]" />
                            <div className="absolute right-12 top-16 h-1.5 w-1.5 rounded-full bg-[#e7bccc]" />
                            <div className="absolute bottom-16 left-12 h-1.5 w-1.5 rounded-full bg-[#c9b2d4]" />

                            {/* Main soft light */}
                            <div
                                ref={glowRef}
                                className="absolute left-1/2 top-[43%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 blur-[55px]"
                            />

                            {/* Particles */}
                            {["✦", "✧", "•", "✦", "✧", "•"].map(
                                (item, index) => (
                                    <span
                                        key={index}
                                        ref={(el) => {
                                            particleRefs.current[index] = el;
                                        }}
                                        className="absolute left-1/2 top-[45%] z-30 text-lg text-[#a477b8]"
                                    >
                                        {item}
                                    </span>
                                )
                            )}

                            {/* ================= PRODUCT ================= */}

                            <div
                                ref={productRef}
                                className="absolute left-1/2 top-[65px] z-20 -translate-x-1/2"
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        rotateZ: [0, 0.5, 0],
                                    }}
                                    transition={{
                                        duration: 4.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="relative"
                                >
                                    <img
                                        src="/ChatGPT Image Sep 17, 2026, 04_30_32 PM.png"
                                        alt="Solvestic AirPods"
                                        className="w-[260px] object-contain drop-shadow-[0_24px_30px_rgba(65,45,75,0.17)] sm:w-[320px] lg:w-[200px]"
                                    />

                                    {/* Product label */}
                                    {/* <div className="absolute -right-2 top-3 rounded-full border border-[#e9e1ed] bg-white px-2.5 py-1.5 shadow-[0_8px_20px_rgba(50,30,60,0.08)] sm:-right-8">
                                        <span className="text-[7px] font-black uppercase tracking-[0.12em] text-[#765483]">
                                            AirPods
                                        </span>
                                    </div> */}
                                </motion.div>
                            </div>

                            {/* ================= PREMIUM BOX ================= */}

                            {/* ================= PREMIUM AIRPODS BOX ================= */}

                            <div
                                ref={caseRef}
                                className="
        absolute
        bottom-[32px]
        left-1/2
        z-40
        h-[150px]
        w-[225px]
        -translate-x-1/2
        sm:h-[175px]
        sm:w-[275px]
    "
                                style={{
                                    perspective: "1000px",
                                }}
                            >
                                {/* ================= INNER CAVITY ================= */}

                                <div
                                    className="
            absolute
            left-1/2
            top-[12px]
            z-10
            h-[72px]
            w-[185px]
            -translate-x-1/2
            rounded-[28px]
            border
            border-[#ded8e2]
            bg-[#eeeaf1]
            shadow-[inset_0_8px_18px_rgba(60,45,70,0.08)]
            sm:h-[84px]
            sm:w-[225px]
        "
                                >
                                    {/* Inner cushion */}

                                    <div
                                        className="
                absolute
                left-1/2
                top-[8px]
                h-[52px]
                w-[145px]
                -translate-x-1/2
                rounded-[24px]
                bg-[#f8f6f9]
                shadow-[inset_0_4px_12px_rgba(60,45,70,0.05)]
                sm:h-[62px]
                sm:w-[180px]
            "
                                    />
                                </div>

                                {/* ================= HINGED LID ================= */}

                                <div
                                    ref={lidRef}
                                    className="
            absolute
            left-1/2
            top-0
            z-50
            h-[52px]
            w-[225px]
            -translate-x-1/2
            rounded-[17px]
            border
            border-[#dcd5e0]
            bg-[#ffffff]
            shadow-[0_12px_25px_rgba(50,40,60,0.13)]
        "
                                    style={{
                                        transformOrigin: "50% 100%",
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {/* Lid inset */}

                                    <div
                                        className="
                absolute
                inset-[5px]
                rounded-[13px]
                border
                border-[#f0edf2]
            "
                                    />

                                    {/* Small premium logo */}

                                    <div
                                        className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                text-[8px]
                font-bold
                tracking-[0.28em]
                text-[#76647d]
            "
                                    >
                                        SOLVESTIC
                                    </div>

                                    {/* Tiny center detail */}

                                    <div
                                        className="
                absolute
                bottom-[6px]
                left-1/2
                h-[2px]
                w-[28px]
                -translate-x-1/2
                rounded-full
                bg-[#d8c7dc]
            "
                                    />

                                    {/* Hinge */}

                                    <div
                                        className="
                absolute
                bottom-[-3px]
                left-1/2
                h-[6px]
                w-[70px]
                -translate-x-1/2
                rounded-full
                bg-[#d8d0da]
            "
                                    />

                                    <style jsx>{`
            @media (min-width: 640px) {
                div {
                    /* keeps JSX styling isolated */
                }
            }
        `}</style>
                                </div>

                                {/* ================= BOX BODY ================= */}

                                <div
                                    ref={baseRef}
                                    className="
            absolute
            bottom-0
            left-1/2
            z-30
            h-[105px]
            w-[225px]
            -translate-x-1/2
            overflow-hidden
            rounded-[20px]
            border
            border-[#dcd5e0]
            bg-[#faf9fb]
            shadow-[0_20px_35px_rgba(55,40,65,0.14)]
            sm:h-[125px]
            sm:w-[275px]
        "
                                >
                                    {/* Front panel */}

                                    <div
                                        className="
                absolute
                inset-x-0
                bottom-0
                h-[72%]
                rounded-t-[12px]
                bg-[#ffffff]
                sm:h-[75%]
            "
                                    />

                                    {/* Recessed top edge */}

                                    <div
                                        className="
                absolute
                left-1/2
                top-0
                h-[22px]
                w-[88%]
                -translate-x-1/2
                rounded-b-[15px]
                border-x
                border-b
                border-[#e1dbe4]
                bg-[#f1edf3]
            "
                                    />

                                    {/* Front logo */}

                                    <div
                                        className="
                absolute
                left-1/2
                top-[58%]
                -translate-x-1/2
                -translate-y-1/2
                whitespace-nowrap
                text-[16px]
                font-black
                tracking-[-0.04em]
                text-[#76617e]
                sm:text-[19px]
            "
                                    >
                                        solvestic
                                        <span className="text-[#d497ae]">.</span>
                                    </div>

                                    {/* Small product line */}

                                    <div
                                        className="
                absolute
                left-1/2
                bottom-[15px]
                -translate-x-1/2
                whitespace-nowrap
                text-[6px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#aaa1ad]
            "
                                    >
                                        FIRST DROP
                                    </div>

                                    {/* Corner details */}

                                    <div className="absolute left-3 top-3 h-1 w-1 rounded-full bg-[#d8cbdc]" />
                                    <div className="absolute right-3 top-3 h-1 w-1 rounded-full bg-[#d8cbdc]" />
                                </div>

                                {/* ================= GROUND SHADOW ================= */}

                                <div
                                    className="
            absolute
            bottom-[-12px]
            left-1/2
            h-[16px]
            w-[78%]
            -translate-x-1/2
            rounded-full
            bg-[#76617e]/10
            blur-[9px]
        "
                                />
                            </div>

                            {/* Bottom badge */}
                            <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-1.5 rounded-full border border-[#e8dfe9] bg-white px-3 py-1.5 shadow-[0_5px_18px_rgba(60,35,70,0.06)]">
                                <Gift size={10} className="text-[#8c639c]" />

                                <span className="text-[7px] font-black uppercase tracking-[0.15em] text-[#795d84]">
                                    Every 100 Orders
                                </span>
                            </div>
                        </div>

                        {/* ================= CONTENT ================= */}

                        <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8 xl:p-10">

                            {/* Prize */}

                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4edf7] text-[#825b96]">
                                    <Trophy size={17} />
                                </div>

                                <div>
                                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-[#aaa0ad]">
                                        Featured prize
                                    </p>

                                    <h3 className="text-xl font-black tracking-[-0.03em] text-[#28222b]">
                                        Apple AirPods
                                    </h3>
                                </div>

                                <div className="ml-auto text-right">
                                    <p className="text-base font-black text-[#805993]">
                                        ₹14,900
                                    </p>

                                    <p className="text-[8px] text-[#aaa0ad]">
                                        Prize value
                                    </p>
                                </div>
                            </div>

                            {/* Big campaign statement */}

                            <div className="mb-5">
                                <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#a28fa9]">
                                    The giveaway
                                </p>

                                <h3 className="mt-1.5 text-[26px] font-black leading-[1.05] tracking-[-0.045em] text-[#241e27] sm:text-[30px]">
                                    Every
                                    <span className="text-[#8e67a4]">
                                        {" "}100 orders
                                    </span>
                                    <br />
                                    means another chance.
                                </h3>
                            </div>

                            {/* Progress */}

                            <div className="mb-5 rounded-2xl border border-[#eee7f0] bg-[#fcfbfd] p-4">

                                <div className="mb-2.5 flex items-end justify-between">
                                    <div>
                                        <p className="text-[10px] font-black text-[#322b34]">
                                            Current cycle
                                        </p>

                                        <p className="mt-0.5 text-[10px] text-[#9d929f]">
                                            {remaining} eligible orders remaining
                                        </p>
                                    </div>

                                    <span className="text-sm font-black text-[#805993]">
                                        {orders}/100
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-[#eee9f0]">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{
                                            width: `${orders}%`,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 1.1,
                                            ease: "easeOut",
                                        }}
                                        className="h-full rounded-full bg-[#b995c8]"
                                    />
                                </div>
                            </div>

                            {/* Benefits */}

                            <div className="mb-5 grid grid-cols-2 gap-2">

                                <div className="rounded-xl border border-[#eee7f0] bg-white p-3">
                                    <p className="text-[8px] font-black uppercase tracking-[0.12em] text-[#aaa0ad]">
                                        Eligible order
                                    </p>

                                    <p className="mt-1 text-sm font-black text-[#332b35]">
                                        ₹1,999/-
                                    </p>
                                </div>

                                <div className="rounded-xl border border-[#eee7f0] bg-white p-3">
                                    <div className="flex items-center gap-2">
                                        <Music2
                                            size={13}
                                            className="text-[#c17e9b]"
                                        />

                                        <p className="text-[9px] font-black text-[#332b35]">
                                            Apple Music
                                        </p>
                                    </div>

                                    <p className="mt-1 text-[8px] text-[#968b98]">
                                        3 months free
                                    </p>
                                </div>
                            </div>

                            {/* Footer message */}

                            <div className="flex items-center gap-3 rounded-xl border border-[#e9e1ec] bg-[#faf7fb] p-3.5">

                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#8c639d] shadow-sm">
                                    <Sparkles size={14} />
                                </div>

                                <div>
                                    <p className="text-[10px] font-black text-[#332b35]">
                                        The giveaway keeps going.
                                    </p>

                                    <p className="mt-0.5 text-[10px] leading-4 text-[#948996]">
                                        Once a cycle reaches 100 eligible orders,
                                        another winner is selected.
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={14}
                                    className="ml-auto shrink-0 text-[#9b77a9]"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Tiny disclaimer */}

                <p className="mt-3 text-center text-[10px] text-[#aaa1aa]">
                    Your order could be the one. Terms & Conditions apply.
                </p>
            </div>
        </section>
    );
}