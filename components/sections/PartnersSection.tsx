"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";

const PARTNERS = ["NASA", "SpaceX", "BLUE", "ESA", "AXIOM", "JAXA"];

const STATS = [
    { value: 4.2, decimals: 1, suffix: "%", label: "Market Growth" },
    { value: 128, decimals: 0, suffix: "", label: "Active Missions" },
    { value: 2.0, decimals: 1, suffix: "", label: "Failure Rate" },
    { value: 24, decimals: 0, suffix: "/7", label: "Command Support" },
];

export default function PartnersSection() {
    return (
        <section className="bg-neutral-950 border-white/5 border-t pt-20 pb-20">
            <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
                {/* Title */}
                <AnimateOnScroll className="text-center mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                        Trusted By The Coalition
                    </span>
                </AnimateOnScroll>

                {/* Partner Logos */}
                <AnimateOnScroll
                    delay={0.2}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
                >
                    {PARTNERS.map((name, i) => (
                        <motion.div
                            key={name}
                            className="flex items-center justify-center h-12 text-white/40 font-bricolage font-bold text-xl tracking-tighter"
                            whileHover={{ scale: 1.15, color: "rgba(255,255,255,1)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.03 }}
                        >
                            {name}
                            {name === "NASA" && (
                                <span className="text-xs font-normal align-top ml-1 opacity-50">
                                    Adv
                                </span>
                            )}
                        </motion.div>
                    ))}
                </AnimateOnScroll>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/5 mt-20 pt-12 gap-x-8 gap-y-8">
                    {STATS.map((stat) => (
                        <AnimateOnScroll key={stat.label} className="text-center" delay={0.1}>
                            <div className="text-4xl md:text-5xl font-bricolage text-white font-light mb-2">
                                <AnimatedCounter
                                    value={stat.value}
                                    decimals={stat.decimals}
                                    suffix={stat.suffix}
                                    suffixClassName="text-lg text-emerald-500"
                                    duration={2.5}
                                />
                            </div>
                            <div className="text-xs uppercase tracking-widest text-white/40">
                                {stat.label}
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
