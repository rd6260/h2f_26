import GrainOverlay from "@/components/ui/GrainOverlay";
import SectionDivider from "@/components/ui/SectionDivider";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MissionsSection from "@/components/sections/MissionsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import HullIntegritySection from "@/components/sections/HullIntegritySection";
import CoreSystemsSection from "@/components/sections/CoreSystemsSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import FooterSection from "@/components/sections/FooterSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <HeroSection />
      <SectionDivider variant="dot" />
      <MissionsSection />
      <SectionDivider variant="pill" label="Sync" />
      <AboutSection />
      <SectionDivider variant="dot" />
      <TimelineSection />
      <SectionDivider variant="pill" label="Log" />
      <HullIntegritySection />
      <SectionDivider variant="dot" />
      <CoreSystemsSection />
      <SectionDivider variant="pill" label="Scan" />
      <SponsorsSection />
      <SectionDivider variant="dot" />
      <FooterSection />
    </>
  );
}
