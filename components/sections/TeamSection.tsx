"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { Icon } from '@iconify/react';

interface TeamMember {
  name: string;
  team: string;
  position: string;
  github: string;
  linkedin: string;
  instagram: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Harshith Daraboina",
    team: "Website Team",
    position: "Lead",
    github: "https://github.com/harshith-daraboina",
    linkedin: "https://www.linkedin.com/in/harshith-daraboina",
    instagram: "https://www.instagram.com/harsh_ith_011/",
    photo: "/team/Leads/harshith_daraboina.png"
  },
  {
    name: "Ujwal Akotkar",
    team: "Website Team",
    position: "Team Member",
    github: "https://github.com/uju09",
    linkedin: "https://www.linkedin.com/in/uju09",
    instagram: "https://www.instagram.com/_uju_09/",
    photo: "/team/uju.png"
  },
  {
    name: "Syed Mahdee Husain",
    team: "Design",
    position: "Co-Lead",
    github: "https://github.com/mahdee19",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Mahdee%20Husain",
    instagram: "https://instagram.com/mahdeehusain",
    photo: "/team/syed_mahdee_husain.jpg"
  },
  {
    name: "Pulla Suharshitha",
    team: "Sponsorship",
    position: "Team member",
    github: "https://github.com/pullasuharshitha",
    linkedin: "https://www.linkedin.com/in/pulla-suharshitha-a14a88324",
    instagram: "https://instagram.com/Pulla_Suharshitha",
    photo: "/team/pulla_suharshitha.jpg"
  },
  {
    name: "Tejas Chalwadi",
    team: "Marketing",
    position: "Lead",
    github: "",
    linkedin: "https://www.linkedin.com/in/tejas-chalwadi-38bb15321",
    instagram: "https://instagram.com/tejaa.__.chalwadi",
    photo: "/team/Leads/tejas_chalwadi.jpeg"
  },
  {
    name: "Ayush Gochhayat",
    team: "Technical",
    position: "Core member",
    github: "https://github.com/Ayush-DSAI",
    linkedin: "https://www.linkedin.com/in/ayush-gochhayat-46927b381/",
    instagram: "https://www.instagram.com/_ayush.goc_/",
    photo: "/team/ayush_gochhayat.jpg"
  },
  {
    name: "Aarya A Sajjan",
    team: "Technical",
    position: "Member",
    github: "https://github.com/sajjanaaru-ops",
    linkedin: "https://linkedin.com/in/aarya-a-sajjan/",
    instagram: "https://www.instagram.com/aarya__a__sajjan/",
    photo: "/team/Leads/aarya_sajjan.jpeg"
  },
  {
    name: "Satvik M Patil",
    team: "Technical",
    position: "Member",
    github: "https://github.com/Satvikpatil1582",
    linkedin: "https://www.linkedin.com/in/satvik-patil-830a0a372/",
    instagram: "https://www.instagram.com/patilsatvik30/",
    photo: "/team/satvik_patil.jpeg"
  },
  {
    name: "SUYASH BIRHADE",
    team: "Technical",
    position: "Member",
    github: "https://github.com/suyash24-cmd",
    linkedin: "https://www.linkedin.com/in/suyash-birhade-b11b28381",
    instagram: "https://www.instagram.com/birhadesuyash/",
    photo: "/team/suyash_birhade.jpeg"
  },
  {
    name: "Prathyusha Reddy",
    team: "Design",
    position: "Lead",
    github: "",
    linkedin: "https://www.linkedin.com/in/prathyusha-reddy-chintha-b53aa3324",
    instagram: "",
    photo: "/team/prathyusha_reddy.jpg"
  },
  {
    name: "Shreya S Sheri",
    team: "Technical",
    position: "Member",
    github: "",
    linkedin: "https://www.linkedin.com/search/results/all/?keywords=Shreya%20S%20Sheri",
    instagram: "https://instagram.com/shreya.sheri",
    photo: "/team/shreya_s_sheri.jpg"
  },
  {
    name: "Zaid Nasim",
    team: "Sponsorship",
    position: "Team Member",
    github: "",
    linkedin: "",
    instagram: "",
    photo: "/team/zaid_nasim.png"
  },
  {
    name: "Pundru Madhulika",
    team: "Design",
    position: "Team member",
    github: "https://github.com/Madhulikaaaaa",
    linkedin: "https://www.linkedin.com/in/madhulika-p-4682b432a",
    instagram: "https://www.instagram.com/m4ds.here",
    photo: "/team/pundru_madhulika.jpeg"
  },
  {
    name: "Ngamchingseh Willis Kipgen",
    team: "Technical",
    position: "Technical Team Member",
    github: "https://github.com/williskipsjr",
    linkedin: "https://www.linkedin.com/in/ngamchingseh-willis-kipgen/",
    instagram: "https://www.instagram.com/williskipsjr",
    photo: "/team/willis_kipgen.jpeg"
  },
  {
    name: "Harshita Prasad",
    team: "Technical",
    position: "Member",
    github: "",
    linkedin: "",
    instagram: "",
    photo: "/team/harshita_prasad.jpg"
  },
  {
    name: "Lakshmi prasad",
    team: "Design",
    position: "Lead",
    github: "",
    linkedin: "https://www.linkedin.com/in/lakshmi-prasad-doddi-26a30029a/",
    instagram: "https://www.instagram.com/lakshmi_prasad_lxp",
    photo: "/team/Leads/lakshmi_prasad.jpg"
  },
  {
    name: "Muhammad Owais",
    team: "Technical",
    position: "Member",
    github: "https://github.com/mdowais-39",
    linkedin: "https://www.linkedin.com/in/muhammad-owais-a175ab324/",
    instagram: "https://instagram.com/md_owais39",
    photo: "/team/muhammad_owais.jpg"
  },
  {
    name: "Devika Dhantala",
    team: "Design",
    position: "Member",
    github: "https://github.com/Devika-0726",
    linkedin: "https://www.linkedin.com/in/devika-danthala-020912335",
    instagram: "https://www.instagram.com/devika_danthala_2607",
    photo: "/team/devika_dhantala.jpg"
  },
  {
    name: "Sufiyan Alam",
    team: "Technical",
    position: "Member",
    github: "https://github.com/oyamanao",
    linkedin: "https://linkedin.com/in/cadnium",
    instagram: "https://instagram.com/cadnium",
    photo: "/team/sufiyan_alam.jpg"
  }
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group relative w-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center h-full">
        <div className="relative size-32 md:size-40 rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-amber-500/50 transition-colors bg-neutral-900">
          <img
            src={`${member.photo}`}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 text-center leading-tight min-h-[56px] flex items-center justify-center break-words w-full px-2">{member.name}</h3>
        <span className="text-xs md:text-sm text-amber-500 mb-1 text-center font-mono uppercase tracking-wider">{member.team}</span>
        <span className="text-xs text-white/60 mb-6 text-center">{member.position}</span>

        <div className="flex gap-4 mt-auto">
          {member.github && (
            <Link href={member.github} target="_blank" className="text-white/40 hover:text-white transition-colors">
              <Icon icon="mdi:github" className="size-6" />
            </Link>
          )}
          {member.linkedin && (
            <Link href={member.linkedin} target="_blank" className="text-white/40 hover:text-[#0077b5] transition-colors">
              <Icon icon="mdi:linkedin" className="size-6" />
            </Link>
          )}
          {member.instagram && (
            <Link href={member.instagram} target="_blank" className="text-white/40 hover:text-[#E1306C] transition-colors">
              <Icon icon="mdi:instagram" className="size-6" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const TABS = [
  { id: "Design", label: "Design", icon: "solar:pen-new-square-bold" },
  { id: "Marketing", label: "Marketing", icon: "solar:megaphone-bold" },
  { id: "Sponsorship", label: "Sponsorship", icon: "solar:hand-money-bold" },
  { id: "Technical", label: "Technical", icon: "solar:code-square-bold" },
  { id: "Website Team", label: "Website", icon: "solar:laptop-bold" },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState("Design");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Filter members based on selected tab
  const filteredMembers = teamMembers.filter(m => m.team === activeTab);

  // Group members into teams for better visual organization if needed, or by position.
  // A simple sort by team can be great:
  const sortedMembers = [...filteredMembers].sort((a, b) => {
    // Sort logic: Design -> Marketing -> Sponsorship -> Technical -> Website Team
    if (a.team < b.team) return -1;
    if (a.team > b.team) return 1;
    return 0;
  });

  return (
    <section
      ref={sectionRef}
      className="bg-neutral-950 px-4 md:px-6 py-24 md:py-32 relative overflow-hidden route-section"
      id="team"
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
              <span className="text-amber-500">The Powerhouse</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bricolage font-semibold tracking-tighter text-white leading-[0.9]">
              Meet The
              <br />
              <span className="text-white/20">Team.</span>
            </h2>
          </AnimateOnScroll>
          <div className="flex flex-col items-start md:items-end gap-6">
            <AnimateOnScroll delay={0.1} className="text-neutral-500 text-sm md:text-base max-w-sm font-light leading-relaxed mb-4 md:mb-0">
              The dedicated individuals working tirelessly behind the scenes to make Hack2Future a reality.
            </AnimateOnScroll>

            {/* Tab Controls */}
            <AnimateOnScroll delay={0.2} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="relative flex flex-wrap items-center p-1.5 rounded-3xl md:rounded-full bg-neutral-900/80 border border-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 z-10 ${activeTab === tab.id
                      ? "text-amber-500"
                      : "text-white/50 hover:text-white/80"
                      }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="teamTabPill"
                        className="absolute inset-0 bg-amber-500/10 border border-amber-500/20 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                    {/* @ts-expect-error iconify-icon is a web component */}
                    <iconify-icon icon={tab.icon} width="14" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Team Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {sortedMembers.map((member, index) => (
              <motion.div
                key={member.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
