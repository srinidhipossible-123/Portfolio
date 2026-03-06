import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-4 z-50 group flex items-center justify-center w-[50px] h-[50px] rounded-full bg-card border-none font-semibold shadow-[0px_0px_0px_4px_hsl(51_100%_50%_/_0.25)] cursor-pointer transition-all duration-300 overflow-hidden hover:w-[140px] hover:rounded-[50px] hover:bg-primary hover:shadow-[0px_0px_15px_hsl(51_100%_50%_/_0.5)] md:bottom-10 md:right-8"
      aria-label="Back to top"
    >
      <svg
        className="w-3 transition-all duration-300 group-hover:-translate-y-[200%] fill-foreground group-hover:fill-primary-foreground"
        viewBox="0 0 384 512"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
      <span className="absolute -bottom-5 text-[0px] text-primary-foreground transition-all duration-300 opacity-0 group-hover:text-[13px] group-hover:opacity-100 group-hover:bottom-auto font-bold uppercase tracking-wider whitespace-nowrap">
        Back to Top
      </span>
    </button>
  );
};

export default BackToTop;
