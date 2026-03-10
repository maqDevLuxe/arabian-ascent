import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import DialectSection from "@/components/sections/DialectSection";
import CultureSection from "@/components/sections/CultureSection";
import TimelineSection from "@/components/sections/TimelineSection";
import PronunciationSection from "@/components/sections/PronunciationSection";
import InstructorsSection from "@/components/sections/InstructorsSection";
import NetworkingSection from "@/components/sections/NetworkingSection";
import CountersSection from "@/components/sections/CountersSection";
import BlogSection from "@/components/sections/BlogSection";
import OptionsSection from "@/components/sections/OptionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTAFooter from "@/components/sections/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <DialectSection />
      <CultureSection />
      <TimelineSection />
      <PronunciationSection />
      <InstructorsSection />
      <NetworkingSection />
      <CountersSection />
      <BlogSection />
      <OptionsSection />
      <TestimonialsSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
