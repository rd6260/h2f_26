"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const PAST_EVENT_IMAGES = [
  "gallery6.jpeg",
  "gallery7.jpeg",
  "gallery4.jpeg",
  "gallery10.jpeg",
];

const PAST_WINNERS_IMAGES = [
  "gallery5_1.jpeg",
  "gallery8.jpeg",
  "gallery14.jpeg",
  "gallery15.jpeg",
  "gallery16.jpeg",
  "gallery17.jpeg",
  "gallery18.jpeg",
  "gallery19.jpeg",
  "gallery20.jpeg",
];

type TabId = "past-event" | "past-winners";

const TABS: { id: TabId; label: string; icon: string; images: string[]; basePath: string }[] = [
  {
    id: "past-winners",
    label: "Past Winners",
    icon: "solar:cup-star-bold",
    images: PAST_WINNERS_IMAGES,
    basePath: "https://cdn.jsdelivr.net/gh/rd6260/h2f_26@main/public/gallery/past-winners/",
  },
  {
    id: "past-event",
    label: "Past Event",
    icon: "solar:camera-bold",
    images: PAST_EVENT_IMAGES,
    basePath: "https://cdn.jsdelivr.net/gh/rd6260/h2f_26@main/public/gallery/past-event/",
  },
];

const IMAGE_INTERVAL = 3500; // ms per image
const ease = [0.25, 0.8, 0.25, 1] as [number, number, number, number];

export default function MissionsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("past-winners");
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
      <div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-900/15 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen"
      />

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="md:px-12 z-10 w-full max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl relative">
            <div className="absolute -left-4 md:-left-8 top-1 bottom-1 w-1 bg-gradient-to-b from-amber-500 to-transparent opacity-50" />
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              viewport={{ once: true, margin: "-50px" }}
            >
            </motion.div>
            <motion.h2
              className="md:text-7xl text-5xl font-medium text-white tracking-tighter font-bricolage leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/40 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Gallery</span>
              {/* <span className="font-light text-amber-500/50 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">.</span> */}
            </motion.h2>
          </div>

          {/* Tab Controls */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="relative flex items-center p-1.5 rounded-full bg-neutral-900/80 border border-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              {TABS.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 z-10 ${activeTab === tab.id
                    ? "text-amber-500"
                    : "text-white/50 hover:text-white/80"
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active Tab Background Pill */}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-amber-500/10 border border-amber-500/20 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon={tab.icon} width="14" />
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Gallery Display */}
        <div className="relative rounded-[2rem] overflow-hidden bg-neutral-900/50 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),auto_auto_auto_auto_rgba(245,158,11,0.05)_inset,0_0_0_1px_rgba(255,255,255,0.05)] aspect-[16/9] md:aspect-[21/9]">
          {/* Image Container with Glow */}
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] z-10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSrc}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.9, ease }}
            >
              <Image
                src={currentSrc}
                alt={`${currentTabData.label} - Image ${imageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority={imageIndex === 0}
              />
              {/* Enhanced Bottom gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90" />
            </motion.div>
          </AnimatePresence>

          {/* Bottom overlay with dots + nav */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
            <div className="flex items-end justify-between gap-4">
              {/* Image counter text */}
              <div>
                <motion.h3
                  key={`${activeTab}-${imageIndex}`}
                  className="text-3xl md:text-5xl font-bricolage font-medium text-white tracking-tight drop-shadow-lg"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.1 }}
                >
                  {currentTabData.label}
                </motion.h3>
                <div className="flex items-center gap-3 mt-3">
                  <p className="text-amber-400/80 text-xs font-mono uppercase tracking-widest font-semibold drop-shadow-md">
                    Hack2Future 2025
                  </p>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-white/40 text-xs font-mono tracking-widest uppercase">
                    {imageIndex + 1} / {totalImages}
                  </span>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => {
                    setImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 6000);
                  }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-neutral-800/80 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all backdrop-blur-xl bg-black/40 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="solar:arrow-left-linear" width="22" />
                </motion.button>
                <motion.button
                  onClick={() => {
                    setImageIndex((prev) => (prev + 1) % totalImages);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 6000);
                  }}
                  className="w-12 h-12 rounded-full border border-amber-500/20 flex items-center justify-center text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all backdrop-blur-xl bg-black/40 group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="solar:arrow-right-linear" width="22" />
                </motion.button>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-6">
              {currentTabData.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    width: idx === imageIndex ? 48 : 12,
                    backgroundColor:
                      idx === imageIndex
                        ? "rgba(245,158,11,0.3)"
                        : "rgba(255,255,255,0.1)",
                    boxShadow: idx === imageIndex ? "0 0 10px rgba(245,158,11,0.2)" : "none"
                  }}
                >
                  {idx === imageIndex && isAutoPlaying && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: IMAGE_INTERVAL / 1000,
                        ease: "linear",
                      }}
                      key={`progress-${activeTab}-${imageIndex}`}
                    />
                  )}
                  {idx === imageIndex && !isAutoPlaying && (
                    <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-8 flex gap-4 overflow-x-auto hide-scrollbar pb-4 pt-2 px-2 -mx-2">
          {currentTabData.images.map((img, idx) => (
            <motion.button
              key={img}
              onClick={() => handleDotClick(idx)}
              className={`relative shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden transition-all duration-400 group ${idx === imageIndex
                ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-neutral-950 scale-105 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] z-10"
                : "border border-white/5 opacity-60 hover:opacity-100 hover:border-white/20 filter grayscale-[50%] hover:grayscale-0 hover:scale-105"
                }`}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={currentTabData.basePath + img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="128px"
              />
              {idx !== imageIndex && (
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
