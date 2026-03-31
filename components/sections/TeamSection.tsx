"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/ui/ParticleBackground";

interface TeamMember {
  name: string;
  designation: string;
  photo: string | null;
}

interface DepartmentGroup {
  name: string;
  members: TeamMember[];
}

const departments: DepartmentGroup[] = [
  {
    name: 'Leads',
    members: [
      { name: 'Prem', designation: 'Program Director', photo: '/team-2/leads/thirupati-koppera-prem-sagar.webp' },
      { name: 'Prajin', designation: 'Head Organizer', photo: '/team-2/leads/prajin.webp' },
      { name: 'Sai Sathwik', designation: 'Head Operations', photo: '/team-2/leads/cheera-sai-sathwik.webp' },
      { name: 'Aarya A Sajjan', designation: 'IIC Council Member', photo: '/team-2/leads/aarya.webp' },
      { name: 'Sharvani P', designation: 'IIC Council Member', photo: '/team-2/leads/sharvani-p.webp' },
      { name: 'R Swati', designation: 'Chief of Staff', photo: '/team-2/leads/ravva-swati.jpg' },
      { name: 'Shrisha', designation: 'IIC Council Member', photo: '/team-2/leads/shrisha-shrikant-rananaware.webp' },
    ]
  },
  {
    name: 'Technical',
    members: [
      { name: 'Savya Sanchi Sharma', designation: 'Technical Head', photo: '/team-2/leads/savya-sanchi-sharma.webp' },
      { name: 'Ayush Gochhayat', designation: 'Technical', photo: '/team-2/ayush-gochhayat.webp' },
      { name: 'Muhammad Owais', designation: 'Technical', photo: '/team-2/muhammad-owais.webp' },
      { name: 'Satvik Patil', designation: 'Technical', photo: '/team-2/satvik-m-patil.webp' },
      { name: 'Shreya S Sheri', designation: 'Technical', photo: '/team-2/shreya-s-sheri.webp' },
      { name: 'Harshita Prasad', designation: 'Technical', photo: '/team-2/harshita-prasad.webp' },
      { name: 'Suyash birhade', designation: 'Technical', photo: '/team-2/birhade-suyash-hemant.webp' },
      { name: 'Sufiyan Alam', designation: 'Technical', photo: '/team-2/sufiyan-alam.webp' },
      { name: 'Ngamchingseh Willis Kipgen', designation: 'Technical', photo: '/team-2/ngamchingseh-willis-kipgen.webp' },
      { name: 'Barghav Abhilash B R', designation: 'Technical', photo: '/team-2/bhargav.webp' },
      { name: 'Rohan Das', designation: 'Technical', photo: '/team-2/rohan-das.webp' },
    ]
  },
  {
    name: 'Design',
    members: [
      { name: 'Lakshmi prasad', designation: 'Design Head', photo: '/team-2/leads/lakshmi-prasad.webp' },
      { name: 'Syed Mahdee Husain', designation: 'Design', photo: '/team-2/leads/syed-mahdee-husain.jpg' },
      { name: 'Sree Samhita', designation: 'Design', photo: '/team-2/sree-samhita-gundimeda.webp' },
      { name: 'Devika Dhantala', designation: 'Design', photo: '/team-2/dhantala-devika.webp' },
      { name: 'Prathyusha Reddy', designation: 'Design', photo: '/team/prathyusha_reddy.jpg' },
      { name: 'Pundru Madhulika', designation: 'Design', photo: '/team-2/pundru-madhulika.webp' },
      { name: 'Shrujana pyla', designation: 'Design', photo: '/team-2/pyla-shrujana.webp' },
    ]
  },
  {
    name: 'Website Development',
    members: [
      { name: 'Kushagra Kumar Arora', designation: 'Website Development', photo: '/team-2/kushagra-kumar-arora.webp' },
      { name: 'Aditya gupta', designation: 'Website Development', photo: '/team-2/aditya-gupta.webp' },
      { name: 'Ujwal Akotkar', designation: 'Website Development', photo: '/team-2/ujwal.webp' },
    ]
  },
  {
    name: 'Marketing & Sponsorship',
    members: [
      { name: 'TEJAS', designation: 'Marketing Head', photo: '/team-2/leads/tejas-subhash-chalwadi.jpeg' },
      { name: 'Zaid Nasim', designation: 'Sponsorship', photo: '/team-2/zaid-nasim.webp' },
      { name: 'Suharshitha', designation: 'Sponsorship', photo: '/team-2/pulla-suharshitha.webp' },
      { name: 'Madhav Dahiphale', designation: 'Sponsorship', photo: '/team-2/dahiphale-madhav-hanmant.webp' },
      { name: 'Keerthi varman', designation: 'Social Media Head', photo: '/team-2/leads/keerthi-varman.png' },
    ]
  },
  {
    name: 'Events & Hospitality',
    members: [
      { name: 'Prakar', designation: 'Event Management Head', photo: '/team-2/leads/prakar.webp' },
      { name: 'Pradnesh Fernandez A', designation: 'Hospitality Head', photo: '/team-2/leads/pradnesh-fernandez-a.webp' },
    ]
  },
];

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="relative w-full aspect-[3/4] bg-neutral-900 overflow-hidden group border-4 border-neutral-800 hover:border-amber-500 shadow-[8px_8px_0_0_rgba(245,158,11,0.2)] hover:shadow-[8px_8px_0_0_rgba(245,158,11,1)] transition-all duration-300">
    {member.photo ? (
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
      />
    ) : (
      <div className="w-full h-full bg-neutral-800 flex items-center justify-center font-mono text-neutral-500 flex-col gap-2">
        <span className="text-2xl">⚡</span>
        <span>NO SIGNAL</span>
      </div>
    )}

    {/* Pixel Art Title Card Overlay */}
    <div className="absolute bottom-4 left-4 right-4 bg-white border-4 border-black p-3 font-mono shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-20 transition-transform duration-300 group-hover:-translate-y-2 flex flex-col justify-center min-h-[70px]">
      <h3 className="text-black font-bold uppercase text-xs sm:text-sm md:text-base leading-tight mb-2 truncate">{member.name}</h3>
      <div className="self-start">
        <p className="text-[10px] sm:text-xs text-white font-bold uppercase leading-tight bg-black px-2 py-1 inline-block truncate max-w-full">
          {member.designation}
        </p>
      </div>
    </div>

    {/* Inner scanline/pixel overlay */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDBINHYxSDB6IiBmaWxsPSJyZ2JhKDAsMCwwLDAuNCkiLz4KPC9zdmc+')] pointer-events-none opacity-40 group-hover:opacity-10 transition-opacity duration-500 z-10" />
  </div>
);

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<string>(departments[0].name);

  const activeDepartment = departments.find(d => d.name === activeTab) || departments[0];

  return (
    <section className="bg-neutral-950 px-4 md:px-6 py-24 md:py-32 relative text-white min-h-[800px] overflow-hidden" id="team">
      <ParticleBackground />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-amber-500/[0.03] rounded-full blur-[150px] pointer-events-none z-0 hidden md:block" />



      <div className="flex flex-col w-full max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col mb-12 gap-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.3em]">
              <span className="w-10 h-[1px] bg-amber-500" />
              <span className="text-amber-500">The Powerhouse</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">
              Meet The
              <br />
              <span className="text-white/20">Team Behind.</span>
            </h2>
          </div>
        </div>

        {/* Tabs Container */}
        <div className="relative mb-12 w-full max-w-[90vw] md:max-w-none">
          {/* Scrollable Tabs Wrapper */}
          <div className="flex flex-wrap gap-4 pb-2 w-full">
            {departments.map((dept, idx) => (
              <motion.button
                key={dept.name}
                onClick={() => setActiveTab(dept.name)}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{
                  y: { duration: 3.5 + (idx % 2), repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4.5 + (idx % 3), repeat: Infinity, ease: "easeInOut" }
                }}
                className={`px-6 py-3 rounded-none font-mono text-xs md:text-sm font-bold uppercase transition-colors duration-300 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] border-2 ${activeTab === dept.name
                  ? "bg-amber-500 text-black border-black"
                  : "bg-neutral-900 text-neutral-400 border-neutral-700 hover:border-amber-500/50 hover:text-white"
                  }`}
              >
                {dept.name}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="w-full relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full">
                {activeDepartment.members.map((member, idx) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.95, y: 0, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -10, 0],
                      rotate: [0, 1.5, -1.5, 0]
                    }}
                    transition={{
                      opacity: { duration: 0.4, delay: idx * 0.05 },
                      scale: { duration: 0.4, delay: idx * 0.05 },
                      y: { duration: 4 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: idx * 0.05 + 0.2 },
                      rotate: { duration: 5 + (idx % 2), repeat: Infinity, ease: "easeInOut", delay: idx * 0.05 + 0.2 }
                    }}
                  >
                    <TeamCard member={member} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
