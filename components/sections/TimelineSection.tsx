"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TIMELINE_EVENTS = [
    {
        year: "2030",
        shortYear: "30",
        title: "Foundation",
        description:
            "The coalition is formed in the ruins of the old world, uniting fragmented space agencies.",
        titleSide: "right" as const,
    },
    {
        year: "2042",
        shortYear: "42",
        title: "First Light",
        description:
            "The Ares Heavy prototype breaks atmosphere, carrying the first permanent orbital modules.",
        titleSide: "left" as const,
    },
    {
        year: "2055",
        shortYear: "55",
        title: "Mars Colony",
        description:
            "Self-sustaining habitats established in Cydonia. The first off-world generation is born.",
        titleSide: "right" as const,
    },
];

function TimelineEvent({
    event,
    index,
    isLast,
}: {
    event: (typeof TIMELINE_EVENTS)[0];
    index: number;
    isLast: boolean;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

    return (
        <div
            ref={ref}
            className={`flex flex-col md:flex-row items-center justify-between group ${!isLast ? "mb-24" : ""
                }`}
        >
            {/* Left */}
            <motion.div
                className={`w-full md:w-5/12 ${event.titleSide === "right"
                        ? "pr-0 md:pr-12 order-2 md:order-1 text-center md:text-right"
                        : "text-right pr-0 md:pr-12 order-2 md:order-1"
                    }`}
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
            >
                {event.titleSide === "right" ? (
                    <>
                        <h3 className="text-3xl text-white font-bricolage">{event.title}</h3>
                        <p className="text-white/40 mt-2 font-light">{event.description}</p>
                    </>
                ) : (
                    <span className="text-8xl font-bricolage text-white/5 font-bold absolute right-6 md:right-12 -translate-y-12 select-none pointer-events-none">
                        {event.year}
                    </span>
                )}
            </motion.div>

            {/* Center dot */}
            <motion.div
                className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: index * 0.15,
                }}
            >
                <span className="font-mono text-xs">{event.shortYear}</span>
                {/* Connecting glow */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-white/20"
                    animate={isInView ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] } : {}}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
            </motion.div>

            {/* Right */}
            <motion.div
                className={`w-full md:w-5/12 pl-0 md:pl-12 order-3 ${event.titleSide === "left" ? "text-center md:text-left" : ""
                    }`}
                initial={{ opacity: 0, x: -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
            >
                {event.titleSide === "left" ? (
                    <>
                        <h3 className="text-3xl text-white font-bricolage">{event.title}</h3>
                        <p className="text-white/40 mt-2 font-light">{event.description}</p>
                    </>
                ) : (
                    <span className="text-8xl font-bricolage text-white/5 font-bold absolute -translate-y-12 select-none pointer-events-none">
                        {event.year}
                    </span>
                )}
            </motion.div>
        </div>
    );
}

export default function TimelineSection() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: "0px 0px -10% 0px" });

    return (
        <section
            id="timeline"
            className="py-32 bg-neutral-950 relative overflow-hidden border-t border-white/5"
        >
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    ref={headerRef}
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={headerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                >
                    <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
                        Chronology
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bricolage text-white mt-4 font-semibold tracking-tight">
                        The Ascent
                    </h2>
                </motion.div>

                <div className="relative">
                    {TIMELINE_EVENTS.map((event, i) => (
                        <TimelineEvent
                            key={event.year}
                            event={event}
                            index={i}
                            isLast={i === TIMELINE_EVENTS.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
