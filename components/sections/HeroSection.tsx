"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.25, 0.8, 0.25, 1] as [number, number, number, number];

/* ── Animated count-up number ── */
function CountUp({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <span className="text-2xl text-white font-bricolage">
      {value}
      <span className="text-emerald-400 text-lg">{suffix}</span>
    </span>
  );
}

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
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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

      {/* ── Floating Data Points (top-right) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease }}
        style={{ y: badgeY }}
        className="absolute top-32 right-6 md:right-12 z-20 flex flex-col items-end gap-3"
      >
        <motion.div
          className="px-4 py-2.5 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.25)", boxShadow: "0 8px 32px rgba(245,158,11,0.15)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          <span className="text-xs font-mono tracking-wider uppercase text-white/90">
            Live: View the problem statements
          </span>
        </motion.div>
        <motion.div
          className="px-4 py-2.5 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.8, duration: 0.6, ease }}
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.25)" }}
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          <span className="text-xs font-mono tracking-wider uppercase text-white/70">
            36hr &bull; 300+ Hackers
          </span>
        </motion.div>
      </motion.div>

      {/* ── Main Content Grid ── */}
      <motion.div
        style={{ y: textY }}
        className="md:px-12 grid grid-cols-1 md:grid-cols-12 z-10 w-full max-w-[90rem] mr-auto ml-auto pr-6 pl-6 relative gap-x-6 gap-y-6 items-end"
      >
        {/* Left Column: Primary Headline */}
        <div className="md:col-span-7 relative flex flex-col justify-end">
          {/* Decorative Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease }}
            className="flex items-center gap-3 mb-4 md:mb-8"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 1.4, duration: 0.6, ease }}
              className="h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-transparent block"
            />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-amber-400/90">
              Est. 2042
            </span>
          </motion.div>

          <h1 className="font-bricolage text-white leading-none font-bold select-none">
            {/* HACK */}
            <motion.span
              className="block text-[18vw] md:text-[10rem] lg:text-[12rem] text-white tracking-[-0.04em]"
              initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.4, duration: 1.2, ease }}
            >
              HACK
            </motion.span>
            {/* 2 FUTURE */}
            <motion.div
              className="flex items-baseline gap-2 md:gap-4 -mt-3 md:-mt-10 lg:-mt-14"
              initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.6, duration: 1.2, ease }}
            >
              <motion.span
                className="text-[18vw] md:text-[10rem] lg:text-[12rem] font-extralight italic font-serif relative text-amber-500/50"
                animate={{
                  color: ["rgba(245,158,11,0.5)", "rgba(255,255,255,0.35)", "rgba(245,158,11,0.5)"],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                2
              </motion.span>
              <span className="text-[18vw] md:text-[10rem] lg:text-[12rem] text-white tracking-[-0.04em]">
                FUTURE
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

        {/* Right Column: Description & Specs */}
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end pb-4 md:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.8, duration: 1, ease }}
            className="overflow-hidden md:p-8 bg-neutral-950/60 border-white/10 border ring-white/5 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            {/* Shimmer Overlay */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none animate-shimmer-effect" />

            {/* Top accent line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[1px]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.2, duration: 1, ease }}
              style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)" }}
            />

            <div className="relative z-10">
              <p className="md:text-xl leading-relaxed antialiased text-lg font-light text-white mb-8 drop-shadow-md">
                The Flagship Hackathon of IIIT Dharwad. Build Bold, Think
                Beyond, Code the future, Hack2Future
              </p>

              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                  className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6"
                >
                  <div>
                    <span className="block text-[10px] uppercase text-white/50 tracking-widest mb-1">
                      Edition
                    </span>
                    <CountUp value="2nd" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-white/50 tracking-widest mb-1">
                      Bases
                    </span>
                    <CountUp value="04" />
                  </div>
                </motion.div>

                <motion.a
                  href="#projects"
                  className="group relative flex items-center justify-between w-full p-1 border-b border-white/30 hover:border-amber-500/60 transition-colors pb-2 overflow-hidden"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-sm font-medium text-white tracking-wide">
                    View Brochure
                  </span>
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon
                    icon="solar:arrow-right-linear"
                    className="text-white group-hover:translate-x-1 transition-transform"
                    width="18"
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.8, ease }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-amber-500/80 to-transparent"
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
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40 font-mono">
          <span>Reg.Status</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          <span>H2F 2026</span>
        </div>
        <motion.div
          className="bg-neutral-900/80 w-64 border-white/10 border rounded-xl px-4 py-4 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          whileHover={{ borderColor: "rgba(245,158,11,0.3)", scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex justify-between mb-2">
            <span className="text-xs text-white/60">Registration</span>
            <span className="text-xs text-emerald-400 font-mono">Open</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ delay: 2.8, duration: 1.5, ease }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <span className="block text-[10px] text-white/40 uppercase tracking-wider">
                Duration
              </span>
              <span className="text-sm text-white font-mono">36 hrs</span>
            </div>
            <div>
              <span className="block text-[10px] text-white/40 uppercase tracking-wider">
                Tracks
              </span>
              <span className="text-sm text-white font-mono">05</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
