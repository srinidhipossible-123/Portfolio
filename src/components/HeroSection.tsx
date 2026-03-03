import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import { TimeAwareGreeting } from "@/components/TimeAwareGreeting";
import resumeFile from "@/assets/Srinidhi S Joshi.pdf";

export const HeroSection = () => {
  const [displayedGreeting, setDisplayedGreeting] = useState("");
  const [isTypingGreeting, setIsTypingGreeting] = useState(false);
  
  const greetingText = "Hi, I'm Srinidhi S Joshi";
  const descriptionText = "a full-stack developer exploring the power of machine learning and AI. I enjoy building performant web applications while continuously learning how intelligent systems can enhance real-world products.";

  // Helper function to render greeting with color styling
  const renderGreeting = (text: string) => {
    if (!text) return null;
    
    const hiIndex = text.indexOf("Hi");
    const hiEnd = hiIndex + 2;
    const nameStart = text.indexOf("Srinidhi");
    
    return (
      <>
        {hiIndex >= 0 && (
          <span className="text-secondary text-glow-blue font-extrabold">Hi</span>
        )}
        {text.length > hiEnd && nameStart === -1 && (
          <span className="text-foreground/80">{text.substring(hiEnd)}</span>
        )}
        {text.length > hiEnd && nameStart > -1 && (
          <>
            <span className="text-foreground/80">{text.substring(hiEnd, nameStart)}</span>
            <span className="text-primary text-glow font-extrabold">{text.substring(nameStart)}</span>
          </>
        )}
      </>
    );
  };

  // Typing animation for greeting "Hi, I'm Srinidhi S Joshi" - continuous loop
  useEffect(() => {
    let greetingIndex = 0;
    let greetingInterval: NodeJS.Timeout | null = null;
    let isDeleting = false;
    let pauseTimeout: NodeJS.Timeout | null = null;

    const startTyping = () => {
      setIsTypingGreeting(true);
      greetingInterval = setInterval(() => {
        // Typing forward
        if (greetingIndex < greetingText.length) {
          setDisplayedGreeting(greetingText.slice(0, greetingIndex + 1));
          greetingIndex++;
        } else {
          // Finished typing, pause then start deleting
          clearInterval(greetingInterval!);
          greetingInterval = null;
          pauseTimeout = setTimeout(() => {
            isDeleting = true;
            startDeleting();
          }, 2000); // Pause for 2 seconds before deleting
        }
      }, 80); // Typing speed for greeting
    };

    const startDeleting = () => {
      setIsTypingGreeting(true); // Keep cursor visible during deleting
      greetingInterval = setInterval(() => {
        if (greetingIndex > 0) {
          greetingIndex--;
          setDisplayedGreeting(greetingText.slice(0, greetingIndex));
        } else {
          // Finished deleting, pause then start typing again
          clearInterval(greetingInterval!);
          greetingInterval = null;
          isDeleting = false;
          pauseTimeout = setTimeout(() => {
            startTyping();
          }, 500); // Pause for 0.5 seconds before typing again
        }
      }, 50); // Deleting speed (faster than typing)
    };

    // Start typing after initial delay
    setTimeout(() => {
      startTyping();
    }, 500);

    return () => {
      if (greetingInterval) clearInterval(greetingInterval);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, []);

  useEffect(() => {
    // Load the Spline viewer script during idle time to avoid blocking initial render
    if (!document.querySelector('script[data-spline-viewer]')) {
      const loadSpline = () => {
        if (document.querySelector('script[data-spline-viewer]')) return;
        const s = document.createElement('script');
        s.type = 'module';
        s.src = 'https://unpkg.com/@splinetool/viewer@1.11.5/build/spline-viewer.js';
        s.setAttribute('data-spline-viewer', 'true');
        document.body.appendChild(s);
      };
      // Prefer requestIdleCallback, fallback to timeout
      if ((window as any).requestIdleCallback) {
        (window as any).requestIdleCallback(loadSpline, { timeout: 2000 });
      } else {
        setTimeout(loadSpline, 1200);
      }
    }

    // Enhanced CSS to hide watermark and position robot
    if (!document.querySelector('style[data-spline-hide]')) {
      const style = document.createElement('style');
      style.setAttribute('data-spline-hide', 'true');
      style.innerHTML = `
        /* Hide all Spline badge elements */
        #logo,
        .logo,
        .spline-watermark,
        .spline-badge,
        .built-with-spline,
        [title*="Built with Spline"],
        [aria-label*="Built with Spline"],
        [href*="spline.design"],
        a[target="_blank"][rel*="nofollow"],
        spline-viewer #logo,
        spline-viewer .logo {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        
        /* Viewer positioning and styling */
        spline-viewer {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          overflow: visible !important;
          background: transparent !important;
          /* slightly larger on small screens */
          transform: translateX(8%) scale(1.03) !important;
          transition: transform 600ms ease !important;
        }
        
        spline-viewer canvas {
          background: transparent !important;
        }
        
        /* Larger screens: shift the model more to the right */
        @media (min-width: 768px) {
          spline-viewer {
            /* slightly larger on larger screens but keep it balanced */
            transform: translateX(15%) scale(1.05) !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Aggressive watermark removal with multiple strategies
    const removeWatermark = () => {
      document.querySelectorAll('spline-viewer').forEach((viewer) => {
        // Strategy 1: Remove from shadow DOM
        if (viewer.shadowRoot) {
          const logo = viewer.shadowRoot.querySelector('#logo');
          if (logo) logo.remove();
          
          // Hide all links in shadow DOM
          const links = viewer.shadowRoot.querySelectorAll('a');
          links.forEach(link => {
            if (link.href?.includes('spline') || 
                link.title?.toLowerCase().includes('spline') ||
                link.getAttribute('aria-label')?.toLowerCase().includes('spline')) {
              link.style.display = 'none';
              link.style.visibility = 'hidden';
              link.style.opacity = '0';
              link.style.pointerEvents = 'none';
            }
          });
        }

        // Strategy 2: Traverse all nodes
        const traverse = (root: Node) => {
          try {
            const el = root as Element;
            if (el && el.nodeType === 1) {
              const href = el.getAttribute?.('href');
              const title = el.getAttribute?.('title');
              const ariaLabel = el.getAttribute?.('aria-label');
              const textContent = el.textContent || '';
              
              if (
                href?.includes('spline') ||
                title?.toLowerCase().includes('spline') ||
                ariaLabel?.toLowerCase().includes('spline') ||
                /built with spline/i.test(textContent) ||
                el.id === 'logo' ||
                el.classList?.contains('logo')
              ) {
                (el as HTMLElement).style.display = 'none';
                (el as HTMLElement).style.visibility = 'hidden';
                (el as HTMLElement).style.opacity = '0';
                (el as HTMLElement).style.pointerEvents = 'none';
              }

              // Check for images with Spline in src
              if (el.tagName === 'IMG') {
                const src = (el as HTMLImageElement).src || '';
                if (/spline/i.test(src)) {
                  (el as HTMLElement).style.display = 'none';
                }
              }
            }
            root.childNodes.forEach(child => traverse(child));
            
            const element = root as Element & { shadowRoot?: ShadowRoot };
            if (element?.shadowRoot) {
              traverse(element.shadowRoot as unknown as Node);
            }
          } catch (e) {
            // Silently ignore errors
          }
        };
        
        traverse(viewer);
      });
    };

    // Run immediately
    removeWatermark();

    // Run after delays to catch late-loading elements
    const timeouts = [100, 300, 500, 1000, 2000, 3000];
    const timeoutIds = timeouts.map(delay => 
      setTimeout(removeWatermark, delay)
    );

    // Mutation observer for dynamic changes
    const observer = new MutationObserver(() => {
      removeWatermark();
    });

    // Observe each spline-viewer
    document.querySelectorAll('spline-viewer').forEach(viewer => {
      observer.observe(viewer, { 
        childList: true, 
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class', 'title', 'aria-label']
      });
      
      if (viewer.shadowRoot) {
        observer.observe(viewer.shadowRoot, { 
          childList: true, 
          subtree: true,
          attributes: true
        });
      }
    });

    // Observe document body for new spline-viewer additions
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => {
      observer.disconnect();
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-visible">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-spark-float" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-spark-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-primary rounded-full animate-spark-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-secondary rounded-full animate-spark-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Spline 3D viewer */}
          <div className="relative animate-slide-in-left">
            <div className="relative w-full md:w-[120%] md:-ml-[10%] h-[520px] md:h-[720px] overflow-visible group">
              <spline-viewer
                url="https://prod.spline.design/LcS-MpfqpmHWt8s8/scene.splinecode"
                style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
              />

              {/* Fallback overlay to hide badge - positioned at bottom right */}
              <div className="absolute bottom-4 right-4 z-50 w-36 h-10 rounded-full bg-card/80 backdrop-blur-sm pointer-events-none shadow-lg" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 md:space-y-8 animate-slide-in-right">
            <div className="space-y-4 md:space-y-6">
              {/* Time-aware greeting with GPS location */}
              <TimeAwareGreeting />
              
              {/* Styled name greeting - With typing animation */}
              <div className="mb-4 md:mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 min-h-12 md:min-h-16">
                  {renderGreeting(displayedGreeting)}
                  {isTypingGreeting && (
                    <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 align-middle typing-cursor" />
                  )}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground/70 mt-2">
                  Welcome to my portfolio
                </p>
              </div>
              
              {/* Description - Static, no typing animation */}
              <div className="mb-4 md:mb-6 max-w-2xl">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide">
                  {descriptionText}
                </p>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 md:mb-6">
                <span className="text-sm font-semibold text-primary">Web Development</span>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 md:mb-6">
                <span className="text-sm font-semibold text-primary">ML Learner</span>
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-primary-foreground hover:bg-primary/90 border-glow group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                size="lg"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 border-glow-blue hover:border-secondary/60 transition-all duration-300"
                size="lg"
              >
                <a href={resumeFile} download="Srinidhi S Joshi.pdf">
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 md:pt-8 border-t border-primary/20">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-glow transition-transform duration-300 group-hover:scale-110">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary text-glow-blue transition-transform duration-300 group-hover:scale-110">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Years Exp</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-glow transition-transform duration-300 group-hover:scale-110">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
