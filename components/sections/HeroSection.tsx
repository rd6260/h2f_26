"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import CountdownDevfolio from "@/components/ui/CountdownDevfolio";

const ease = [0.25, 0.8, 0.25, 1] as [number, number, number, number];




export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <header
      ref={ref}
      className="relative w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24 min-h-screen md:h-screen"
    >
      {/* ── Background Image Layer with parallax ── */}
      <div className="absolute inset-0 z-0 bg-black">
        <motion.div
          initial={{ scale: 1.4, opacity: 0, filter: "blur(20px) grayscale(100%)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px) grayscale(0%)" }}
          transition={{ duration: 3.5, ease }}
          style={{ scale: imgScale, y: imgY }}
          className="w-full h-full will-change-transform"
        >
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25904405-aa15-491b-9a03-de5fc75f18b3_3840w.webp"
            alt="Brutalist Architecture Detail"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Multi-layer gradients for depth */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-transparent" />
        <div className="bg-black/10 mix-blend-overlay absolute inset-0" />
      </div>

      {/* ── Ambient Glow Orbs ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-emerald-500/6 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-violet-500/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />
      </motion.div>

      {/* ── Floating Particles ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute inset-0 z-[2] pointer-events-none"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </motion.div>

      {/* ── Main Content Grid ── */}
      <motion.div
        style={{ y: textY }}
        className="md:px-12 grid grid-cols-1 md:grid-cols-12 z-10 w-full max-w-[90rem] mr-auto ml-auto pr-6 pl-6 relative gap-x-6 gap-y-6 items-end"
      >
        {/* Left Column: Primary Headline */}
        <div className="md:col-span-7 relative flex flex-col justify-end">

          <h1 className="font-bricolage text-white leading-none font-bold select-none">
            {/* HACK 2 */}
            <motion.div
              className="flex items-baseline gap-2 md:gap-4"
              initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.4, duration: 1.2, ease }}
            >
              <span className="text-[18vw] md:text-[10rem] lg:text-[12rem] text-white tracking-[-0.04em]">
                HACK
              </span>
              <span
                className="text-[18vw] md:text-[10rem] lg:text-[12rem] font-bold font-bricolage relative select-none"
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitTextStrokeWidth: "3px",
                  WebkitTextStrokeColor: "rgba(180, 180, 200, 0.45)",
                }}
              >
                2
              </span>
            </motion.div>
            {/* FUTURE */}
            <motion.div
              className="flex items-baseline gap-2 md:gap-4 -mt-3 md:-mt-10 lg:-mt-14 whitespace-nowrap"
              initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.6, duration: 1.2, ease }}
            >
              <span className="text-[18vw] sm:mt-5 md:text-[10rem] lg:text-[12rem] text-white tracking-[-0.04em]">
                FUTURE
              </span>
              <span className="text-[10vw] md:text-[7rem] lg:text-[10rem] text-amber-500/50 font italic font-montserrat">
                2.0
              </span>
            </motion.div>
          </h1>

          {/* Tagline below headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8, ease }}
            className="mt-5 md:mt-8 flex items-center gap-4"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 2.2, duration: 0.5, ease }}
              className="h-[1px] bg-white/20 block shrink-0"
            />
            <p className="text-white/50 text-xs md:text-sm font-mono tracking-[0.2em] uppercase">
              Where Innovation Meets Ambition
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Countdown + Devfolio — Bottom Right ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8, ease }}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20"
      >
        <CountdownDevfolio />
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.8, ease }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40 hidden md:block">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-amber-500/80 to-transparent hidden md:block"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ── Bottom-left status widget ── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.4, duration: 0.8, ease }}
        className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-2 z-20"
      >
      </motion.div>
    </header>
  );
}
