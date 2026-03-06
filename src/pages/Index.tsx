import { useEffect } from "react";
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
import { useSwipeNavigation } from "@/hooks/use-swipe-navigation";
import { Footer } from "@/components/Footer";
import { PortfolioChat } from "@/components/PortfolioChat";
import { FaviconPulse } from "@/components/FaviconPulse";
import { A11yEnhancements } from "@/components/A11yEnhancements";
import BackToTop from "@/components/BackToTop";
import { useLocation } from "react-router-dom";

const Index = () => {
  // Enable swipe navigation on mobile
  useSwipeNavigation();
  const { hash } = useLocation();
  const headerOffsetPx = 96;

  useEffect(() => {
    // Smooth scroll behavior (avoid forcing snap on mobile)
    document.documentElement.style.scrollBehavior = "smooth";
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) {
      document.documentElement.classList.add("snap-enabled");
    }
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      document.documentElement.classList.remove("snap-enabled");
    };
  }, []);

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    // Let the page render before trying to scroll.
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffsetPx;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 0);
  }, [hash]);

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
        <main id="main-content" tabIndex={-1}>
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
      <BackToTop />
      <PortfolioChat />
    </>
  );
};

export default Index;
