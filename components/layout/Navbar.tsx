"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Timeline", href: "#timeline" },
    { label: "Tracks", href: "#process" },
    { label: "Prizes", href: "#prizes" },
    { label: "Sponsors", href: "#sponsors" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
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
                className="flex flex-col w-full max-w-4xl border rounded-2xl md:rounded-full backdrop-blur-xl overflow-hidden"
            >
                <div className="flex pt-2 pr-3 pb-2 pl-2 items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
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
                            <iconify-icon icon="solar:code-bold" width="16" />
                        </motion.div>
                        <span className="font-bricolage text-lg tracking-tight font-medium">
                            H2F
                        </span>
                    </motion.a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-7 text-sm font-medium text-white/60">
                        {NAV_LINKS.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                className="relative hover:text-white transition-colors"
                                whileHover="hover"
                            >
                                {link.label}
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-amber-400 to-amber-500 origin-left"
                                    initial={{ scaleX: 0 }}
                                    variants={{ hover: { scaleX: 1 } }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        {/* Register CTA */}
                        <motion.a
                            href="#"
                            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-black text-sm font-semibold shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-shadow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            Register
                            {/* @ts-expect-error iconify-icon is a web component */}
                            <iconify-icon icon="solar:arrow-right-linear" width="16" />
                        </motion.a>

                        {/* Mobile hamburger */}
                        <motion.button
                            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {/* @ts-expect-error iconify-icon is a web component */}
                            <iconify-icon
                                icon={mobileOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
                                width="22"
                            />
                        </motion.button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col gap-1 px-4 pb-4 pt-2 border-t border-white/10">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-white/60 hover:text-white text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.3 }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="#"
                                    onClick={() => setMobileOpen(false)}
                                    className="mt-2 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-black text-sm font-semibold"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25, duration: 0.3 }}
                                >
                                    Register Now
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:arrow-right-linear" width="16" />
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </motion.div>
    );
}
