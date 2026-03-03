"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function AboutSection() {
    return (
        <section
            className="py-24 bg-neutral-900 text-white relative overflow-hidden"
            id="about"
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
                                    About Us
                                </span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.1}>
                            <h2 className="text-4xl md:text-6xl font-bricolage font-medium mb-6 leading-tight">
                                About
                                <br />
                                <span className="text-white/40">Hack2Future 2.0</span>
                            </h2>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.2}>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed font-light">
                                IIIT Dharwad, established in 2015 as an Institute of National Importance under a Public-Private Partnership between the Ministry of Education, Government of Karnataka, and Keonics, aims to bridge the high-end IT skill gap and support India’s global leadership in the sector. It offers BTech programs in CSE, ECE, and DSAI, emphasizing IT solutions for India’s social challenges. With a semi-modern campus, a stately logo, and a strategic location in the Hubballi-Dharwad education hub with growing connectivity to Bengaluru the institute is poised to make a strong impact on the Indian IT industry, academic research, and the North Karnataka region.
                            </p>
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
                            alt="Hack2Future 2.0"
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
                                    36 Hours
                                </span>
                                <span className="text-[11px] text-white/70 block">
                                    Non-stop innovation sprint
                                </span>
                                <span className="text-[10px] text-white/40 block mt-1">
                                    Format: Onsite Hackathon
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
                                    National Level
                                </span>
                                <span className="text-[11px] text-white/70 block">
                                    Open to students pan-India
                                </span>
                                <span className="text-[10px] text-white/40 block mt-1">
                                    Mentored by industry experts
                                </span>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
