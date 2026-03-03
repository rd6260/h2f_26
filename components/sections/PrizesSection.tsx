"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

/* ─── Gold Crown Visualization ─── */
function GoldVis() {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none">
            <motion.div
                className="relative w-[300px] h-[300px]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            >
                {/* Orbital rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-amber-500/40 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute w-44 h-44 rounded-full border border-dashed border-amber-400/25 animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute w-56 h-56 rounded-full border border-amber-500/10 border-t-amber-400/50 animate-[spin_20s_linear_infinite]" />
                </div>
                {/* Diamond rays */}
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent animate-pulse top-1/2 -translate-y-1/2 rotate-45" />
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent animate-pulse top-1/2 -translate-y-1/2 -rotate-45" />
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent animate-pulse top-1/2 -translate-y-1/2 rotate-[22deg]" />
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent animate-pulse top-1/2 -translate-y-1/2 -rotate-[22deg]" />
                {/* Core pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-amber-400 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.9),0_0_60px_rgba(245,158,11,0.4)] animate-pulse" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full animate-ping" />
                </div>
            </motion.div>
        </div>
    );
}

/* ─── Silver Shield Visualization ─── */
function SilverVis() {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none">
            <div className="relative w-[260px] h-[260px] group-hover:scale-105 transition-transform duration-1000">
                <svg className="absolute inset-0 w-full h-full text-slate-300 animate-[spin_30s_linear_infinite]" viewBox="0 0 100 100" fill="none">
                    <path d="M50 5 L89 27.5 V72.5 L50 95 L11 72.5 V27.5 Z" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" className="opacity-40" />
                    <path d="M50 15 L80.3 32.5 V67.5 L50 85 L19.7 67.5 V32.5 Z" stroke="currentColor" strokeWidth="0.4" className="opacity-50" />
                    <path d="M50 25 L70.6 37.5 V62.5 L50 75 L29.4 62.5 V37.5 Z" stroke="currentColor" strokeWidth="0.2" className="opacity-30" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 border-[0.5px] border-slate-300/30 rotate-45 animate-[spin_8s_linear_infinite]" />
                    <div className="absolute w-28 h-28 border-[0.5px] border-slate-300/30 -rotate-45 animate-[spin_8s_linear_infinite_reverse]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-300/0 via-slate-300/10 to-slate-300/0 animate-[shimmerMove_3s_ease-in-out_infinite] opacity-50 skew-y-12" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-slate-300 rounded-full shadow-[0_0_20px_rgba(203,213,225,0.8)] animate-pulse" />
                </div>
            </div>
        </div>
    );
}

/* ─── Bronze Fusion Visualization ─── */
function BronzeVis() {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none">
            <div className="relative w-[280px] h-[280px] group-hover:scale-110 transition-transform duration-1000">
                <svg className="absolute inset-0 w-full h-full text-orange-400 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none">
                    <ellipse cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3" className="opacity-40" />
                    <ellipse cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3" className="opacity-40" transform="rotate(60 50 50)" />
                    <ellipse cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3" className="opacity-40" transform="rotate(120 50 50)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange-500/10 blur-xl animate-pulse" />
                    <div className="w-6 h-6 rounded-full bg-orange-400/20 blur-md animate-ping" />
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_20px_rgb(249,115,22)]" />
                </div>
                <div className="absolute top-1/2 left-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2 border border-dashed border-orange-500/20 rounded-full animate-[spin_4s_linear_infinite]" />
            </div>
        </div>
    );
}

/* ─── Floating particles for background ambience ─── */
function FloatingParticles() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-amber-400/20"
                    style={{
                        left: `${10 + i * 12}%`,
                        top: `${15 + (i % 4) * 22}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                        duration: 4 + i * 0.7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                />
            ))}
        </div>
    );
}

interface PrizeCardProps {
    emoji: string;
    label: string;
    colorName: "gold" | "silver" | "bronze";
    amount: string;
    description: string;
    visualization: React.ReactNode;
    delay: number;
    rank: number;
}

function PrizeCard({
    emoji,
    label,
    colorName,
    amount,
    description,
    visualization,
    delay,
    rank,
}: PrizeCardProps) {
    const colorMap = {
        gold: {
            gradientFrom: "from-amber-500/8",
            iconBg: "bg-amber-500/10",
            iconBorder: "border-amber-500/20",
            iconHoverBg: "group-hover:bg-amber-500/20",
            iconHoverBorder: "group-hover:border-amber-400/40",
            textColor: "text-amber-400",
            dotColor: "bg-amber-400",
            dotShadow: "shadow-[0_0_12px_rgb(245,158,11)]",
            barColor: "bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300",
            hoverText: "group-hover:text-amber-50",
            amountGradient: "from-amber-300 via-yellow-200 to-amber-400",
            glowColor: "rgba(245,158,11,0.15)",
            borderHover: "hover:border-amber-500/30",
            topLine: "from-transparent via-amber-400/60 to-transparent",
            bgGlow: "bg-amber-500/8",
        },
        silver: {
            gradientFrom: "from-slate-400/8",
            iconBg: "bg-slate-400/10",
            iconBorder: "border-slate-400/20",
            iconHoverBg: "group-hover:bg-slate-400/20",
            iconHoverBorder: "group-hover:border-slate-300/40",
            textColor: "text-slate-300",
            dotColor: "bg-slate-300",
            dotShadow: "shadow-[0_0_12px_rgb(203,213,225)]",
            barColor: "bg-gradient-to-r from-slate-500 via-slate-300 to-white",
            hoverText: "group-hover:text-slate-50",
            amountGradient: "from-slate-300 via-white to-slate-300",
            glowColor: "rgba(203,213,225,0.12)",
            borderHover: "hover:border-slate-400/30",
            topLine: "from-transparent via-slate-300/50 to-transparent",
            bgGlow: "bg-slate-400/6",
        },
        bronze: {
            gradientFrom: "from-orange-500/8",
            iconBg: "bg-orange-500/10",
            iconBorder: "border-orange-500/20",
            iconHoverBg: "group-hover:bg-orange-500/20",
            iconHoverBorder: "group-hover:border-orange-400/40",
            textColor: "text-orange-400",
            dotColor: "bg-orange-400",
            dotShadow: "shadow-[0_0_12px_rgb(249,115,22)]",
            barColor: "bg-gradient-to-r from-orange-600 via-orange-400 to-amber-300",
            hoverText: "group-hover:text-orange-50",
            amountGradient: "from-orange-300 via-amber-200 to-orange-400",
            glowColor: "rgba(249,115,22,0.12)",
            borderHover: "hover:border-orange-500/30",
            topLine: "from-transparent via-orange-400/50 to-transparent",
            bgGlow: "bg-orange-500/6",
        },
    };

    const c = colorMap[colorName];

    return (
        <AnimateOnScroll delay={delay}>
            <motion.div
                className={`group relative bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-neutral-900/60 transition-all duration-500 ${c.borderHover} backdrop-blur-sm`}
                style={{ height: 520 }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${c.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Background Gradient */}
                <div
                    className={`absolute inset-0 bg-gradient-to-b ${c.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                {/* Background glow on hover */}
                <div
                    className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: c.glowColor }}
                />

                {/* Shimmer overlay */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent z-0 pointer-events-none animate-shimmer-effect" />

                {/* Rank badge */}
                <motion.div
                    className={`relative z-10 w-16 h-16 rounded-2xl ${c.iconBg} border ${c.iconBorder} flex items-center justify-center mb-auto ${c.textColor} group-hover:scale-110 ${c.iconHoverBg} ${c.iconHoverBorder} transition-all duration-500`}
                    whileHover={{ rotate: 12, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                    <span className="text-3xl">{emoji}</span>
                </motion.div>

                {/* Visualization */}
                {visualization}

                {/* Content */}
                <div className="relative z-10 mt-auto pt-28">
                    {/* Status badge */}
                    <div className="flex items-center gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dotColor} ${c.dotShadow} animate-pulse`} />
                        <span className={`text-[10px] font-mono uppercase tracking-widest ${c.textColor}`}>
                            {label}
                        </span>
                    </div>

                    {/* Prize amount - big gradient text */}
                    <h3 className={`text-4xl md:text-5xl font-bricolage font-bold mb-3 tracking-tight bg-gradient-to-r ${c.amountGradient} bg-clip-text text-transparent drop-shadow-lg`}>
                        {amount}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                        {description}
                    </p>

                    {/* Progress Line */}
                    <div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
                        <div className={`absolute inset-0 ${c.barColor} w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`} />
                    </div>
                </div>
            </motion.div>
        </AnimateOnScroll>
    );
}

export default function PrizesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section
            ref={sectionRef}
            id="prizes"
            className="py-32 bg-black relative overflow-hidden border-t border-white/5"
        >
            {/* Ambient background glow */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.06] rounded-full blur-[150px] pointer-events-none mix-blend-screen"
            />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

            {/* Floating particles */}
            <FloatingParticles />

            <div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
                {/* Header */}
                <AnimateOnScroll className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <motion.span
                                className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-amber-300 block"
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                                viewport={{ once: true }}
                            />
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/80">
                                Rewards
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bricolage text-white mb-6 tracking-tighter leading-none font-medium">
                            Prizes{" "}
                            <span className="text-white/25">&</span>{" "}
                            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                                Rewards
                            </span>
                        </h2>
                    </div>

    
                </AnimateOnScroll>

                {/* Cards Grid — 1st prize elevated */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-end">
                    <PrizeCard
                        emoji="🏆"
                        colorName="gold"
                        label="1st Place • Grand Winner"
                        amount="₹50,000"
                        description="Awarded to the most innovative and impactful solution. The team that redefines what's possible."
                        visualization={<GoldVis />}
                        delay={0.1}
                        rank={1}
                    />
                    <PrizeCard
                        emoji="🥈"
                        colorName="silver"
                        label="2nd Place • Runner Up"
                        amount="₹30,000"
                        description="For outstanding technical implementation and creativity. Exceptional craft meets bold ideas."
                        visualization={<SilverVis />}
                        delay={0.2}
                        rank={2}
                    />
                    <PrizeCard
                        emoji="🥉"
                        colorName="bronze"
                        label="3rd Place • Honorable"
                        amount="₹15,000"
                        description="For excellence in execution and user experience. Where polish and precision shine."
                        visualization={<BronzeVis />}
                        delay={0.3}
                        rank={3}
                    />
                </div>

                {/* Bottom motivational tagline */}
                <AnimateOnScroll delay={0.4} className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center">
                        <p className="text-white/30 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
                            Build something extraordinary — the stage is yours
                        </p>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
