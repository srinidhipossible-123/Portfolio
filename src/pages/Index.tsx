import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { ThunderBackground } from "@/components/ThunderBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectSection";
import { RecognitionSection } from "@/components/RecognitionSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { Analytics } from "@/components/Analytics";
import { useSwipeNavigation } from "@/hooks/use-swipe-navigation";
import { Footer } from "@/components/Footer";
import { PortfolioChat } from "@/components/PortfolioChat";
import { A11yEnhancements } from "@/components/A11yEnhancements";
import BackToTop from "@/components/BackToTop";

const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const DeveloperStats = lazy(() => import("@/components/DeveloperStats").then(m => ({ default: m.DeveloperStats })));

const Index = () => {
  // Enable swipe navigation on mobile
  useSwipeNavigation();
  const { hash } = useLocation();
  const headerOffsetPx = 96;

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
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
          <Suspense fallback={null}>
            <TestimonialsSection />
            <DeveloperStats />
          </Suspense>
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
