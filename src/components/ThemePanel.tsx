import { useEffect, useState } from "react";
import { Sun, Moon, Zap } from "lucide-react";

type Theme = "thunder" | "dark" | "light";

const THEME_KEY = "sri_theme";

export const ThemePanel = () => {
  const [theme, setTheme] = useState<Theme>("thunder");
  const [open, setOpen] = useState(false);

  // Initialize from storage / system preference
  useEffect(() => {
    const stored = (localStorage.getItem(THEME_KEY) as Theme | null);
    let initial: Theme = stored || "thunder";
    if (!stored) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      initial = prefersDark ? "dark" : "thunder";
    }
    applyTheme(initial);
  }, []);

  const applyTheme = (t: Theme) => {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem(THEME_KEY, t);
  };

  return (
    <div className="fixed bottom-36 md:bottom-24 right-4 md:right-6 z-[55]">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="ripple hover-shimmer rounded-full p-3 bg-card/80 border border-primary/30 text-foreground backdrop-blur-lg shadow-md hover:shadow-primary/20 transition-all"
        aria-label={open ? "Close theme panel" : "Open theme panel"}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Zap className="w-5 h-5 text-primary" aria-hidden="true" />
      </button>

      {/* Panel */}
      {open && (
        <div className="mt-3 p-3 rounded-xl bg-card/90 backdrop-blur-lg border border-primary/30 shadow-xl w-56" role="menu" aria-label="Theme selection">
          <p className="text-sm font-semibold mb-2">Theme</p>
          <div className="grid grid-cols-3 gap-2" role="group">
            <button
              onClick={() => applyTheme("thunder")}
              className={`ripple px-2 py-2 rounded-lg border ${theme === "thunder" ? "border-primary text-primary" : "border-primary/30"}`}
              role="menuitemradio"
              aria-checked={theme === "thunder"}
            >
              <Zap className="w-4 h-4 inline-block mr-1" aria-hidden="true" /> Thunder
            </button>
            <button
              onClick={() => applyTheme("dark")}
              className={`ripple px-2 py-2 rounded-lg border ${theme === "dark" ? "border-primary text-primary" : "border-primary/30"}`}
              role="menuitemradio"
              aria-checked={theme === "dark"}
            >
              <Moon className="w-4 h-4 inline-block mr-1" aria-hidden="true" /> Dark
            </button>
            <button
              onClick={() => applyTheme("light")}
              className={`ripple px-2 py-2 rounded-lg border ${theme === "light" ? "border-primary text-primary" : "border-primary/30"}`}
              role="menuitemradio"
              aria-checked={theme === "light"}
            >
              <Sun className="w-4 h-4 inline-block mr-1" aria-hidden="true" /> Light
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
//sri theme panel with 3 themes: thunder, dark, light. uses local storage to persist theme and system preference on first load. accessible with aria attributes.

