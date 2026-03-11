"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";

const ease = [0.25, 0.8, 0.25, 1] as [number, number, number, number];

const TIMELINE_EVENTS = [
  {
    date: "Mar 5",
    label: "INAUGURATION",
    title: "Official Launch",
    description:
      "Inauguration ceremony and official release of the problem statements. The mission begins now.",
    icon: "solar:rocket-2-bold",
    side: "right" as const,
    highlight: true,
  },
  {
    date: "Mar 7",
    label: "REGISTRATION OPEN",
    title: "Registration Live",
    description:
      "Registrations are now live on Devfolio. Sign up to participate in the challenge.",
    icon: "solar:pen-new-square-bold",
    side: "left" as const,
    highlight: true,
  },
  {
    date: "Mar 12",
    label: "REGISTRATION CLOSES",
    title: "Hatch Sealed",
    description:
      "First registration closes on March 12th, extended till March 18th. Secure your spot before the portal shuts for good.",
    icon: "solar:lock-keyhole-bold",
    side: "right" as const,
  },
  {
    date: "Mar 21",
    label: "ANNOUNCEMENT OF FINALISTS",
    title: "Crew Selected",
    description:
      "Teams shortlisted based on their solution approach by the technical team and experienced faculties. Top 75 teams out of 500+ will be selected.",
    icon: "solar:star-bold",
    side: "left" as const,
  },
  {
    date: "Mar 25",
    label: "CONFIRMATION OF PARTICIPATION",
    title: "Lock In",
    description:
      "Get confirmation from the teams on their attendance. Teams must submit their train/flight tickets and inform about campus availability.",
    icon: "solar:check-circle-bold",
    side: "right" as const,
  },
  {
    date: "Apr 1",
    label: "FINAL PAYMENT DEADLINE",
    title: "Fuel Up",
    description:
      "Final payment must be done without any extensions beyond this date. This covers accommodation and food for the event.",
    icon: "solar:wallet-bold",
    side: "left" as const,
  },
  {
    date: "Apr 4",
    label: "HACKATHON DAYS",
    title: "Main Engine Burn",
    description:
      "36-hour Hackathon D-day. Build, break, and rebuild — this is where legends are forged.",
    icon: "solar:code-bold",
    side: "right" as const,
    highlight: true,
  },
  {
    date: "Apr 5",
    label: "PRIZE DISTRIBUTION",
    title: "Touchdown",
    description:
      "The winners are crowned. Prizes distributed, glory earned — the mission reaches its climax.",
    icon: "solar:cup-star-bold",
    side: "left" as const,
    highlight: true,
  },
];

function TimelineNode({
  index,
  isInView,
  highlight,
}: {
  index: number;
  isInView: boolean;
  highlight?: boolean;
}) {
  return (
    <motion.div
      className="relative z-20 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.1,
      }}
    >
      {/* Outer pulse ring */}
      <motion.div
        className={`absolute w-14 h-14 rounded-full border ${highlight ? "border-amber-400/40" : "border-white/10"
          }`}
        animate={
          isInView
            ? {
              scale: [1, 1.6, 1],
              opacity: [0.4, 0, 0.4],
            }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.3,
          ease: "easeInOut",
        }}
      />

      {/* Secondary pulse */}
      {highlight && (
        <motion.div
          className="absolute w-20 h-20 rounded-full border border-amber-500/20"
          animate={
            isInView
              ? {
                scale: [1, 2, 1],
                opacity: [0.2, 0, 0.2],
              }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.3 + 0.5,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Core node */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${highlight
          ? "bg-amber-500/20 border border-amber-400/50 shadow-[0_0_25px_rgba(245,158,11,0.4)]"
          : "bg-neutral-900 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          }`}
      >
        <span
          className={`font-mono text-[10px] font-bold ${highlight ? "text-amber-400" : "text-white/70"
            }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

function TimelineCard({
  event,
  index,
}: {
  event: (typeof TIMELINE_EVENTS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const isRight = event.side === "right";
  const isHighlight = "highlight" in event && event.highlight;

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full ${index !== TIMELINE_EVENTS.length - 1 ? "mb-8 md:mb-0" : ""
        }`}
    >
      {/* Desktop alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] w-full items-center">
        {/* Left column */}
        <div>
          {isRight ? (
            /* Date badge on the left */
            <motion.div
              className="flex justify-end pr-8"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div className="text-right">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest mb-2 ${isHighlight
                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    : "bg-white/5 text-white/50 border border-white/10"
                    }`}
                >
                  {event.label}
                </span>
                <p
                  className={`text-2xl font-bricolage font-semibold ${isHighlight ? "text-amber-400" : "text-white/80"
                    }`}
                >
                  {event.date}
                </p>
              </div>
            </motion.div>
          ) : (
            /* Card on the left */
            <motion.div
              className="flex justify-end pr-8"
              initial={{ opacity: 0, x: -60 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : {}
              }
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              <TimelineCardContent
                event={event}
                isHighlight={isHighlight}
                align="right"
              />
            </motion.div>
          )}
        </div>

        {/* Center node */}
        <div className="flex justify-center">
          <TimelineNode
            index={index}
            isInView={isInView}
            highlight={isHighlight}
          />
        </div>

        {/* Right column */}
        <div>
          {isRight ? (
            /* Card on the right */
            <motion.div
              className="pl-8"
              initial={{ opacity: 0, x: 60 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : {}
              }
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              <TimelineCardContent
                event={event}
                isHighlight={isHighlight}
                align="left"
              />
            </motion.div>
          ) : (
            /* Date badge on the right */
            <motion.div
              className="pl-8"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest mb-2 ${isHighlight
                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    : "bg-white/5 text-white/50 border border-white/10"
                    }`}
                >
                  {event.label}
                </span>
                <p
                  className={`text-2xl font-bricolage font-semibold ${isHighlight ? "text-amber-400" : "text-white/80"
                    }`}
                >
                  {event.date}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile layout — left-aligned line */}
      <div className="flex md:hidden items-start gap-4 w-full">
        <div className="flex flex-col items-center shrink-0 pt-1">
          <TimelineNode
            index={index}
            isInView={isInView}
            highlight={isHighlight}
          />
        </div>
        <motion.div
          className="flex-1 pb-2"
          initial={{ opacity: 0, x: 30 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : {}
          }
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-widest mb-1.5 ${isHighlight
              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
              : "bg-white/5 text-white/40 border border-white/10"
              }`}
          >
            {event.label}
          </span>
          <p
            className={`text-lg font-bricolage font-semibold mb-1 ${isHighlight ? "text-amber-400" : "text-white/80"
              }`}
          >
            {event.date}
          </p>
          <TimelineCardContent
            event={event}
            isHighlight={isHighlight}
            align="left"
            compact
          />
        </motion.div>
      </div>
    </div>
  );
}

function TimelineCardContent({
  event,
  isHighlight,
  align,
  compact = false,
}: {
  event: (typeof TIMELINE_EVENTS)[0];
  isHighlight: boolean | undefined;
  align: "left" | "right";
  compact?: boolean;
}) {
  return (
    <div
      className={`group relative ${compact ? "" : "max-w-md"} ${compact
        ? "p-4 rounded-xl"
        : "p-6 rounded-2xl"
        } bg-neutral-900/40 backdrop-blur-xl border overflow-hidden transition-all duration-500 hover:bg-neutral-900/60 ${isHighlight
          ? "border-amber-500/20 hover:border-amber-400/40"
          : "border-white/10 hover:border-white/20"
        } ${align === "right" ? "ml-auto" : ""}`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${isHighlight
          ? "from-transparent via-amber-400/50 to-transparent"
          : "from-transparent via-white/20 to-transparent"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Shimmer */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none animate-shimmer-effect" />

      {/* Corner glow on hover */}
      {isHighlight && (
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      )}

      <div className="relative z-10">
        {/* Icon + Title row */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center ${isHighlight
              ? "bg-amber-500/15 border border-amber-500/25"
              : "bg-white/5 border border-white/10"
              } group-hover:scale-110 transition-transform duration-300`}
          >
            {/* @ts-expect-error iconify-icon is a web component */}
            <iconify-icon
              icon={event.icon}
              className={
                isHighlight ? "text-amber-400" : "text-white/60"
              }
              width="16"
            />
          </div>
          <h3
            className={`${compact ? "text-base" : "text-xl"
              } font-bricolage font-semibold ${isHighlight
                ? "text-white"
                : "text-white/90"
              }`}
          >
            {event.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className={`${compact ? "text-xs" : "text-sm"
            } text-white/40 leading-relaxed group-hover:text-white/55 transition-colors duration-500`}
        >
          {event.description}
        </p>
      </div>
    </div>
  );
}

/* ── Vertical connecting line between nodes ── */
function TimelineLine() {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Track scroll direction for rocket rotation
  const rotation = useSpring(90, {
    stiffness: 200,
    damping: 20
  });

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previous = scrollYProgress.getPrevious() ?? 0;
    if (current > previous) rotation.set(90);
    else if (current < previous) rotation.set(270);
  });

  return (
    <div
      ref={lineRef}
      className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] hidden md:block z-[40]"
    >
      {/* Static faint line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/8 to-transparent" />

      {/* Animated glowing line */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-amber-500/60 via-amber-400/30 to-transparent origin-top"
        style={{ scaleY, height: "100%" }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-amber-500/30 via-amber-400/10 to-transparent origin-top blur-[2px]"
        style={{ scaleY, height: "100%" }}
      />

      {/* Animated Rocket */}
      <motion.div
        className="absolute left-1/2 z-[50] -translate-x-1/2 -translate-y-1/2 pointer-events-none transform-gpu will-change-transform"
        style={{ top: rocketY, rotate: rotation, originX: 0.5, originY: 0.5 }}
      >
        <div className="relative w-48 h-48 mt-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/rd6260/h2f_26@main/public/rocket.png"
            alt="Rocket"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ── Mobile connecting line ── */
function MobileTimelineLine() {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Track scroll direction for rocket rotation
  const rotation = useSpring(90, {
    stiffness: 200,
    damping: 20
  });

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previous = scrollYProgress.getPrevious() ?? 0;
    if (current > previous) rotation.set(90);
    else if (current < previous) rotation.set(270);
  });

  return (
    <div
      ref={lineRef}
      className="absolute left-[19px] top-0 bottom-0 w-[1px] md:hidden z-[40]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/8 to-transparent" />
      <motion.div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-amber-500/50 via-amber-400/20 to-transparent origin-top"
        style={{ scaleY, height: "100%" }}
      />

      {/* Animated Rocket Mobile */}
      <motion.div
        className="absolute left-1/2 z-[50] -translate-x-1/2 -translate-y-1/2 pointer-events-none transform-gpu will-change-transform"
        style={{ top: rocketY, rotate: rotation, originX: 0.5, originY: 0.5 }}
      >
        <div className="relative w-24 h-24 pointer-events-none mt-2">
          <Image
            src="https://cdn.jsdelivr.net/gh/rd6260/h2f_26@main/public/rocket.png"
            alt="Rocket"
            fill
            className="object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function TimelineSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  return (
    <section
      id="timeline"
      className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden border-t border-white/5"
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-amber-500/[0.04] rounded-full blur-[150px] pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-amber-400/[0.03] rounded-full blur-[120px] pointer-events-none hidden md:block" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={
            headerInView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
          </div>
          <h2 className="text-5xl md:text-7xl font-bricolage text-white font-semibold tracking-tight">
            Timeline
          </h2>
          <p className="text-white/30 mt-4 text-sm md:text-base font-light max-w-lg mx-auto">
            Every great mission has a sequence.{" "}
            <span className="text-white/50">
              Here&apos;s yours — from launch to landing.
            </span>
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop vertical line */}
          <TimelineLine />

          {/* Mobile vertical line */}
          <MobileTimelineLine />

          {/* Events */}
          <div className="relative z-10 flex flex-col gap-6 md:gap-16">
            {TIMELINE_EVENTS.map((event, i) => (
              <TimelineCard key={event.date} event={event} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
        >

        </motion.div>
      </div>
    </section>
  );
}
