"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ParticleBackground from "@/components/ui/ParticleBackground";




const SOCIALS = [
  {
    label: "Instagram",
    icon: "mdi:instagram",
    href: "https://www.instagram.com/h2f.iiitdwd/?hl=en",
    color: "hover:text-pink-400",
  },
  {
    label: "LinkedIn",
    icon: "mdi:linkedin",
    href: "https://www.linkedin.com/company/hack-2-future/",
    color: "hover:text-blue-400",
  },
  {
    label: "Discord",
    icon: "mdi:discord",
    href: "https://discord.gg/pDs7HhJK",
    color: "hover:text-blue-400",
  },
  {
    label: "X",
    icon: "mdi:twitter",
    href: "https://x.com/hack2future_",
    color: "hover:text-blue-400",
  },
];

export default function FooterSection() {
  return (
    <footer
      className="bg-neutral-950 border-t border-white/5 pt-20 pb-8 px-6 relative overflow-hidden"
      id="footer"
    >
      <ParticleBackground />
      {/* Ambient bg */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hidden lg:block absolute -left-16 bottom-0 top-auto pointer-events-none opacity-100 z-[1]"
        animate={{
          y: [-15, 15, -15],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/astronote1.png"
          alt="Astronote Graphic"
          width={400}
          height={400}
          className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] max-w-none"
          priority
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <AnimateOnScroll className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logos/logo.png"
                alt="IIIT Dharwad"
                width={44}
                height={44}
                className="rounded-xl"
              />
              <h3 className="text-2xl font-bricolage font-semibold text-white tracking-tight">
                Hack2Future{" "}
                <span className="text-white/30">2.0</span>
              </h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              A 36-hour national-level innovation sprint bridging
              academia and industry — where student
              minds build rapid solutions to real-world
              challenges.
            </p>
            <div className="flex gap-3 mt-6">
              {SOCIALS.map(({ label, icon, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 ${color} transition-colors`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon
                    icon={icon}
                    width="20"
                  />
                </motion.a>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Contact - Expanded for better layout */}
          <AnimateOnScroll delay={0.1} className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-8 font-mono flex items-center gap-2">
              <span className="w-5 h-[1px] bg-emerald-500 block" />
              Contact
            </h4>

            <div className="mb-8">
              <motion.a
                href="mailto:hack2future@iiitdwd.ac.in"
                className="text-neutral-500 hover:text-white text-base transition-colors flex items-center gap-3 group"
                whileHover={{ x: 4 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon
                  icon="solar:letter-linear"
                  width="22"
                  className="text-emerald-400 shrink-0"
                />
                <span className="font-light tracking-wide">hackathon@iiitdwd.ac.in</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {/* Prajin */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-semibold text-[15px]">Prajin AD</span>
                  <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.1em]">Head Organizer</span>
                </div>
                <motion.a
                  href="tel:+919789880949"
                  className="text-neutral-500 hover:text-white text-sm transition-colors flex items-center gap-2.5 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="solar:phone-linear" width="16" className="text-emerald-400 shrink-0" />
                  <span>+91 97898 80949</span>
                </motion.a>
                <motion.a
                  href="mailto:23bec036@iiitdwd.ac.in"
                  className="text-neutral-500 hover:text-white text-[12px] transition-colors flex items-center gap-2.5 group mt-1"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="solar:letter-linear" width="14" className="text-emerald-400 shrink-0" />
                  <span className="font-mono opacity-80">23bec036@iiitdwd.ac.in</span>
                </motion.a>
              </div>

              {/* Prem */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-semibold text-[15px]">Prem TK</span>
                  <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.1em]">Program Director</span>
                </div>
                <motion.a
                  href="tel:+918489889568"
                  className="text-neutral-500 hover:text-white text-sm transition-colors flex items-center gap-2.5 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="solar:phone-linear" width="16" className="text-emerald-400 shrink-0" />
                  <span>+91 84898 89568</span>
                </motion.a>
                <motion.a
                  href="mailto:23bds065@iiitdwd.ac.in"
                  className="text-neutral-500 hover:text-white text-[12px] transition-colors flex items-center gap-2.5 group mt-1"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="solar:letter-linear" width="14" className="text-emerald-400 shrink-0" />
                  <span className="font-mono opacity-80">23bds065@iiitdwd.ac.in</span>
                </motion.a>
              </div>

              {/* Sai Sathwik */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-semibold text-[15px]">Sai Sathwik</span>
                  <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.1em]">Head Operations</span>
                </div>
                <motion.a
                  href="tel:+918074916768"
                  className="text-neutral-500 hover:text-white text-sm transition-colors flex items-center gap-2.5 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="solar:phone-linear" width="16" className="text-emerald-400 shrink-0" />
                  <span>+91 80749 16768</span>
                </motion.a>
                <motion.a
                  href="mailto:23bcs036@iiitdwd.ac.in"
                  className="text-neutral-500 hover:text-white text-[12px] transition-colors flex items-center gap-2.5 group mt-1"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="solar:letter-linear" width="14" className="text-emerald-400 shrink-0" />
                  <span className="font-mono opacity-80">23bcs036@iiitdwd.ac.in</span>
                </motion.a>
              </div>

              {/* Swati R */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-semibold text-[15px]">Swati R</span>
                  <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-[0.1em]">Chief of Staff</span>
                </div>
                <motion.a
                  href="tel:+919398481346"
                  className="text-neutral-500 hover:text-white text-sm transition-colors flex items-center gap-2.5 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="solar:phone-linear" width="16" className="text-emerald-400 shrink-0" />
                  <span>+91 93984 81346</span>
                </motion.a>
                <motion.a
                  href="mailto:24bcs118@iiitdwd.ac.in"
                  className="text-neutral-500 hover:text-white text-[12px] transition-colors flex items-center gap-2.5 group mt-1"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* @ts-expect-error iconify-icon is a web component */}
                  <iconify-icon icon="solar:letter-linear" width="14" className="text-emerald-400 shrink-0" />
                  <span className="font-mono opacity-80">24bcs118@iiitdwd.ac.in</span>
                </motion.a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Location */}
          <AnimateOnScroll delay={0.3} className="lg:col-span-1">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 font-mono flex items-center gap-2">
              <span className="w-5 h-[1px] bg-emerald-500 block" />
              Venue
            </h4>
            <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden border border-white/10 group-hover/venue:border-emerald-500/30 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-10">
              {/* Inner glow/border effect */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-20" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.516087524584!2d75.0210287751221!3d15.397268585189311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc4560c06c5e05!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1714574921935!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="z-10 absolute inset-0"
                title="IIIT Dharwad Map"
              />
            </div>

            {/* Text Below Map */}
            <div className="mt-4 text-xs">
              <p className="text-white font-medium mb-1 flex items-center gap-2">
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon="solar:map-point-linear" className="text-emerald-400" />
                IIIT Dharwad Campus
              </p>
              <p className="text-neutral-500">
                Ittigatti Road, Near Sattur Colony,<br />
                Dharwad 580009, Karnataka
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-600 text-xs">
          <AnimateOnScroll>
            <p>
              © {new Date().getFullYear()} Hack2Future 2.0 — IIIT
              Dharwad. All rights reserved.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-neutral-800">|</span>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </footer>
  );
}

