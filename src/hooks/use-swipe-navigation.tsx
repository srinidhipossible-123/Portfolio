import { useEffect, useRef } from "react";

const sections = ["home", "about", "skills", "projects", "recognition", "testimonials", "developer-stats", "contact"];

export const useSwipeNavigation = () => {
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);
  // Mobile “scroll sensitivity”: require a deliberate swipe, not normal scrolling.
  const minSwipeDistancePx = 160;
  const maxSwipeDurationMs = 200;
  const maxDiagonalDriftPx = 60;
  const isScrolling = useRef(false);
  const headerOffsetPx = 96;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchEndY.current = null;
      touchStartY.current = e.touches[0].clientY;
      touchEndX.current = null;
      touchStartX.current = e.touches[0].clientX;
      touchStartTime.current = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndY.current = e.touches[0].clientY;
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!touchStartY.current || !touchEndY.current || isScrolling.current) return;

      const distance = touchStartY.current - touchEndY.current;
      const isUpSwipe = distance > minSwipeDistancePx;
      const isDownSwipe = distance < -minSwipeDistancePx;
      const durationMs = touchStartTime.current ? Date.now() - touchStartTime.current : null;
      // Only treat very quick, deliberate flicks as navigation gestures.
      const isQuickFlick = durationMs !== null && durationMs <= maxSwipeDurationMs;
      const driftX = touchStartX.current !== null && touchEndX.current !== null
        ? Math.abs(touchStartX.current - touchEndX.current)
        : 0;
      const isMostlyVertical = driftX <= maxDiagonalDriftPx;

      if ((isUpSwipe || isDownSwipe) && isQuickFlick && isMostlyVertical) {
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

