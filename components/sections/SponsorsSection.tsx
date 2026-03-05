"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const sizeVariants = {
  full: "size-[calc(100%-40px)]",
  "size-32": "size-32",
};

interface SponsorCardProps {
  id: string;
  name: string;
  website: string;
  logo: string;
  alt?: string;
  bgColor1?: string;
  bgColor2?: string;
  fillOpacity?: string;
  logoSize?: keyof typeof sizeVariants;
  height?: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  id,
  name,
  website,
  logo,
  alt,
  bgColor1 = "#ffffff",
  bgColor2 = "#ffffff",
  fillOpacity = "0.11",
  logoSize = "full",
  height = "h-36 md:h-52",
}) => {
  return (
    <Link href={website} className="group relative w-full aspect-square ease-out [&_*]:transition-all [&_*]:duration-500 flex items-center justify-center">
      {/* Background Glow on Hover */}
      <div className="absolute inset-4 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[60px] rounded-full pointer-events-none" />

      <div className="relative z-20 flex size-full items-center justify-center p-4">
        <div className={`relative flex select-none items-center justify-center ${sizeVariants[logoSize]} ${height} w-full`}>
          <Image
            height={180}
            width={180}
            src={logo}
            alt={alt || `${name} logo`}
            className="absolute z-30 h-full w-full object-contain opacity-100 group-hover:translate-x-[-8%] group-hover:translate-y-[-10%] group-hover:rotate-[10deg] group-hover:-skew-x-2 group-hover:-skew-y-2"
          />
          <Image
            height={180}
            width={180}
            src={logo}
            alt={alt || `${name} logo`}
            className="absolute z-20 h-full w-full object-contain opacity-80 group-hover:translate-x-[-6%] group-hover:translate-y-[-6%] group-hover:rotate-[10deg] group-hover:-skew-x-2 group-hover:-skew-y-2 group-hover:hue-rotate-30"
          />
          <Image
            height={180}
            width={180}
            src={logo}
            alt={alt || `${name} logo`}
            className="absolute z-10 h-full w-full object-contain opacity-60 group-hover:translate-x-[-4%] group-hover:translate-y-[-3%] group-hover:rotate-[10deg] group-hover:-skew-x-2 group-hover:-skew-y-2 group-hover:hue-rotate-30"
          />
          <Image
            height={180}
            width={180}
            src={logo}
            alt={alt || `${name} logo`}
            className="absolute h-full w-full object-contain opacity-40 group-hover:rotate-[10deg] group-hover:-skew-x-2 group-hover:-skew-y-2 group-hover:hue-rotate-30"
          />
        </div>
      </div>
    </Link>
  );
};

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="bg-neutral-950 border-white/5 border-t pt-24 md:pt-32 px-4 md:px-6 pb-24 md:pb-32 relative overflow-hidden"
      id="sponsors"
    >
      {/* Ambient Background Effect */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-amber-500/[0.05] rounded-full blur-[180px] pointer-events-none mix-blend-screen"
      />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-30" />

      <div className="z-10 w-full max-w-7xl mx-auto relative px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <AnimateOnScroll className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.3em]">
              <span className="w-10 h-[1px] bg-amber-500" />
              <span className="text-amber-500">Sponsorship Ecosystem</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bricolage font-semibold tracking-tighter text-white leading-[0.9]">
              Sponsors &
              <br />
              <span className="text-white/20">Partners.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="text-neutral-500 text-sm md:text-base max-w-sm font-light leading-relaxed mb-4">
            Forging alliances with industry giants and visionary communities to build a faster, better, and more intelligent future.
          </AnimateOnScroll>
        </div>

        {/* Tiers Container */}
        <div className="space-y-40 md:space-y-60">

          {/* ─── GOLD Tier ─── */}
          <AnimateOnScroll delay={0.1}>
            <div className="flex items-center gap-4 mb-20 md:mb-32">
              <span className="text-xs md:text-sm font-mono text-amber-400 uppercase tracking-[0.2em] bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
                [ GOLD SPONSORED ]
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 via-amber-500/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <SponsorCard
                id="devfolio"
                name="DevFolio"
                website="#"
                logo="/logos/devfolio.png"
                logoSize="full"
                height="h-36 md:h-52"
              />
              <SponsorCard
                id="cysec"
                name="Cyseck"
                website="#"
                logo="/logos/cysec.png"
                logoSize="full"
                height="h-36 md:h-52"
              />
              <SponsorCard
                id="infosys"
                name="Infosys"
                website="#"
                logo="/logos/infosys.png"
                logoSize="full"
                height="h-36 md:h-52"
              />
              <SponsorCard
                id="idrp"
                name="IDRP"
                website="#"
                logo="/logos/idrp.png"
                logoSize="full"
                height="h-36 md:h-52"
              />
            </div>
          </AnimateOnScroll>

          {/* ─── Strategic Partners Tier ─── */}
          <AnimateOnScroll delay={0.2}>
            <div className="flex items-center gap-4 mb-20 md:mb-32">
              <span className="text-xs md:text-sm font-mono text-white/40 uppercase tracking-[0.2em] bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                [ STRATEGIC PARTNERS ]
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex justify-center">
                <SponsorCard
                  id="kdem"
                  name="KDEM"
                  website="#"
                  logo="/logos/kde.png"
                  logoSize="full"
                  height="h-24 md:h-36"
                />
              </div>
              <div className="w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex justify-center">
                <SponsorCard
                  id="iiitnet"
                  name="IIITians Network"
                  website="#"
                  logo="/logos/iiitnet.png"
                  logoSize="full"
                  height="h-24 md:h-36"
                />
              </div>
              <div className="w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex justify-center">
                <SponsorCard
                  id="thinkindia"
                  name="Think India"
                  website="#"
                  logo="/logos/thinkindia.png"
                  logoSize="full"
                  height="h-24 md:h-36"
                />
              </div>
              <div className="w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex justify-center">
                <SponsorCard
                  id="iris"
                  name="IRIS"
                  website="#"
                  logo="/logos/iris.png"
                  logoSize="full"
                  height="h-24 md:h-36"
                />
              </div>
              <div className="w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex justify-center">
                <SponsorCard
                  id="mosaic"
                  name="Mosaic"
                  website="#"
                  logo="/logos/mosiac.png"
                  logoSize="full"
                  height="h-24 md:h-36"
                />
              </div>
              <div className="w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex justify-center">
                <SponsorCard
                  id="iridescence"
                  name="Iridescence"
                  website="#"
                  logo="/logos/irides.png"
                  logoSize="full"
                  height="h-24 md:h-36"
                />
              </div>
              <div className="w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex justify-center">
                <SponsorCard
                  id="velocity"
                  name="Velocity"
                  website="#"
                  logo="/logos/velocity.png"
                  logoSize="full"
                  height="h-24 md:h-36"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
