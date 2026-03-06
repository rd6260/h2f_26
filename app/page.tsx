import GrainOverlay from "@/components/ui/GrainOverlay";
import SectionDivider from "@/components/ui/SectionDivider";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MissionsSection from "@/components/sections/MissionsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import HullIntegritySection from "@/components/sections/HullIntegritySection";
import PrizesSection from "@/components/sections/PrizesSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQsSection from "@/components/sections/FAQsSection";
import FooterSection from "@/components/sections/FooterSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SectionDivider variant="dot" />
      <MissionsSection />
      <SectionDivider variant="dot" />
      <TimelineSection />

      <HullIntegritySection />
      <SectionDivider variant="dot" />
      <PrizesSection />



      <SponsorsSection />
      <SectionDivider variant="dot" />
      <TeamSection />
      <SectionDivider variant="dot" />
      <FAQsSection />
      <SectionDivider variant="dot" />
      <FooterSection />
    </>
  );
}
