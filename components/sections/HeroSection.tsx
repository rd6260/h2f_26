"use client";

import Image from "next/image";
import Script from "next/script";
import React, { useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    Devfolio: any;
  }
}
import { motion, useScroll, useTransform } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function EventDetails({ timeLeft }: { timeLeft: TimeLeft }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: typeof window !== 'undefined' && window.innerWidth < 768 ? 3.3 : 7.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="z-[10] flex w-full flex-col items-start justify-center text-left pt-20"
    >
      <div className="flex flex-col items-start font-anton uppercase leading-[0.75] tracking-tighter mb-8 ml-4 sm:ml-8 md:ml-12 lg:ml-20">

        <motion.div variants={itemVariants} className="flex flex-row items-baseline gap-2 text-[clamp(4.5rem,11vw,8.5rem)] text-white font-bold ml-2">
          <span>HACK</span>

        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-row items-start gap-1 text-[clamp(4.5rem,11vw,8.5rem)] text-white ml-0 sm:ml-4 lg:ml-8 mt-[-10px] sm:mt-[-15px] font-bold">
          <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)] md:[-webkit-text-stroke:3px_rgba(255,255,255,0.8)] leading-[0.9]">2</span>
          <div className="flex flex-col items-end leading-none">
            <span>FUTURE</span>
            <span className="text-[clamp(2.5rem,5vw,3.5rem)] text-amber-500 italic font-montserrat tracking-tighter font-black mt-[-10px] sm:mt-[-15px] lg:mt-[-25px] translate-x-4 md:translate-x-8 lg:translate-x-12 z-10 block">2.0</span>
          </div>
        </motion.div>
      </div>

      {/* Buttons Section */}
      <motion.div variants={itemVariants} className="flex flex-col items-start gap-6 ml-[2%] sm:ml-8 md:ml-12 lg:ml-20 mt-[-10px]">
        {/* Timer */}
        <div className="w-full max-w-[320px] rounded-md py-2 text-left text-white">
          <div className="text-lg font-bold mb-2 text-gray-300">Final Round In:</div>
          <div className="flex justify-start space-x-6">
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl font-bold">
                {timeLeft.days.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase font-bold text-[#a8b8d0]">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl font-bold">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase font-bold text-[#a8b8d0]">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl font-bold">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase font-bold text-[#a8b8d0]">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl font-bold">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase font-bold text-[#a8b8d0]">Seconds</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Devfolio Apply Button Outside Motion Wrapper */}
      <div className="ml-[2%] sm:ml-8 md:ml-12 lg:ml-20 mt-4">
        <div
          id="devfolio-apply-btn"
          className="apply-button"
          data-hackathon-slug="hack2future"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  useEffect(() => {
    function calculateTimeLeft(): TimeLeft {
      const eventDate = new Date("2026-04-04T09:00:00");
      const currentTime = new Date();
      const difference = eventDate.getTime() - currentTime.getTime();

      let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="landing"
      className="font-roboto relative z-0 flex h-[100dvh] w-full items-center justify-between overflow-hidden bg-black"
      data-idx="0"
    >
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-x-0 inset-y-0 z-0 h-full w-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
      />

      <div className="absolute top-0 z-[1] h-full w-full bg-black/40"></div>

      <motion.div style={{ y: backgroundY }} className="z-[2] mt-4 max-sm:w-full md:ml-4 lg:ml-8 xl:ml-12 w-full md:w-1/2">
        <EventDetails timeLeft={timeLeft} />
      </motion.div>

      {/* Right Bottom Hero Graphic */}
      <motion.div
        style={{ y: backgroundY }}
        initial={{ opacity: 0, scale: 1.2, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut", delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 7 },
          scale: { duration: 1.5, ease: "easeOut", delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 7 },
          x: { duration: 1.5, ease: "easeOut", delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 7 },
        }}
        className="absolute bottom-[-2%] right-[5%] z-[20] h-[95vh] max-w-[85%] flex justify-end items-end pointer-events-none hidden md:flex"
      >
        <Image
          src="/hero1.png"
          alt="Hero Graphic"
          width={1000}
          height={1000}
          className="object-contain object-right-bottom w-auto h-full drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
          priority
        />
      </motion.div>

    </section>
  );
}
