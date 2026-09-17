"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const FOUNDER_REELS = [
    {
        id: 1,
        episode: "EPISODE 01",
        title: "Founder Diary Ep. 1",
        description:
            "The beginning of the Solvestic journey. Come behind the scenes with our founder.",
        instagram: "https://www.instagram.com/reel/DdTbdCDzcG1/",
        comingSoon: false,
    },
    {
        id: 2,
        episode: "EPISODE 02",
        title: "Founder Diary Ep. 2",
        description: "Coming Soon",
        instagram: "",
        comingSoon: true,
    },
];

function InstagramReel({ reel }) {
    /* ================= COMING SOON ================= */

    if (reel.comingSoon) {
        return (
            <div className="relative flex h-[480px] w-full items-center justify-center overflow-hidden rounded-[18px] bg-[#F7F2FF]">

                {/* Soft glow */}
                <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-[#DCCAFF]/50 blur-[60px]" />

                <div className="pointer-events-none absolute -right-20 bottom-10 h-40 w-40 rounded-full bg-[#FFDDEB]/50 blur-[60px]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center px-6 text-center">

                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#7650B8] shadow-[0_10px_30px_rgba(118,80,184,0.12)]">
                        <Sparkles size={22} />
                    </div>

                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#A397AD]">
                        {reel.episode}
                    </span>

                    <h3 className="mt-2 text-2xl font-black tracking-tight text-[#211B29]">
                        Coming Soon
                    </h3>

                    <p className="mt-2 max-w-[220px] text-xs leading-5 text-[#9A8CAB]">
                        A new chapter of the Solvestic founder journey is on its way.
                    </p>

                    <div className="mt-5 rounded-full bg-white px-4 py-2 text-[8px] font-black uppercase tracking-[0.18em] text-[#7650B8] shadow-sm">
                        Stay tuned
                    </div>

                </div>
            </div>
        );
    }

    /* ================= INSTAGRAM REEL ================= */

    const embedUrl = `${reel.instagram}embed/`;

    return (
        <div className="relative h-[480px] w-full overflow-hidden rounded-[18px] bg-black">

            <iframe
                src={embedUrl}
                title={reel.title}
                className="absolute left-1/2 top-1/2 h-[620px] w-full -translate-x-1/2 -translate-y-1/2"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
            />

            {/* Instagram button */}

            <a
                href={reel.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${reel.title} on Instagram`}
                className="absolute bottom-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#7650B8] shadow-lg transition-transform duration-300 hover:scale-110"
            >
                <ArrowUpRight size={14} />
            </a>

        </div>
    );
}

export default function FounderDiarySection() {
    const [active, setActive] = useState(0);

    const swiperRef = useRef(null);

    const currentReel = FOUNDER_REELS[active];

    const handleEpisodeClick = (index) => {
        setActive(index);

        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    };

    return (
        <section className="relative overflow-hidden bg-[#FAF8FF] py-8 sm:py-10 lg:py-12">

            {/* ================= BACKGROUND GLOW ================= */}

            <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-[#DCCAFF]/50 blur-[90px]" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#FFDDEB]/50 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ================= HEADER ================= */}

                <div className="mb-6 flex items-center gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#7650B8] shadow-sm">
                        <Sparkles size={14} />
                    </div>

                    <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#9A8CAB]">
                            Founder Diary
                        </p>

                        <h2 className="text-xl font-black leading-tight tracking-tight text-[#211B29] sm:text-3xl">
                            Inside the{" "}
                            <span className="text-[#7650B8]">
                                Solvestic journey.
                            </span>
                        </h2>
                    </div>

                </div>

                {/* ================= MAIN ================= */}

                <div className="grid items-start gap-5 lg:grid-cols-[260px_minmax(0,1fr)]">

                    {/* =================================================
                        LEFT
                    ================================================= */}

                    <div className="rounded-[22px] border border-white/80 bg-white/80 p-3 shadow-[0_10px_35px_rgba(118,80,184,0.08)] backdrop-blur-xl">

                        <p className="mb-4 px-2 pt-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#A397AD]">
                            Explore episodes
                        </p>

                        {/* Hide scrollbar */}
                        <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-1 flex-col lg:overflow-visible">

                            {FOUNDER_REELS.map((reel, index) => {

                                const isActive = active === index;

                                return (
                                    <button
                                        key={reel.id}
                                        type="button"
                                        onClick={() => handleEpisodeClick(index)}
                                        className={`
                                            group
                                            flex
                                            min-w-[145px]
                                            items-center
                                            gap-2.5
                                            rounded-xl
                                            px-3
                                            py-2.5
                                            text-left
                                            transition-all
                                            duration-300
                                            lg:min-w-0
                                            ${isActive
                                                ? "bg-[#7650B8] text-white shadow-[0_7px_18px_rgba(118,80,184,0.20)]"
                                                : "bg-white text-[#332B3D] hover:bg-[#F7F2FF]"
                                            }
                                        `}
                                    >

                                        <span
                                            className={`
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                text-[12px]
                                                font-black
                                                ${isActive
                                                    ? "bg-white/15 text-white"
                                                    : "bg-[#F1EBFF] text-[#7650B8]"
                                                }
                                            `}
                                        >
                                            0{reel.id}
                                        </span>

                                        <span className="min-w-0 flex-1">

                                            <span
                                                className={`
                                                    block
                                                    text-[9px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.15em]
                                                    ${isActive
                                                        ? "text-white/60"
                                                        : "text-[#A397AD]"
                                                    }
                                                `}
                                            >
                                                {reel.episode}
                                            </span>

                                            <span
                                                className={`
                                                    mt-0.5
                                                    block
                                                    truncate
                                                    text-[12px]
                                                    font-bold
                                                    ${isActive
                                                        ? "text-white"
                                                        : "text-[#332B3D]"
                                                    }
                                                `}
                                            >
                                                {reel.title}
                                            </span>

                                        </span>

                                    </button>
                                );
                            })}

                        </div>

                        {/* ================= ACTIVE DETAILS ================= */}

                        <div className="mt-4 border-t border-[#EEE8F5] px-2 pt-4">

                            <div className="mb-2 flex items-center gap-2">

                                <span className="h-1.5 w-1.5 rounded-full bg-[#B894E8]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7650B8]">
                                    {currentReel.episode}
                                </span>

                            </div>

                            <h3 className="text-xl font-black leading-tight text-[#211B29]">
                                {currentReel.title}
                            </h3>

                            <p className="mt-2 text-[12px] leading-5 text-[#8B8197]">
                                {currentReel.description}
                            </p>

                            {currentReel.instagram && (
                                <a
                                    href={currentReel.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group mt-4 inline-flex items-center gap-2 rounded-full bg-[#7650B8] px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6844A8]"
                                >
                                    Open on Instagram

                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                                        <ArrowUpRight size={14} />
                                    </span>
                                </a>
                            )}

                        </div>

                    </div>

                    {/* =================================================
                        RIGHT — SWIPER
                    ================================================= */}

                    <div className="min-w-0 rounded-[22px] border border-white/70 bg-white/45 p-3 shadow-[0_15px_45px_rgba(118,80,184,0.08)] backdrop-blur-xl sm:p-4">

                        <Swiper
                            modules={[Autoplay]}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => {
                                setActive(swiper.realIndex);
                            }}
                            loop={FOUNDER_REELS.length > 2}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            speed={700}
                            spaceBetween={14}
                            slidesPerView={1}
                            centeredSlides={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 14,
                                    centeredSlides: false,
                                },

                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 18,
                                    centeredSlides: false,
                                },

                                1280: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    centeredSlides: false,
                                },
                            }}
                            className="w-full"
                        >

                            {FOUNDER_REELS.map((reel) => (
                                <SwiperSlide key={reel.id}>
                                    <InstagramReel reel={reel} />
                                </SwiperSlide>
                            ))}

                        </Swiper>

                    </div>

                </div>

            </div>

            {/* ================= HIDE SCROLLBAR ================= */}

            <style jsx global>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

        </section>
    );
}