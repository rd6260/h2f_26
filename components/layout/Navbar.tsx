"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="fixed flex z-50 pr-4 pl-4 top-6 right-0 left-0 justify-center"
        >
            <motion.nav
                animate={{
                    backgroundColor: scrolled
                        ? "rgba(10, 10, 10, 0.85)"
                        : "rgba(23, 23, 23, 0.6)",
                    borderColor: scrolled
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(255,255,255,0.1)",
                    boxShadow: scrolled
                        ? "0 25px 50px -12px rgba(0,0,0,0.5)"
                        : "0 25px 50px -12px rgba(0,0,0,0.25)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex w-full max-w-4xl border rounded-full pt-2 pr-6 pb-2 pl-2 backdrop-blur-xl items-center justify-between"
            >
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-3 pl-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    <motion.div
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        {/* @ts-expect-error iconify-icon is a web component */}
                        <iconify-icon icon="solar:planet-bold-duotone" width="18" />
                    </motion.div>
                    <span className="font-bricolage text-lg tracking-tight font-medium">
                        HACK2FUTURE
                    </span>
                </motion.div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
                    {[
                        { label: "Fleet", href: "#" },
                        { label: "Missions", href: "#projects" },
                        { label: "Tech", href: "#process" },
                        { label: "Crew", href: "#careers" },
                        { label: "Protocol", href: "#methodology" },
                    ].map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            className="relative hover:text-white transition-colors"
                            whileHover="hover"
                        >
                            {link.label}
                            <motion.span
                                className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white origin-left"
                                initial={{ scaleX: 0 }}
                                variants={{ hover: { scaleX: 1 } }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <motion.button
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                        {/* @ts-expect-error iconify-icon is a web component */}
                        <iconify-icon icon="solar:magnifer-linear" width="20" />
                    </motion.button>
                    <motion.button
                        className="relative w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                        {/* @ts-expect-error iconify-icon is a web component */}
                        <iconify-icon icon="solar:menu-dots-square-linear" width="20" />
                        <AnimatePresence>
                            <motion.span
                                className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500 }}
                            />
                        </AnimatePresence>
                    </motion.button>
                </div>
            </motion.nav>
        </motion.div>
    );
}
