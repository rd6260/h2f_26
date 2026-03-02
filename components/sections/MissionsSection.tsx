"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

type FilterCategory = "all" | "deep-space" | "orbital";

const FILTER_BUTTONS: { id: FilterCategory; label: string; icon: React.ReactNode }[] = [
    {
        id: "all",
        label: "All Missions",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
        ),
    },
    {
        id: "deep-space",
        label: "Deep Space",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
    },
    {
        id: "orbital",
        label: "Orbital",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v3" /><path d="M16.5 7.5 14 10" /><path d="M19 12h3" />
                <path d="M16.5 16.5 14 14" /><path d="M12 21v-3" /><path d="M7.5 16.5 10 14" />
                <path d="M5 12H2" /><path d="M7.5 7.5 10 10" />
            </svg>
        ),
    },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
};

export default function MissionsSection() {
    const [filter, setFilter] = useState<FilterCategory>("all");

    const showAres = filter === "all" || filter === "deep-space";
    const showGateway = filter === "all" || filter === "orbital";
    const showTitan = filter === "all" || filter === "deep-space";

    return (
        <section
            id="projects"
            className="relative py-24 md:py-32 bg-neutral-950 text-white overflow-hidden selection:bg-emerald-500/30"
        >
            {/* Ambient Background */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.5, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute bottom-0 right-0 w-[60vw] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none opacity-30 mix-blend-screen" />

            <div className="md:px-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <AnimateOnScroll className="max-w-3xl relative">
                        <div className="absolute -left-4 md:-left-8 top-1 bottom-1 w-1 bg-gradient-to-b from-emerald-500 to-transparent opacity-50" />
                        <div className="flex items-center gap-3 mb-4 text-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[spin_3s_linear_infinite]">
                                <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                            </svg>
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400/80">
                                Mission Log 2024
                            </span>
                        </div>
                        <h2 className="md:text-8xl leading-[0.9] text-5xl font-medium text-white tracking-tighter font-bricolage">
                            Stellar
                            <span className="font-light text-white/20"> Range.</span>
                        </h2>
                    </AnimateOnScroll>

                    {/* Filter Controls */}
                    <AnimateOnScroll delay={0.1} className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        <div className="relative flex items-center p-1.5 rounded-full bg-neutral-900/90 border border-white/10 backdrop-blur-xl shadow-2xl">
                            {FILTER_BUTTONS.map((btn) => (
                                <motion.button
                                    key={btn.id}
                                    onClick={() => setFilter(btn.id)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${filter === btn.id
                                            ? "bg-white text-neutral-950 shadow-lg shadow-white/5"
                                            : "text-white/50 hover:text-white hover:bg-white/5"
                                        }`}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    layout
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                >
                                    {btn.icon}
                                    {btn.label}
                                </motion.button>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Dynamic Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]"
                    layout
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                >
                    <AnimatePresence mode="popLayout">
                        {/* Card 1: Ares Heavy */}
                        {showAres && (
                            <motion.div
                                key="ares"
                                layout
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                                className="group relative md:col-span-8 md:row-span-2 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl hover:border-white/20 origin-left"
                            >
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea262fd9-14f0-4917-be69-86fd3b302ccd_1600w.webp"
                                        alt="Ares Heavy Launch"
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                                </div>

                                {/* HUD Overlay */}
                                <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-white/10 backdrop-blur border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono text-white/80">
                                            MK-IV Config
                                        </span>
                                        <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-[10px] uppercase tracking-widest font-mono text-emerald-400 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                            Active
                                        </span>
                                    </div>
                                    <div className="text-[10px] font-mono text-white/40 tabular-nums text-right hidden sm:block">
                                        LAT: 28.5721° N LNG: 80.6480° W
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                                    <div className="max-w-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="text-[8rem] md:text-[12rem] font-bricolage font-bold text-white/5 absolute -top-32 md:-top-40 -left-6 pointer-events-none select-none tracking-tighter">
                                            01
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-bricolage font-medium text-white mb-4 relative tracking-tight">
                                            Ares Heavy
                                        </h3>
                                        <p className="text-white/70 text-lg font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                                            Designed for super-heavy payloads to LEO and lunar transfer injection. The backbone of interstellar logistics infrastructure.
                                        </p>
                                        <div className="flex items-center gap-8 pt-6 border-t border-white/10 text-xs font-mono text-white/40 uppercase tracking-widest">
                                            <div>
                                                <span className="block text-white mb-1">Payload</span>
                                                45,000 KG
                                            </div>
                                            <div>
                                                <span className="block text-white mb-1">Thrust</span>
                                                7.2 MN
                                            </div>
                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                <motion.button
                                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors bg-white/5 backdrop-blur-md"
                                                    whileHover={{ scale: 1.15, rotate: 15 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                                    </svg>
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Right Column Stack */}
                    <motion.div
                        layout
                        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                        className={`${showAres ? "md:col-span-4" : "md:col-span-12"
                            } md:row-span-2 flex flex-col gap-6`}
                    >
                        <AnimatePresence mode="popLayout">
                            {/* Card 2: Gateway Station */}
                            {showGateway && (
                                <motion.div
                                    key="gateway"
                                    layout
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
                                    className="group relative flex-1 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl hover:border-white/20 origin-top"
                                >
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee3841e8-ef6d-45b3-9f33-9df069f9708a_1600w.webp"
                                            alt="Gateway Station"
                                            fill
                                            className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                                    </div>

                                    <div className="absolute top-6 right-6 z-20">
                                        <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                                            <span className="font-bricolage text-sm font-medium">02</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgb(245,158,11)]" />
                                                <span className="text-[10px] uppercase text-amber-400 tracking-widest font-mono">
                                                    Orbital Habitat
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bricolage font-medium text-white mb-2 tracking-tight">
                                                Gateway Station
                                            </h3>
                                            <p className="text-white/60 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Permanent staging post for deep space operations. Currently housing a crew of 24.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Card 3: Titan Rover */}
                            {showTitan && (
                                <motion.div
                                    key="titan"
                                    layout
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
                                    className="group relative flex-1 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl hover:border-white/20 origin-bottom"
                                >
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68494c15-da1d-47aa-a9ac-b6ee8c9286cc_800w.webp"
                                            alt="Titan Rover"
                                            fill
                                            className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                                    </div>

                                    <div className="absolute top-6 right-6 z-20">
                                        <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                                            <span className="font-bricolage text-sm font-medium">03</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgb(245,158,11)]" />
                                                <span className="text-[10px] uppercase text-amber-400 tracking-widest font-mono">
                                                    Surface Ops
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bricolage font-medium text-white mb-2 tracking-tight">
                                                Titan Rover
                                            </h3>
                                            <p className="text-white/60 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Next-generation autonomous vehicle equipped with advanced methane-cycle analysis tools.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                {/* Bottom Action */}
                <motion.div className="mt-20 flex justify-center">
                    <motion.a
                        href="#"
                        className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-mono text-white/60 hover:text-white hover:bg-white/5 transition-all uppercase tracking-widest border border-transparent hover:border-white/10"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        View Complete Manifest
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
