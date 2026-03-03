"use client";

import { useRef } from "react";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

/* ── Shared card wrapper with scroll-driven parallax ── */
function SponsorCard({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div ref={ref} style={{ y }} transition={{ type: "spring", stiffness: 100, damping: 20 }}>
      {children}
    </motion.div>
  );
}

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="bg-neutral-950 border-white/5 border-t pt-16 md:pt-24 px-4 md:px-6 pb-16 md:pb-24 relative overflow-hidden"
      id="sponsors"
    >
      {/* Ambient Background Effect – parallax on scroll */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-1000"
      />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="z-10 w-full max-w-7xl mr-auto ml-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <AnimateOnScroll className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-amber-500 text-xs font-mono uppercase tracking-widest">
                Strategic Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bricolage font-medium tracking-tighter text-white leading-[0.9]">
              Sponsors &
              <span className="text-white/30"> Partners.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="text-neutral-400 text-base md:text-lg max-w-md font-light leading-relaxed mb-2">
            <p>
              The intergalactic entities and corporations funding the next generation of builders. We partner with the best
              to give you the ultimate building arsenal.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Tiers Container */}
        <div className="space-y-10 md:space-y-16">

          {/* ─── Sponsors Tier ─── */}
          <AnimateOnScroll delay={0.1}>
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <span className="text-xs md:text-sm font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2 bg-amber-500/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-amber-500/20">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                [ SPONSORS ]
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 via-amber-500/10 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {/* Cyseck */}
              <SponsorCard index={0}>
                <div className="group animated-border-box relative p-[1px] rounded-2xl md:rounded-[2rem] overflow-hidden bg-neutral-900/20">
                  <motion.a href="#"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative z-10 flex items-center justify-center p-4 md:p-8 h-48 md:h-80 bg-neutral-950/90 rounded-[23px] md:rounded-[31px] border border-white/5 overflow-hidden transition-all duration-500 group-hover:bg-neutral-900/80 backdrop-blur-xl group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="relative flex flex-col items-center justify-center w-full h-full animate-float">
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(245,158,11,0.3)" }}
                        className="bg-white p-4 md:p-6 rounded-xl w-full h-full flex items-center justify-center shadow-lg border border-white/10 transition-shadow duration-300">
                        <img src="/logos/cysec.png" alt="Cyseck" className="max-h-full max-w-full object-contain" />
                      </motion.div>
                    </div>
                  </motion.a>
                </div>
              </SponsorCard>

              {/* Infosys */}
              <SponsorCard index={1}>
                <div className="group animated-border-box relative p-[1px] rounded-2xl md:rounded-[2rem] overflow-hidden bg-neutral-900/20">
                  <motion.a href="#"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative z-10 flex items-center justify-center p-4 md:p-8 h-48 md:h-80 bg-neutral-950/90 rounded-[23px] md:rounded-[31px] border border-white/5 overflow-hidden transition-all duration-500 group-hover:bg-neutral-900/80 backdrop-blur-xl group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="relative flex flex-col items-center justify-center w-full h-full animate-float" style={{ animationDelay: "-2s" }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(245,158,11,0.3)" }}
                        className="bg-white p-4 md:p-6 rounded-xl w-full h-full flex items-center justify-center shadow-lg border border-white/10 transition-shadow duration-300">
                        <img src="/logos/infosys.png" alt="Infosys" className="max-h-full max-w-full object-contain" />
                      </motion.div>
                    </div>
                  </motion.a>
                </div>
              </SponsorCard>

              {/* IDRP */}
              <SponsorCard index={2}>
                <div className="group animated-border-box relative p-[1px] rounded-2xl md:rounded-[2rem] overflow-hidden bg-neutral-900/20">
                  <motion.a href="#"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative z-10 flex items-center justify-center p-4 md:p-8 h-48 md:h-80 bg-neutral-950/90 rounded-[23px] md:rounded-[31px] border border-white/5 overflow-hidden transition-all duration-500 group-hover:bg-neutral-900/80 backdrop-blur-xl group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="relative flex flex-col items-center justify-center w-full h-full animate-float" style={{ animationDelay: "-4s" }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(245,158,11,0.3)" }}
                        className="bg-white p-4 md:p-6 rounded-xl w-full h-full flex items-center justify-center shadow-lg border border-white/10 transition-shadow duration-300">
                        <img src="/logos/idrp.png" alt="IDRP" className="max-h-full max-w-full object-contain" />
                      </motion.div>
                    </div>
                  </motion.a>
                </div>
              </SponsorCard>
            </div>
          </AnimateOnScroll>

          {/* ─── Organizing Partner Tier ─── */}
          <AnimateOnScroll delay={0.2}>
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <span className="text-xs md:text-sm font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-emerald-500/20 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                [ ORGANIZING_PARTNER ]
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
            </div>

            <SponsorCard index={0}>
              <div className="flex justify-center">
                <motion.a href="#"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="group relative flex items-center justify-center h-48 md:h-72 w-64 md:w-96 p-4 md:p-8 bg-neutral-900/30 border border-white/5 rounded-2xl hover:bg-neutral-800/50 transition-colors duration-500 overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(52,211,153,0.2)] hover:border-emerald-500/30">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(52,211,153,0.3)" }}
                    className="bg-white p-4 md:p-6 rounded-xl h-full aspect-square flex items-center justify-center shadow-lg border border-white/10 transition-shadow duration-300">
                    <img src="/logos/iris.png" alt="IRIS" className="max-h-full max-w-full object-contain" />
                  </motion.div>
                </motion.a>
              </div>
            </SponsorCard>
          </AnimateOnScroll>

          {/* ─── Partners Tier ─── */}
          <AnimateOnScroll delay={0.3}>
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <span className="text-xs md:text-sm font-mono text-white/50 uppercase tracking-widest bg-white/5 px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/10">
                [ PARTNERS ]
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
              {/* Iridescence */}
              <SponsorCard index={0}>
                <motion.a href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="group relative flex items-center justify-center h-36 md:h-56 p-3 md:p-6 bg-white/[0.02] border border-white/[0.04] rounded-xl md:rounded-2xl hover:bg-white/[0.06] transition-colors duration-500 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full bg-white p-2 md:p-3 rounded-lg md:rounded-xl flex items-center justify-center">
                    <img src="/logos/irides.png" alt="Iridescence" className="max-h-[90%] max-w-[95%] object-contain" />
                  </motion.div>
                </motion.a>
              </SponsorCard>

              {/* Velocity */}
              <SponsorCard index={1}>
                <motion.a href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="group relative flex items-center justify-center h-36 md:h-56 p-3 md:p-6 bg-white/[0.02] border border-white/[0.04] rounded-xl md:rounded-2xl hover:bg-white/[0.06] transition-colors duration-500 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full bg-white p-2 md:p-3 rounded-lg md:rounded-xl flex items-center justify-center">
                    <img src="/logos/velocity.png" alt="Velocity" className="max-h-[90%] max-w-[95%] object-contain" />
                  </motion.div>
                </motion.a>
              </SponsorCard>

              {/* IIITians Network */}
              <SponsorCard index={2}>
                <motion.a href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="group relative flex items-center justify-center h-36 md:h-56 p-3 md:p-6 bg-white/[0.02] border border-white/[0.04] rounded-xl md:rounded-2xl hover:bg-white/[0.06] transition-colors duration-500 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full bg-white p-2 md:p-3 rounded-lg md:rounded-xl flex items-center justify-center">
                    <img src="/logos/iiitnet.png" alt="IIITians Network" className="max-h-[90%] max-w-[95%] object-contain" />
                  </motion.div>
                </motion.a>
              </SponsorCard>

              {/* Mosaic */}
              <SponsorCard index={3}>
                <motion.a href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="group relative flex items-center justify-center h-36 md:h-56 p-3 md:p-6 bg-white/[0.02] border border-white/[0.04] rounded-xl md:rounded-2xl hover:bg-white/[0.06] transition-colors duration-500 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full bg-white p-2 md:p-3 rounded-lg md:rounded-xl flex items-center justify-center">
                    <img src="/logos/mosiac.png" alt="Mosaic" className="max-h-[90%] max-w-[95%] object-contain" />
                  </motion.div>
                </motion.a>
              </SponsorCard>

              {/* KDEM */}
              <SponsorCard index={4}>
                <motion.a href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="group relative flex items-center justify-center h-36 md:h-56 p-3 md:p-6 bg-white/[0.02] border border-white/[0.04] rounded-xl md:rounded-2xl hover:bg-white/[0.06] transition-colors duration-500 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full bg-white p-2 md:p-3 rounded-lg md:rounded-xl flex items-center justify-center">
                    <img src="/logos/kde.png" alt="KDEM" className="max-h-[90%] max-w-[95%] object-contain" />
                  </motion.div>
                </motion.a>
              </SponsorCard>

              {/* DevFolio */}
              <SponsorCard index={5}>
                <motion.a href="#"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="group relative flex items-center justify-center h-36 md:h-56 p-3 md:p-6 bg-white/[0.02] border border-white/[0.04] rounded-xl md:rounded-2xl hover:bg-white/[0.06] transition-colors duration-500 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full bg-white p-2 md:p-3 rounded-lg md:rounded-xl flex items-center justify-center">
                    <img src="/logos/devfolio.png" alt="DevFolio" className="max-h-[90%] max-w-[95%] object-contain" />
                  </motion.div>
                </motion.a>
              </SponsorCard>
            </div>
          </AnimateOnScroll>

        </div>

        {/* Sponsor CTA */}
        <AnimateOnScroll delay={0.4} className="mt-16 md:mt-24 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-white/40 font-mono text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] mb-3 md:mb-4 uppercase">
              Want to fuel the mission?
            </p>
            <a href="#"
              className="group relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-transparent border border-white/20 rounded-full text-xs md:text-sm font-medium text-white hover:border-transparent transition-all duration-300 overflow-hidden shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Download Sponsor Deck</span>
              <Icon icon="solar:document-download-linear"
                className="relative z-10 group-hover:translate-y-0.5 group-hover:text-black transition-all duration-300"
                width="20" />
              {/* Button Hover Fill */}
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </a>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
