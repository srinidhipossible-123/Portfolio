import { Home, User, Briefcase, Mail, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export const BottomNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const headerOffsetPx = 96;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffsetPx;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-lg border-t border-primary/20 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]" aria-label="Bottom navigation">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-around py-2" role="list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 relative ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30" />
                )}
                <Icon className={`w-5 h-5 transition-transform ${isActive ? "scale-110" : ""}`} aria-hidden="true" />
                <span className={`text-[10px] font-medium transition-all ${isActive ? "text-primary" : ""}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

