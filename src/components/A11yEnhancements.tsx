import { useEffect } from "react";

export const A11yEnhancements = () => {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.textContent = "Skip to main content";
    skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg";
    skipLink.setAttribute("aria-label", "Skip to main content");
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Ensure all interactive elements have focus rings
    const style = document.createElement("style");
    style.textContent = `
      /* Focus rings for accessibility */
      *:focus-visible {
        outline: 2px solid hsl(51 100% 50%);
        outline-offset: 2px;
        border-radius: 4px;
      }
      
      /* Skip link styles */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
      
      .focus\\:not-sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: inherit;
        margin: inherit;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
      
      /* High contrast mode support */
      @media (prefers-contrast: high) {
        * {
          border-color: currentColor !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Keyboard navigation improvements
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC key closes modals/dropdowns
      if (e.key === "Escape") {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          if ((modal as HTMLElement).style.display !== "none") {
            const closeButton = modal.querySelector('[aria-label*="close" i], [aria-label*="Close"]');
            if (closeButton) {
              (closeButton as HTMLElement).click();
            }
          }
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      skipLink.remove();
      style.remove();
    };
  }, []);

  return null;
};

