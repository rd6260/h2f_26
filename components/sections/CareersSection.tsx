"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface JobListing {
    title: string;
    icon: string;
    location: string;
    locationIcon: string;
    department: string;
    departmentIcon: string;
    badge?: string;
}

const JOBS: JobListing[] = [
    {
        title: "Propulsion Lead",
        icon: "solar:rocket-2-linear",
        location: "Houston, TX",
        locationIcon: "solar:map-point-linear",
        department: "R&D",
        departmentIcon: "solar:atom-linear",
        badge: "Full-time",
    },
    {
        title: "Exobiology Specialist",
        icon: "solar:user-heart-linear",
        location: "Orbital Station",
        locationIcon: "solar:map-point-linear",
        department: "Science",
        departmentIcon: "solar:test-tube-linear",
    },
];

export default function CareersSection() {
    return (
        <section
            className="bg-neutral-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative"
            id="careers"
        >
            {/* Ambient bg */}
            <motion.div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="z-10 w-full max-w-7xl mr-auto ml-auto relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <AnimateOnScroll className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <motion.span
                                className="h-[1px] bg-emerald-500 block"
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            />
                            <span className="text-emerald-500 text-xs font-mono uppercase tracking-widest">
                                Open Positions
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bricolage font-medium tracking-tighter text-white leading-[0.9]">
                            Join the
                            <span className="text-white/30"> Vanguard.</span>
                        </h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <p className="text-neutral-400 text-lg max-w-md font-light leading-relaxed mb-2">
                            We are searching for pioneers willing to go where no human has gone
                            before. The horizon is just a starting line.
                        </p>
                    </AnimateOnScroll>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {JOBS.map((job, i) => (
                            <AnimateOnScroll
                                key={job.title}
                                delay={0.1 * (i + 1)}
                            >
                                <motion.a
                                    href="#"
                                    className="group relative block p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/0 hover:from-white/20 hover:to-white/5 transition-all duration-500"
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <div className="relative h-full bg-neutral-900/80 backdrop-blur-xl rounded-[23px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-white/5 group-hover:border-transparent transition-colors overflow-hidden">
                                        {/* Glow */}
                                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        {/* Icon */}
                                        <motion.div
                                            className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500 z-10"
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        >
                                            {/* @ts-expect-error iconify-icon is a web component */}
                                            <iconify-icon icon={job.icon} width="28" />
                                        </motion.div>

                                        {/* Info */}
                                        <div className="flex-1 text-center md:text-left z-10">
                                            <h3 className="text-xl font-bricolage font-medium text-white mb-2 group-hover:text-white transition-colors">
                                                {job.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                                                <span className="flex items-center gap-1.5">
                                                    {/* @ts-expect-error iconify-icon is a web component */}
                                                    <iconify-icon icon={job.locationIcon} width="16" />
                                                    {job.location}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-neutral-600 my-auto" />
                                                <span className="flex items-center gap-1.5">
                                                    {/* @ts-expect-error iconify-icon is a web component */}
                                                    <iconify-icon icon={job.departmentIcon} width="16" />
                                                    {job.department}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-4 z-10">
                                            {job.badge && (
                                                <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white/60 bg-white/5 uppercase tracking-wide group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white transition-colors">
                                                    {job.badge}
                                                </span>
                                            )}
                                            <motion.div
                                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-white/50 transition-all duration-300"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                {/* @ts-expect-error iconify-icon is a web component */}
                                                <iconify-icon icon="solar:arrow-right-linear" width="20" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.a>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
