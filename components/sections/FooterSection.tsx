"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";




const SOCIALS = [
    {
        label: "Instagram",
        icon: "mdi:instagram",
        href: "https://www.instagram.com/h2f.iiitdwd/?hl=en",
        color: "hover:text-pink-400",
    },
    {
        label: "LinkedIn",
        icon: "mdi:linkedin",
        href: "https://www.linkedin.com/company/hack-2-future/",
        color: "hover:text-blue-400",
    },
    {
        label: "Discord",
        icon: "mdi:discord",
        href: "https://discord.gg/pDs7HhJK",
        color: "hover:text-blue-400",
    },
    {
        label: "X",
        icon: "mdi:twitter",
        href: "https://x.com/hack2future_",
        color: "hover:text-blue-400",
    },
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    {/* Brand */}
                    <AnimateOnScroll className="lg:col-span-1">
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
                        <p className="text-neutral-400 text-sm leading-relaxed font-light">
                            A 36-hour national-level innovation sprint bridging
                            academia and industry — where student
                            minds build rapid solutions to real-world
                            challenges.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {SOCIALS.map(({ label, icon, href, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
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

                    {/* Contact - Expanded for better layout */}
                    <AnimateOnScroll delay={0.1} className="lg:col-span-2">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-8 font-mono flex items-center gap-2">
                            <span className="w-5 h-[1px] bg-emerald-500 block" />
                            Contact
                        </h4>

                        <div className="mb-8">
                            <motion.a
                                href="mailto:hack2future@iiitdwd.ac.in"
                                className="text-neutral-500 hover:text-white text-base transition-colors flex items-center gap-3 group"
                                whileHover={{ x: 4 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                            >
                                {/* @ts-expect-error iconify-icon is a web component */}
                                <iconify-icon
                                    icon="solar:letter-linear"
                                    width="22"
                                    className="text-emerald-400 shrink-0"
                                />
                                <span className="font-light tracking-wide">hackathon@iiitdwd.ac.in</span>
                            </motion.a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                            {/* Prajin */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-white font-semibold text-[15px]">Prajin AD</span>
                                    <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.1em]">Head Organizer</span>
                                </div>
                                <motion.a
                                    href="tel:+919789880949"
                                    className="text-neutral-500 hover:text-white text-sm transition-colors flex items-center gap-2.5 group"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:phone-linear" width="16" className="text-emerald-400 shrink-0" />
                                    <span>+91 97898 80949</span>
                                </motion.a>
                                <motion.a
                                    href="mailto:23bec036@iiitdwd.ac.in"
                                    className="text-neutral-500 hover:text-white text-[12px] transition-colors flex items-center gap-2.5 group mt-1"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:letter-linear" width="14" className="text-emerald-400 shrink-0" />
                                    <span className="font-mono opacity-80">23bec036@iiitdwd.ac.in</span>
                                </motion.a>
                            </div>

                            {/* Prem */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-white font-semibold text-[15px]">Prem TK</span>
                                    <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.1em]">Program Director</span>
                                </div>
                                <motion.a
                                    href="tel:+918489889568"
                                    className="text-neutral-500 hover:text-white text-sm transition-colors flex items-center gap-2.5 group"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:phone-linear" width="16" className="text-emerald-400 shrink-0" />
                                    <span>+91 84898 89568</span>
                                </motion.a>
                                <motion.a
                                    href="mailto:23bds065@iiitdwd.ac.in"
                                    className="text-neutral-500 hover:text-white text-[12px] transition-colors flex items-center gap-2.5 group mt-1"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:letter-linear" width="14" className="text-emerald-400 shrink-0" />
                                    <span className="font-mono opacity-80">23bds065@iiitdwd.ac.in</span>
                                </motion.a>
                            </div>

                            {/* Sai Sathwik */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-white font-semibold text-[15px]">Sai Sathwik</span>
                                    <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.1em]">Head Operations</span>
                                </div>
                                <motion.a
                                    href="tel:+918074916768"
                                    className="text-neutral-500 hover:text-white text-sm transition-colors flex items-center gap-2.5 group"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:phone-linear" width="16" className="text-emerald-400 shrink-0" />
                                    <span>+91 80749 16768</span>
                                </motion.a>
                                <motion.a
                                    href="mailto:23bcs036@iiitdwd.ac.in"
                                    className="text-neutral-500 hover:text-white text-[12px] transition-colors flex items-center gap-2.5 group mt-1"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:letter-linear" width="14" className="text-emerald-400 shrink-0" />
                                    <span className="font-mono opacity-80">23bcs036@iiitdwd.ac.in</span>
                                </motion.a>
                            </div>

                            {/* Swati R */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-white font-semibold text-[15px]">Swati R</span>
                                    <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.1em]">Chief of Staff</span>
                                </div>
                                <motion.a
                                    href="tel:+919398481346"
                                    className="text-neutral-500 hover:text-white text-sm transition-colors flex items-center gap-2.5 group"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:phone-linear" width="16" className="text-emerald-400 shrink-0" />
                                    <span>+91 93984 81346</span>
                                </motion.a>
                                <motion.a
                                    href="mailto:24bcs118@iiitdwd.ac.in"
                                    className="text-neutral-500 hover:text-white text-[12px] transition-colors flex items-center gap-2.5 group mt-1"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:letter-linear" width="14" className="text-emerald-400 shrink-0" />
                                    <span className="font-mono opacity-80">24bcs118@iiitdwd.ac.in</span>
                                </motion.a>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Location */}
                    <AnimateOnScroll delay={0.3} className="lg:col-span-1">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 font-mono flex items-center gap-2">
                            <span className="w-5 h-[1px] bg-emerald-500 block" />
                            Venue
                        </h4>
                        <motion.a
                            href="https://maps.google.com/?q=IIIT+Dharwad,+Ittigatti+Road,+Dharwad,+Karnataka+580009"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/0 group/venue cursor-pointer"
                            whileHover={{ scale: 1.03, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="bg-neutral-900/80 backdrop-blur-xl rounded-[15px] p-5 border border-white/5 group-hover/venue:border-emerald-500/30 group-hover/venue:shadow-[0_8px_30px_rgba(16,185,129,0.15)] transition-all duration-500" title="Click to open the map">
                                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon
                                        icon="solar:map-point-linear"
                                        width="18"
                                    />
                                    <span className="text-xs font-mono uppercase tracking-wider">
                                        Campus
                                    </span>
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon
                                        icon="solar:arrow-right-up-linear"
                                        width="14"
                                        className="ml-auto opacity-0 group-hover/venue:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                                <p className="text-white text-sm font-medium mb-1 group-hover/venue:text-emerald-50 transition-colors">
                                    IIIT Dharwad
                                </p>
                                <p className="text-neutral-500 text-xs leading-relaxed group-hover/venue:text-neutral-400 transition-colors">
                                    Ittigatti Road, Near Sattur Colony,
                                    <br />
                                    Dharwad 580009, Karnataka
                                </p>
                            </div>
                        </motion.a>
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

