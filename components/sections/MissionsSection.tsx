"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const PAST_EVENT_IMAGES = [
    "gallery1.jpeg",
    "gallery2.jpeg",
    "gallery3.jpeg",
    "gallery4.jpeg",
    "gallery6.jpeg",
    "gallery7.jpeg",
    "gallery9.jpeg",
    "gallery10.jpeg",
    "gallery11.jpeg",
    "gallery12.jpeg",
    "gallery13.jpeg",
];

const PAST_WINNERS_IMAGES = ["gallery5_1.jpeg", "gallery8.jpeg"];

type TabId = "past-event" | "past-winners";

const TABS: { id: TabId; label: string; icon: string; images: string[]; basePath: string }[] = [
    {
        id: "past-event",
        label: "Past Event",
        icon: "solar:camera-bold",
        images: PAST_EVENT_IMAGES,
        basePath: "/gallery/past-event/",
    },
    {
        id: "past-winners",
        label: "Past Winners",
        icon: "solar:cup-star-bold",
        images: PAST_WINNERS_IMAGES,
        basePath: "/gallery/past-winners/",
    },
];

const IMAGE_INTERVAL = 3500; // ms per image
const ease = [0.25, 0.8, 0.25, 1] as [number, number, number, number];

export default function MissionsSection() {
    const [activeTab, setActiveTab] = useState<TabId>("past-event");
    const [imageIndex, setImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const currentTabData = TABS.find((t) => t.id === activeTab)!;
    const totalImages = currentTabData.images.length;
    const currentSrc = currentTabData.basePath + currentTabData.images[imageIndex];

    // Auto-cycle: rotate through images in current tab, then switch tab
    const advanceImage = useCallback(() => {
        setImageIndex((prev) => {
            const next = prev + 1;
            if (next >= TABS.find((t) => t.id === activeTab)!.images.length) {
                // Move to next tab
                setActiveTab((currentTab) => {
                    const currentIdx = TABS.findIndex((t) => t.id === currentTab);
                    return TABS[(currentIdx + 1) % TABS.length].id;
                });
                return 0;
            }
            return next;
        });
    }, [activeTab]);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(advanceImage, IMAGE_INTERVAL);
        return () => clearInterval(timer);
    }, [isAutoPlaying, advanceImage]);

    // Reset image index when tab changes manually
    const handleTabClick = (tabId: TabId) => {
        if (tabId === activeTab) return;
        setActiveTab(tabId);
        setImageIndex(0);
        setIsAutoPlaying(true);
    };

    const handleDotClick = (idx: number) => {
        setImageIndex(idx);
        setIsAutoPlaying(false);
        // Resume auto-play after 6s of inactivity
        setTimeout(() => setIsAutoPlaying(true), 6000);
    };

    return (
        <section
            id="projects"
            className="relative py-24 md:py-32 bg-neutral-950 text-white overflow-hidden"
        >
            {/* Ambient Background */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-amber-900/15 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.45, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="md:px-12 z-10 w-full max-w-7xl mx-auto px-6 relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div className="max-w-2xl relative">
                        <div className="absolute -left-4 md:-left-8 top-1 bottom-1 w-1 bg-gradient-to-b from-amber-500 to-transparent opacity-50" />
                        <div className="flex items-center gap-3 mb-4">
                            <motion.span
                                className="w-6 h-[2px] bg-gradient-to-r from-amber-500 to-amber-300 block"
                                initial={{ width: 0 }}
                                whileInView={{ width: 24 }}
                                transition={{ duration: 0.6, ease }}
                                viewport={{ once: true }}
                            />
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/80">
                              2024 Flashback
                            </span>
                        </div>
                        <h2 className="md:text-7xl text-5xl font-medium text-white tracking-tighter font-bricolage leading-[0.9]">
                            Gallery
                            <span className="font-light text-white/20">.</span>
                        </h2>
                    </div>

                    {/* Tab Controls */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-amber-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        <div className="relative flex items-center p-1.5 rounded-full bg-neutral-900/90 border border-white/10 backdrop-blur-xl shadow-2xl">
                            {TABS.map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    onClick={() => handleTabClick(tab.id)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                        ? "bg-white text-neutral-950 shadow-lg shadow-white/5"
                                        : "text-white/50 hover:text-white hover:bg-white/5"
                                        }`}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    layout
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon={tab.icon} width="14" />
                                    {tab.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Gallery Display */}
                <div className="relative rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl aspect-[16/9] md:aspect-[21/9]">
                    {/* Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSrc}
                            className="absolute inset-0"
                            initial={{ opacity: 0, scale: 1.08 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.8, ease }}
                        >
                            <Image
                                src={currentSrc}
                                alt={`${currentTabData.label} - Image ${imageIndex + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 80vw"
                                priority={imageIndex === 0}
                            />
                            {/* Bottom gradient for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/20" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Top HUD overlay */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                        <div className="flex gap-2">
                            <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono text-white/80">
                                {currentTabData.label}
                            </span>
                            <span className="px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-[10px] uppercase tracking-widest font-mono text-amber-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                                {imageIndex + 1} / {totalImages}
                            </span>
                        </div>
                        {isAutoPlaying && (
                            <motion.div
                                className="px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-mono text-white/50 flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <motion.span
                                    className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                Auto
                            </motion.div>
                        )}
                    </div>

                    {/* Bottom overlay with dots + nav */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                        <div className="flex items-end justify-between gap-4">
                            {/* Image counter text */}
                            <div>
                                <motion.h3
                                    key={`${activeTab}-${imageIndex}`}
                                    className="text-2xl md:text-4xl font-bricolage font-medium text-white tracking-tight"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease }}
                                >
                                    {currentTabData.label}
                                </motion.h3>
                                <p className="text-white/40 text-xs font-mono mt-1 uppercase tracking-widest">
                                    Hack2Future 2025
                                </p>
                            </div>

                            {/* Navigation arrows */}
                            <div className="flex items-center gap-3">
                                <motion.button
                                    onClick={() => {
                                        setImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
                                        setIsAutoPlaying(false);
                                        setTimeout(() => setIsAutoPlaying(true), 6000);
                                    }}
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md bg-black/20"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:arrow-left-linear" width="18" />
                                </motion.button>
                                <motion.button
                                    onClick={() => {
                                        setImageIndex((prev) => (prev + 1) % totalImages);
                                        setIsAutoPlaying(false);
                                        setTimeout(() => setIsAutoPlaying(true), 6000);
                                    }}
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md bg-black/20"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:arrow-right-linear" width="18" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Progress dots */}
                        <div className="flex items-center gap-1.5 mt-5">
                            {currentTabData.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleDotClick(idx)}
                                    className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                                    style={{
                                        width: idx === imageIndex ? 32 : 8,
                                        backgroundColor:
                                            idx === imageIndex
                                                ? "rgba(245,158,11,0.6)"
                                                : "rgba(255,255,255,0.15)",
                                    }}
                                >
                                    {idx === imageIndex && isAutoPlaying && (
                                        <motion.div
                                            className="absolute inset-y-0 left-0 bg-amber-400 rounded-full"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{
                                                duration: IMAGE_INTERVAL / 1000,
                                                ease: "linear",
                                            }}
                                            key={`progress-${activeTab}-${imageIndex}`}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Thumbnail strip */}
                <div className="mt-6 flex gap-3 overflow-x-auto hide-scrollbar pb-2">
                    {currentTabData.images.map((img, idx) => (
                        <motion.button
                            key={img}
                            onClick={() => handleDotClick(idx)}
                            className={`relative shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${idx === imageIndex
                                ? "border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                                : "border-white/10 opacity-50 hover:opacity-80 hover:border-white/20"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src={currentTabData.basePath + img}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="120px"
                            />
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
