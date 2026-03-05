'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlitchText from './GlitchText';

const SplashScreen = () => {
    const [visible, setVisible] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Force scroll to top on initial load
        if (typeof window !== 'undefined') {
            window.history.scrollRestoration = 'manual';
            window.scrollTo(0, 0);
        }

        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e));
        }

        // Determine timeout based on screen size (mobile < 768px)
        const isMobile = window.innerWidth < 768;
        const duration = isMobile ? 3000 : 7000;

        // Hide the splash screen after the dynamic duration
        const timeout = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timeout);
    }, []);

    // Use the gold/amber color from the theme
    const goldColor = '#F59E0B';
    // Alternatively, `#EAB308` (yellow-500) or `#FFD700`

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
                    className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black"
                >
                    {/* Desktop: Full Screen Background Video */}
                    <div className="relative w-full h-full overflow-hidden bg-black hidden md:block">
                        {/* Loading Text on the Left */}
                        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 z-[30] pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="flex flex-col gap-2"
                            >
                                <GlitchText
                                    speed={1}
                                    enableShadows={true}
                                    enableOnHover={false}
                                    className="text-white font-mono text-5xl lg:text-7xl font-bold tracking-[0.2em] opacity-90"
                                >
                                    LOADING...
                                </GlitchText>
                                <div className="w-full h-0.5 bg-white/10 relative overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 7, ease: "linear" }}
                                        className="absolute inset-y-0 left-0 bg-white/40"
                                    />
                                </div>
                            </motion.div>
                        </div>
                        {/* Video styled to match Hero Graphic position */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute bottom-[-2%] right-[5%] z-[20] h-[75vh] md:h-[85vh] lg:h-[95vh] w-auto max-w-[75vw] lg:max-w-[85%] flex justify-end items-end w-full translate-x-12 md:translate-x-20 lg:translate-x-[110px]"
                        >
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-contain object-right-bottom w-auto h-full"
                            >
                                <source src="/video/splash3.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                    </div>

                    {/* Mobile: Retro Pixel Art Loading Bar */}
                    <div className="flex justify-center items-center w-full h-full md:hidden bg-black flex-col px-8">
                        <div className="w-full max-w-sm flex flex-col gap-2">
                            <div className="flex justify-between items-end text-white font-mono font-bold text-xl uppercase tracking-widest drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                                <span>LOADING...</span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 3, ease: "linear" }}
                                >
                                    80%
                                </motion.span>
                            </div>

                            <div className="w-full h-8 border-4 border-white p-1">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "80%" }}
                                    transition={{ duration: 3, ease: "linear" }}
                                    className="h-full bg-white relative overflow-hidden"
                                >
                                    {/* Stripes effect for the pixel bar */}
                                    <div className="absolute inset-0 flex justify-between" style={{ background: "repeating-linear-gradient(90deg, transparent, transparent 15px, black 15px, black 20px)" }}></div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
