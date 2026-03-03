"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const QUICK_LINKS = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
];

const SOCIALS = [
    {
        label: "Instagram",
        icon: "mdi:instagram",
        href: "#",
        color: "hover:text-pink-400",
    },
    {
        label: "LinkedIn",
        icon: "mdi:linkedin",
        href: "#",
        color: "hover:text-blue-400",
    },
];

const IMPORTANT_DATES = [
    { date: "12th March 2026", event: "Registrations Closes", icon: "📝" },
    { date: "4th April 2026", event: "Hackathon Begins", icon: "🚀" },
    { date: "5th April 2026", event: "Final Submissions and Prize Distribution", icon: "🏁" },
];

export default function FooterSection() {
    return (
        <footer
            className="bg-neutral-950 border-t border-white/5 pt-20 pb-8 px-6 relative overflow-hidden"
            id="footer"
        >
            {/* Ambient bg */}
            <motion.div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <AnimateOnScroll className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <Image
                                src="/logos/logo.png"
                                alt="IIIT Dharwad"
                                width={44}
                                height={44}
                                className="rounded-xl"
                            />
                            <h3 className="text-2xl font-bricolage font-semibold text-white tracking-tight">
                                Hack2Future{" "}
                                <span className="text-white/30">2.0</span>
                            </h3>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
                            A 36-hour national-level innovation sprint bridging
                            academia and industry — where the brightest student
                            minds build rapid, scalable solutions to real-world
                            challenges.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {SOCIALS.map(({ label, icon, href, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 ${color} transition-colors`}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 15,
                                    }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon
                                        icon={icon}
                                        width="20"
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </AnimateOnScroll>

                    {/* Quick Links */}
                    <AnimateOnScroll delay={0.1}>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 font-mono flex items-center gap-2">
                            <span className="w-5 h-[1px] bg-emerald-500 block" />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <motion.a
                                        href={href}
                                        className="text-neutral-500 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                        whileHover={{ x: 4 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                    >
                                        <span className="w-0 group-hover:w-3 h-[1px] bg-emerald-500 transition-all duration-300" />
                                        {label}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </AnimateOnScroll>

                    {/* Important Dates */}
                    <AnimateOnScroll delay={0.2}>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 font-mono flex items-center gap-2">
                            <span className="w-5 h-[1px] bg-emerald-500 block" />
                            Key Dates
                        </h4>
                        <ul className="space-y-4">
                            {IMPORTANT_DATES.map(
                                ({ date, event, icon }, i) => (
                                    <motion.li
                                        key={event + i}
                                        className="flex items-start gap-3 group cursor-default"
                                        whileHover={{ x: 4 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                    >
                                        <span className="text-lg leading-none mt-0.5">
                                            {icon}
                                        </span>
                                        <div>
                                            <span className="text-white text-sm font-medium block">
                                                {date}
                                            </span>
                                            <span className="text-neutral-500 text-xs">
                                                {event}
                                            </span>
                                        </div>
                                    </motion.li>
                                )
                            )}
                        </ul>
                    </AnimateOnScroll>

                    {/* Location */}
                    <AnimateOnScroll delay={0.3}>
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 font-mono flex items-center gap-2">
                            <span className="w-5 h-[1px] bg-emerald-500 block" />
                            Venue
                        </h4>
                        <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/0">
                            <div className="bg-neutral-900/80 backdrop-blur-xl rounded-[15px] p-5 border border-white/5">
                                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon
                                        icon="solar:map-point-linear"
                                        width="18"
                                    />
                                    <span className="text-xs font-mono uppercase tracking-wider">
                                        Campus
                                    </span>
                                </div>
                                <p className="text-white text-sm font-medium mb-1">
                                    IIIT Dharwad
                                </p>
                                <p className="text-neutral-500 text-xs leading-relaxed">
                                    Ittigatti Road, Near Sattur Colony,
                                    <br />
                                    Dharwad 580009, Karnataka
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-600 text-xs">
                    <AnimateOnScroll>
                        <p>
                            © {new Date().getFullYear()} Hack2Future 2.0 — IIIT
                            Dharwad. All rights reserved.
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.1}>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <span className="text-neutral-800">|</span>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </footer>
    );
}
