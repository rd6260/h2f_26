"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
    variant?: "dot" | "pill";
    label?: string;
}

export default function SectionDivider({
    variant = "dot",
    label = "Sync",
}: SectionDividerProps) {
    if (variant === "pill") {
        return (
            <div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                    transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                    className="relative bg-neutral-950 px-6 py-2 border border-white/5 rounded-full flex items-center gap-4"
                >
                    <div className="flex gap-1">
                        <div className="w-0.5 h-3 bg-white/20" />
                        <div className="w-0.5 h-3 bg-white/20" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                        {label}
                    </span>
                    <div className="flex gap-1">
                        <div className="w-0.5 h-3 bg-white/20" />
                        <motion.div
                            className="w-0.5 h-3 bg-emerald-500"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full bg-neutral-950 py-12 flex items-center justify-center relative z-20 overflow-hidden">
            <motion.div
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.div
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent w-3/4 mx-auto"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            />
            <motion.div
                className="relative bg-neutral-950 p-3 border border-white/10 rounded-full flex items-center justify-center shadow-2xl"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.3 }}
            >
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-pulse" />
            </motion.div>
        </div>
    );
}
