"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
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
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="z-[10] flex w-full flex-col items-start justify-center text-left pt-20"
    >
      <div className="flex flex-col items-start font-anton uppercase leading-[0.9] tracking-wide mb-8 ml-4 sm:ml-8 md:ml-12 lg:ml-20">
        <motion.div variants={itemVariants} className="text-[clamp(4.5rem,11vw,8.5rem)] text-white">
          <span>HACK</span>
          <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)] md:[-webkit-text-stroke:3px_rgba(255,255,255,0.8)]">2</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-row items-center gap-4 text-[clamp(4.5rem,11vw,8.5rem)] text-white ml-0 sm:ml-4 lg:ml-8 mt-[-10px]">

          <span>FUTURE</span>
          <span className="">2.0</span>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="flex flex-col items-start gap-6 ml-[2%] sm:ml-8 md:ml-12 lg:ml-20">
        <div className="w-full max-w-[320px] rounded-md py-2 text-left text-white">
          <div className="text-lg font-normal mb-2 text-gray-300">Final Round In:</div>
          <div className="flex justify-start space-x-6">
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl">
                {timeLeft.days.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase tracking-widest text-[#a8b8d0]">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase tracking-widest text-[#a8b8d0]">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase tracking-widest text-[#a8b8d0]">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-anton text-2xl md:text-3xl">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
              <span className="text-sm uppercase tracking-widest text-[#a8b8d0]">Seconds</span>
            </div>
          </div>
        </div>
        <a
          href={"https://hack-2-future-iiit-dharwad.devfolio.co"}
          target="_blank"
          className="bg-[#3770ff] hover:bg-[#2b58c9] transition-colors h-[48px] w-fit flex items-center justify-center text-[18px] font-medium gap-3 rounded-[4px] text-white px-8 outline-none mt-2"
        >
          <Image
            height={20}
            width={20}
            src={"/logos/d.png"}
            alt={"devfolio"}
          />
          Go to Devfolio
        </a>
      </motion.div>
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
      className="font-roboto relative z-0 flex h-[100dvh] w-full items-center justify-between overflow-hidden"
      data-idx="0"
    >
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-x-0 inset-y-[-10%] z-0 h-[120%] w-full bg-[url('/bg.png')] bg-cover bg-center"
      />

      <div className="absolute top-0 z-[1] h-full w-full bg-black/40"></div>

      <motion.div style={{ y: backgroundY }} className="z-[2] mt-4 max-sm:w-full md:ml-4 lg:ml-8 xl:ml-12 w-full md:w-1/2">
        <EventDetails timeLeft={timeLeft} />
      </motion.div>

      {/* Right Bottom Hero Graphic */}
      <motion.div
        style={{ y: backgroundY }}
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          opacity: { duration: 1, ease: "easeOut" },
          scale: { duration: 1, ease: "easeOut" },
          x: { duration: 1, ease: "easeOut" },
        }}
        className="absolute bottom-0 right-[5%] z-[20] w-[600px] md:w-[800px] lg:w-[1000px] pointer-events-none hidden md:block"
      >
        <Image
          src="/hero1.png"
          alt="Hero Graphic"
          width={1000}
          height={1000}
          className="object-contain w-full h-auto drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
        />
      </motion.div>
    </section>
  );
}
