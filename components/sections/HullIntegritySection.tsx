"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const ease = [0.25, 0.8, 0.25, 1] as [number, number, number, number];

interface ProblemStatement {
    id: number;
    company: string;
    domain: string;
    icon: string;
    accentColor: string;
    accentBg: string;
    accentBorder: string;
    accentGlow: string;
    description: string;
    tags: string[];
    animDelay: number;
}

const PROBLEMS: ProblemStatement[] = [
    {
        id: 1,
        company: "Nokia",
        domain: "Cloud Security & Algorithms",
        icon: "solar:cloud-bolt-bold",
        accentColor: "text-blue-400",
        accentBg: "bg-blue-500/10",
        accentBorder: "border-blue-500/20",
        accentGlow: "rgba(59,130,246,0.15)",
        description:
            "Design scalable security solutions for cloud-native architectures and build algorithmic frameworks for next-gen network infrastructure.",
        tags: ["Cloud", "Security", "Algorithms"],
        animDelay: 0,
    },
    {
        id: 2,
        company: "Nisargasoft",
        domain: "E-commerce Intelligence & Data Engineering",
        icon: "solar:chart-2-bold",
        accentColor: "text-violet-400",
        accentBg: "bg-violet-500/10",
        accentBorder: "border-violet-500/20",
        accentGlow: "rgba(139,92,246,0.15)",
        description:
            "Leverage data engineering pipelines and AI-driven intelligence to revolutionize e-commerce analytics and customer experience.",
        tags: ["E-commerce", "Data Engineering", "AI"],
        animDelay: 0.08,
    },
    {
        id: 3,
        company: "IDRP",
        domain: "Health Tech, AI & NLP",
        icon: "solar:health-bold",
        accentColor: "text-emerald-400",
        accentBg: "bg-emerald-500/10",
        accentBorder: "border-emerald-500/20",
        accentGlow: "rgba(16,185,129,0.15)",
        description:
            "Build AI-powered health technology solutions using natural language processing for diagnostics, patient care, and medical research.",
        tags: ["Health Tech", "AI", "NLP"],
        animDelay: 0.16,
    },
    {
        id: 4,
        company: "IDRP",
        domain: "NLP",
        icon: "solar:chat-square-code-bold",
        accentColor: "text-amber-400",
        accentBg: "bg-amber-500/10",
        accentBorder: "border-amber-500/20",
        accentGlow: "rgba(245,158,11,0.15)",
        description:
            "Push the boundaries of natural language processing — build intelligent systems that understand, generate, and process human language at scale.",
        tags: ["NLP", "Language Models", "Text Processing"],
        animDelay: 0.24,
    },
    {
        id: 5,
        company: "Armor.ai",
        domain: "NLP & Speech Tech",
        icon: "solar:microphone-3-bold",
        accentColor: "text-rose-400",
        accentBg: "bg-rose-500/10",
        accentBorder: "border-rose-500/20",
        accentGlow: "rgba(244,63,94,0.15)",
        description:
            "Develop cutting-edge speech technology and NLP systems — from voice recognition to conversational AI and real-time audio processing.",
        tags: ["Speech Tech", "NLP", "Voice AI"],
        animDelay: 0.32,
    },
];

function ProblemCard({ problem }: { problem: ProblemStatement }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, {
        once: true,
        margin: "0px 0px -8% 0px",
    });

    return (
        <motion.div
            ref={cardRef}
            className="group relative h-full"
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : {}
            }
            transition={{
                duration: 0.7,
                delay: problem.animDelay,
                ease,
            }}
        >
            <motion.div
                className={`relative h-full flex flex-col bg-neutral-900/40 backdrop-blur-xl border border-white/8 rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:bg-neutral-900/60 hover:border-white/15 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]`}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
                {/* Top accent line */}
                <div
                    className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{
                        backgroundImage: `linear-gradient(to right, transparent, ${problem.accentGlow.replace("0.15", "0.6")}, transparent)`,
                    }}
                />

                {/* Shimmer */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none animate-shimmer-effect" />

                {/* Hover glow */}
                <div
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: problem.accentGlow }}
                />

                <div className="relative z-10 flex flex-col flex-1">
                    {/* Top row: Number + Company + Domain */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                        {/* Track number + icon */}
                        <div className="flex items-center gap-4 shrink-0">
                            <div
                                className={`w-12 h-12 rounded-xl ${problem.accentBg} border ${problem.accentBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                            >
                                {/* @ts-expect-error iconify-icon is a web component */}
                                <iconify-icon
                                    icon={problem.icon}
                                    className={problem.accentColor}
                                    width="22"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2.5 mb-1">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                                        Track {String(problem.id).padStart(2, "0")}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span
                                        className={`text-xs font-mono font-semibold ${problem.accentColor}`}
                                    >
                                        {problem.company}
                                    </span>
                                </div>
                                <h4 className="text-lg md:text-xl font-bricolage font-semibold text-white group-hover:text-white transition-colors">
                                    {problem.domain}
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/40 leading-relaxed mb-5 group-hover:text-white/55 transition-colors duration-500 max-w-2xl">
                        {problem.description}
                    </p>

                    {/* Tags + Arrow */}
                    <div className="flex items-center justify-between gap-4 mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {problem.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest ${problem.accentBg} ${problem.accentColor} border ${problem.accentBorder} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Action arrow */}
                        <motion.div
                            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/25 transition-colors"
                            whileHover={{
                                scale: 1.15,
                                borderColor: "rgba(255,255,255,0.4)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                            }}
                        >
                            {/* @ts-expect-error iconify-icon is a web component */}
                            <iconify-icon
                                icon="solar:arrow-right-linear"
                                className="text-white/40 group-hover:text-white/80 transition-colors"
                                width="16"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function HullIntegritySection() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, {
        once: true,
        margin: "0px 0px -10% 0px",
    });

    return (
        <section
            className="bg-neutral-950 border-white/5 border-t py-24 md:py-32 px-6 relative overflow-hidden"
            id="process"
        >
            {/* Dot grid pattern */}
            <div
                className="absolute inset-0 z-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Ambient glow */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

            {/* Watermark */}
            <div className="absolute top-12 right-6 md:right-12 z-0 opacity-[0.04] font-bricolage font-bold text-[6rem] md:text-[10rem] leading-none text-white pointer-events-none select-none tracking-tighter">
                TRACKS
            </div>

            <div className="z-10 w-full max-w-7xl mx-auto relative">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={
                        headerInView
                            ? { opacity: 1, y: 0, filter: "blur(0px)" }
                            : {}
                    }
                    transition={{ duration: 0.8, ease }}
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <motion.span
                            className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-amber-300 block"
                            initial={{ width: 0 }}
                            animate={headerInView ? { width: 32 } : {}}
                            transition={{ duration: 0.6, delay: 0.3, ease }}
                        />
                        <span className="text-amber-400/80 font-mono text-xs uppercase tracking-[0.25em]">
                            Challenges
                        </span>
                        <motion.span
                            className="w-8 h-[2px] bg-gradient-to-l from-amber-500 to-amber-300 block"
                            initial={{ width: 0 }}
                            animate={headerInView ? { width: 32 } : {}}
                            transition={{ duration: 0.6, delay: 0.3, ease }}
                        />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bricolage text-white font-semibold tracking-tight mb-4">
                        Problem{" "}
                        <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                            Statements
                        </span>
                    </h2>
                    <p className="text-white/30 mt-2 text-sm md:text-base font-light max-w-lg mx-auto">
                        Five industry tracks.{" "}
                        <span className="text-white/50">
                            Real-world problems from leading companies — pick your battlefield.
                        </span>
                    </p>
                </motion.div>

                {/* Problem cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {PROBLEMS.map((problem) => (
                        <ProblemCard key={problem.id} problem={problem} />
                    ))}
                </div>

                {/* Bottom tagline */}
                <AnimateOnScroll className="mt-14 md:mt-20 text-center">
                    <div className="inline-flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/70">
                                5 Tracks Available
                            </span>
                        </div>
                        <p className="text-white/25 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
                            Choose your domain — shape the future
                        </p>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
