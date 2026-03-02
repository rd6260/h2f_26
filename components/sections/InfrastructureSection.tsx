"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function InfrastructureSection() {
    return (
        <section
            className="py-24 bg-neutral-900 text-white relative overflow-hidden"
            id="infrastructure"
        >
            {/* Dot pattern bg */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <div>
                        <AnimateOnScroll>
                            <div className="flex items-center gap-3 mb-6">
                                <motion.span
                                    className="h-[1px] bg-emerald-500 block"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 32 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                />
                                <span className="text-emerald-500 text-xs font-mono uppercase tracking-widest">
                                    Global Network
                                </span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.1}>
                            <h2 className="text-4xl md:text-6xl font-bricolage font-medium mb-6 leading-tight">
                                Interplanetary
                                <br />
                                <span className="text-white/40">Infrastructure</span>
                            </h2>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.2}>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed font-light">
                                Beyond vehicles, we build the ribbons of commerce that tie the
                                planets together. From orbital shipyards to lunar helium
                                extraction plants, our footprint ensures continuous supply chain
                                dominance.
                            </p>
                        </AnimateOnScroll>

                        <div className="space-y-6">
                            <AnimateOnScroll delay={0.3}>
                                <motion.div
                                    className="flex gap-4 group cursor-default"
                                    whileHover={{ x: 6 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <motion.div
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    >
                                        {/* @ts-expect-error iconify-icon is a web component */}
                                        <iconify-icon icon="solar:box-minimalistic-linear" width="24" className="text-white" />
                                    </motion.div>
                                    <div>
                                        <h4 className="text-xl font-medium mb-1 font-bricolage">
                                            Zero-G Manufactory
                                        </h4>
                                        <p className="text-sm text-white/50">
                                            Production of fiber optics and bio-organs in vacuum environments.
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimateOnScroll>

                            <AnimateOnScroll delay={0.4}>
                                <motion.div
                                    className="flex gap-4 group cursor-default"
                                    whileHover={{ x: 6 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <motion.div
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors"
                                        whileHover={{ scale: 1.1, rotate: -10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    >
                                        {/* @ts-expect-error iconify-icon is a web component */}
                                        <iconify-icon icon="solar:bolt-circle-linear" width="24" className="text-white" />
                                    </motion.div>
                                    <div>
                                        <h4 className="text-xl font-medium mb-1 font-bricolage">
                                            He-3 Energy Grid
                                        </h4>
                                        <p className="text-sm text-white/50">
                                            Powering 40% of Earth&apos;s consumption via lunar mining operations.
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimateOnScroll>
                        </div>

                        <AnimateOnScroll delay={0.5}>
                            <motion.button
                                className="mt-10 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 group"
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            >
                                View Infrastructure Map
                                {/* @ts-expect-error iconify-icon is a web component */}
                                <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </AnimateOnScroll>
                    </div>

                    {/* Image Column with hotspots */}
                    <AnimateOnScroll
                        delay={0.2}
                        animation="scale"
                        className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 group h-[300px] md:h-[500px]"
                    >
                        <Image
                            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee3841e8-ef6d-45b3-9f33-9df069f9708a_1600w.webp"
                            alt="Orbital Station"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/20" />

                        {/* Hotspot 1 */}
                        <div className="absolute top-1/4 left-1/3 group/spot">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute inset-0" />
                            <motion.div
                                className="w-4 h-4 bg-emerald-500 rounded-full relative z-10 cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            />
                            <div className="absolute left-6 top-0 bg-black/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 w-56 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-y-2 group-hover/spot:translate-y-0 pointer-events-none">
                                <span className="text-xs font-mono text-emerald-400 block mb-1 uppercase tracking-wider">
                                    Docking Bay A
                                </span>
                                <span className="text-[11px] text-white/70 block">
                                    Capacity: 4 Heavy Cruisers
                                </span>
                                <span className="text-[10px] text-white/40 block mt-1">
                                    Status: Operational
                                </span>
                            </div>
                        </div>

                        {/* Hotspot 2 */}
                        <div className="absolute bottom-1/3 right-1/4 group/spot">
                            <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute inset-0 [animation-delay:0.5s]" />
                            <motion.div
                                className="w-4 h-4 bg-blue-500 rounded-full relative z-10 cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            />
                            <div className="absolute right-6 top-0 bg-black/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 w-56 opacity-0 group-hover/spot:opacity-100 transition-all duration-300 translate-y-2 group-hover/spot:translate-y-0 pointer-events-none text-right">
                                <span className="text-xs font-mono text-blue-400 block mb-1 uppercase tracking-wider">
                                    Command Spire
                                </span>
                                <span className="text-[11px] text-white/70 block">
                                    Personnel: 420 active
                                </span>
                                <span className="text-[10px] text-white/40 block mt-1">
                                    Security: Level 5
                                </span>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
