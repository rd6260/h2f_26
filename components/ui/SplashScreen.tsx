'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
                        {/* Video styled to match Hero Graphic position */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute bottom-[-2%] right-[5%] z-[20] h-[95vh] max-w-[85%] flex justify-end items-end w-full translate-x-12 md:translate-x-20 lg:translate-x-[110px]"
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
