import { useEffect, useRef } from "react";

const sections = ["home", "about", "skills", "projects", "recognition", "testimonials", "developer-stats", "contact"];

export const useSwipeNavigation = () => {
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);
  const minSwipeDistance = 50;
  const isScrolling = useRef(false);
  const headerOffsetPx = 96;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchEndY.current = null;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (!touchStartY.current || !touchEndY.current || isScrolling.current) return;

      const distance = touchStartY.current - touchEndY.current;
      const isUpSwipe = distance > minSwipeDistance;
      const isDownSwipe = distance < -minSwipeDistance;
      const durationMs = touchStartTime.current ? Date.now() - touchStartTime.current : null;
      // Only treat quick flicks as navigation gestures, otherwise let native scrolling win.
      const isQuickFlick = durationMs !== null && durationMs < 250;

      if ((isUpSwipe || isDownSwipe) && isQuickFlick) {
        const currentSection = getCurrentSection();
        if (!currentSection) return;

        const currentIndex = sections.indexOf(currentSection);
        let targetIndex: number;

        if (isUpSwipe && currentIndex < sections.length - 1) {
          targetIndex = currentIndex + 1;
        } else if (isDownSwipe && currentIndex > 0) {
          targetIndex = currentIndex - 1;
        } else {
          return;
        }

        const targetSection = sections[targetIndex];
        const element = document.getElementById(targetSection);
        if (element) {
          isScrolling.current = true;
          const y = element.getBoundingClientRect().top + window.scrollY - headerOffsetPx;
          window.scrollTo({ top: y, behavior: "smooth" });
          
          setTimeout(() => {
            isScrolling.current = false;
          }, 800);
        }
      }
    };

    const getCurrentSection = (): string | null => {
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            return section;
          }
        }
      }
      return null;
    };

    // Only enable on mobile
    if (window.innerWidth <= 768) {
      document.addEventListener("touchstart", handleTouchStart, { passive: true });
      document.addEventListener("touchmove", handleTouchMove, { passive: true });
      document.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
};

