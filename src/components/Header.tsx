import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Zap, Menu, X, Sun, Moon } from "lucide-react";

type Theme = "thunder" | "dark" | "light";

const THEME_KEY = "sri_theme";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("thunder");
  const [themeOpen, setThemeOpen] = useState(false);

  // Initialize theme from storage / system preference
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
    setThemeOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Recognition", id: "recognition" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/80 backdrop-blur-lg border-b border-primary/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-glow transition-all"
            aria-label="Go to home"
          >
            <Zap className="w-6 h-6 animate-lightning-flash" aria-hidden="true" />
            <span>𝒮𝓇𝒾𝓃𝒾𝒹𝒽𝒾 𝒮 𝒥𝑜𝓈𝒽𝒾</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            <a href="/blogs" className="text-foreground hover:text-primary transition-colors font-medium" aria-label="View blogs">Blogs</a>
            <div className="relative flex items-center gap-3">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 border-glow"
              >
                Let's Talk ⚡
              </Button>
              
              {/* Theme Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setThemeOpen(!themeOpen)}
                  className="ripple hover-shimmer rounded-lg p-2 bg-card/60 border border-primary/30 text-foreground backdrop-blur-lg shadow-md hover:shadow-primary/20 transition-all hover:border-primary/50"
                  aria-label={themeOpen ? "Close theme panel" : "Open theme panel"}
                  aria-expanded={themeOpen}
                  aria-haspopup="true"
                >
                  {theme === "thunder" && <Zap className="w-5 h-5 text-primary" aria-hidden="true" />}
                  {theme === "dark" && <Moon className="w-5 h-5 text-primary" aria-hidden="true" />}
                  {theme === "light" && <Sun className="w-5 h-5 text-primary" aria-hidden="true" />}
                </button>
                
                {/* Dropdown Menu */}
                {themeOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-45" 
                      onClick={() => setThemeOpen(false)}
                      aria-hidden="true"
                    />
                    <div className="absolute top-full right-0 mt-2 p-3 rounded-xl bg-card/95 backdrop-blur-lg border border-primary/30 shadow-xl w-48 z-[50] animate-fade-in" role="menu" aria-label="Theme selection">
                      <p className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Theme</p>
                      <div className="space-y-2" role="group">
                        <button
                          onClick={() => applyTheme("thunder")}
                          className={`ripple w-full flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                            theme === "thunder" 
                              ? "border-primary text-primary bg-primary/10 border-glow" 
                              : "border-primary/30 hover:border-primary/50"
                          }`}
                          role="menuitemradio"
                          aria-checked={theme === "thunder"}
                        >
                          <Zap className="w-4 h-4" aria-hidden="true" />
                          <span className="text-sm font-medium">Thunder</span>
                          {theme === "thunder" && <span className="ml-auto text-xs text-primary">✓</span>}
                        </button>
                        <button
                          onClick={() => applyTheme("dark")}
                          className={`ripple w-full flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                            theme === "dark" 
                              ? "border-primary text-primary bg-primary/10 border-glow" 
                              : "border-primary/30 hover:border-primary/50"
                          }`}
                          role="menuitemradio"
                          aria-checked={theme === "dark"}
                        >
                          <Moon className="w-4 h-4" aria-hidden="true" />
                          <span className="text-sm font-medium">Dark</span>
                          {theme === "dark" && <span className="ml-auto text-xs text-primary">✓</span>}
                        </button>
                        <button
                          onClick={() => applyTheme("light")}
                          className={`ripple w-full flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                            theme === "light" 
                              ? "border-primary text-primary bg-primary/10 border-glow" 
                              : "border-primary/30 hover:border-primary/50"
                          }`}
                          role="menuitemradio"
                          aria-checked={theme === "light"}
                        >
                          <Sun className="w-4 h-4" aria-hidden="true" />
                          <span className="text-sm font-medium">Light</span>
                          {theme === "light" && <span className="ml-auto text-xs text-primary">✓</span>}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-primary/20 pt-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            <a href="/case-studies" className="text-left text-foreground hover:text-primary transition-colors font-medium" aria-label="View case studies">Case Studies</a>
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                Let's Talk ⚡
              </Button>
              
              {/* Mobile Theme Selector */}
              <div className="flex items-center gap-2 p-2 bg-card/60 rounded-lg border border-primary/30">
                <span className="text-xs font-medium text-muted-foreground">Theme:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => applyTheme("thunder")}
                    className={`p-1.5 rounded ${theme === "thunder" ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}
                    aria-label="Thunder theme"
                  >
                    <Zap className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => applyTheme("dark")}
                    className={`p-1.5 rounded ${theme === "dark" ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}
                    aria-label="Dark theme"
                  >
                    <Moon className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => applyTheme("light")}
                    className={`p-1.5 rounded ${theme === "light" ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}
                    aria-label="Light theme"
                  >
                    <Sun className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
};