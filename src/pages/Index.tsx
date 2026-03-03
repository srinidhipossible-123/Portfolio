import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { ThunderBackground } from "@/components/ThunderBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { DynamicCursor } from "@/components/DynamicCursor";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectSection";
import { RecognitionSection } from "@/components/RecognitionSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DeveloperStats } from "@/components/DeveloperStats";
import { Analytics } from "@/components/Analytics";
import { BottomNav } from "@/components/BottomNav";
import { useSwipeNavigation } from "@/hooks/use-swipe-navigation";
import { Footer } from "@/components/Footer";
import { PortfolioChat } from "@/components/PortfolioChat";
import { FaviconPulse } from "@/components/FaviconPulse";
import { A11yEnhancements } from "@/components/A11yEnhancements";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  // Enable swipe navigation on mobile
  useSwipeNavigation();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.classList.add("snap-enabled");
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      document.documentElement.classList.remove("snap-enabled");
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Analytics />
      <DynamicCursor />
      <FaviconPulse />
      <A11yEnhancements />
      <ThunderBackground />
      
      <div className="relative z-10 transition-opacity duration-500 opacity-100">
        <Header />
        <main id="main-content" className="pb-20 md:pb-0" tabIndex={-1}>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <RecognitionSection />
          <AchievementsSection />
          <TestimonialsSection />
          <DeveloperStats />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <BottomNav />
      <BackToTop />
      <PortfolioChat />
    </>
  );
};

export default Index;
