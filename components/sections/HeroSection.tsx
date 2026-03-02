"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.8, 0.25, 1] as [number, number, number, number];

export default function HeroSection() {
    return (
        <header className="relative w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24 min-h-screen md:h-screen">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 bg-black">
                <motion.div
                    initial={{ scale: 1.4, opacity: 0, filter: "blur(20px) grayscale(100%)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px) grayscale(0%)" }}
                    transition={{ duration: 3.5, ease }}
                    className="w-full h-full"
                >
                    <Image
                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25904405-aa15-491b-9a03-de5fc75f18b3_3840w.webp"
                        alt="Brutalist Architecture Detail"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                <div className="bg-black/10 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" />
            </div>

            {/* Floating Data Points */}
            <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 2.5, duration: 0.8, ease }}
                className="absolute top-32 right-6 md:right-12 z-20 flex flex-col items-end gap-2"
            >
                <motion.div
                    className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-3"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono tracking-wider uppercase text-white/90">
                        Live: Orbital Station Alpha
                    </span>
                </motion.div>
            </motion.div>

            <div className="md:px-12 grid grid-cols-1 md:grid-cols-12 z-10 w-full max-w-[90rem] mr-auto ml-auto pr-6 pl-6 relative gap-x-6 gap-y-6 items-end">
                {/* Left Column: Primary Headline */}
                <div className="md:col-span-7 relative">
                    {/* Decorative Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.7, ease }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: 32 }}
                            transition={{ delay: 1.4, duration: 0.6, ease }}
                            className="h-[1px] bg-white/60 block"
                        />
                        <span className="text-xs font-mono uppercase tracking-widest text-white/80">
                            Est. 2042
                        </span>
                    </motion.div>

                    <h1 className="font-bricolage text-white leading-[0.85] tracking-tight font-semibold">
                        <motion.span
                            className="block text-[15vw] md:text-[9rem] lg:text-[11rem] text-white mix-blend-normal drop-shadow-2xl"
                            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ delay: 1.4, duration: 1, ease }}
                        >
                            HACK
                        </motion.span>
                        <motion.div
                            className="flex items-baseline gap-4 md:gap-8 -mt-2 md:-mt-8"
                            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ delay: 1.6, duration: 1, ease }}
                        >
                            <span className="text-[15vw] md:text-[9rem] lg:text-[11rem] blur-[1px] font-thin italic text-white/60 font-serif opacity-50">
                                2
                            </span>
                            <span className="text-[15vw] md:text-[9rem] lg:text-[11rem] text-white drop-shadow-2xl">
                                FUTURE
                            </span>
                        </motion.div>
                    </h1>
                </div>

                {/* Right Column: Description & Specs */}
                <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end pb-4 md:pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 1.8, duration: 1, ease }}
                        className="overflow-hidden md:p-8 bg-neutral-950/60 border-white/10 border ring-white/5 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl backdrop-blur-2xl"
                    >
                        {/* Shimmer Overlay */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none animate-shimmer-effect" />

                        <div className="relative z-10">
                            <p className="md:text-xl leading-relaxed antialiased text-lg font-light text-white mb-8 drop-shadow-md">
                                The Flagship Hackathon of IIIT Dharwad. Build Bold, Think
                                Beyond, Code the future, Hack2Future
                            </p>

                            <div className="flex flex-col gap-6">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.2, duration: 0.6 }}
                                    className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6"
                                >
                                    <div>
                                        <span className="block text-[10px] uppercase text-white/50 tracking-widest mb-1">
                                            Edition
                                        </span>
                                        <span className="text-2xl text-white font-bricolage">
                                            2nd
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase text-white/50 tracking-widest mb-1">
                                            Bases
                                        </span>
                                        <span className="text-2xl font-bricolage text-white">
                                            04
                                        </span>
                                    </div>
                                </motion.div>

                                <motion.a
                                    href="#projects"
                                    className="group flex items-center justify-between w-full p-1 border-b border-white/30 hover:border-white transition-colors pb-2"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <span className="text-sm font-medium text-white tracking-wide">
                                        View Brochure
                                    </span>
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon
                                        icon="solar:arrow-right-linear"
                                        className="text-white group-hover:translate-x-1 transition-transform"
                                        width="18"
                                    />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.8, ease }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/40">
                    Scroll
                </span>
                <motion.div
                    className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
                    animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Bottom-left status widget */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4, duration: 0.8, ease }}
                className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-2 z-20"
            >
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40 font-mono">
                    <span>Sys.Norm</span>
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <span>V. 4.0.2</span>
                </div>
                <motion.div
                    className="bg-neutral-900/80 w-64 border-white/10 border rounded-xl px-4 py-4 backdrop-blur"
                    whileHover={{ borderColor: "rgba(255,255,255,0.2)", scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className="flex justify-between mb-2">
                        <span className="text-xs text-white/60">Orbit Stability</span>
                        <span className="text-xs text-emerald-400">99.9%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <motion.div
                            className="bg-emerald-500 h-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                            initial={{ width: "0%" }}
                            animate={{ width: "99%" }}
                            transition={{ delay: 2.8, duration: 1.5, ease }}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <span className="block text-[10px] text-white/40 uppercase tracking-wider">
                                Apogee
                            </span>
                            <span className="text-sm text-white font-mono">402km</span>
                        </div>
                        <div>
                            <span className="block text-[10px] text-white/40 uppercase tracking-wider">
                                Perigee
                            </span>
                            <span className="text-sm text-white font-mono">398km</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </header>
    );
}
