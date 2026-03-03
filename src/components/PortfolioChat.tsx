import { useState, useRef, useEffect } from "react";
import { X, Send, Zap, Mic, MicOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { caseStudies } from "@/data/case-studies";

type Message = { role: "user" | "assistant"; content: string };
const quickMessages = ["Ask about projects", "View tech stack", "See my skills", "Get in touch"];

export const PortfolioChat = () => {
  const [open, setOpen] = useState(false);
  const [showQuickMessage, setShowQuickMessage] = useState(true);
  const [currentQuickMessage, setCurrentQuickMessage] = useState(0);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: "Hi! I'm your ZynSpark. Ask me about projects, case studies, tech stack, or skills." }]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (open || !showQuickMessage) return; const i = setInterval(() => setCurrentQuickMessage(p => (p + 1) % quickMessages.length), 3000); return () => clearInterval(i); }, [open, showQuickMessage]);

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SR) {
      const recognition = new SR();
      recognition.lang = "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.onresult = (event: any) => setInput(event.results[0][0].transcript);
      recognition.onend = () => setIsListening(false);
      recognitionRef.current = recognition;
    }
  }, []);

  useEffect(() => {
    if (!document.querySelector('script[data-spline-viewer]')) {
      const s = document.createElement('script');
      s.type = 'module';
      s.src = 'https://unpkg.com/@splinetool/viewer@1.11.5/build/spline-viewer.js';
      s.setAttribute('data-spline-viewer', 'true');
      document.body.appendChild(s);
    }
    if (!document.querySelector('style[data-spline-hide]')) {
      const style = document.createElement('style');
      style.setAttribute('data-spline-hide', 'true');
      style.innerHTML = `.spline-badge, .built-with-spline, [title*="Built with Spline"], [aria-label*="Built with Spline"], [href*="spline.design"], spline-viewer .spline-badge { display: none !important; } spline-viewer, spline-viewer * { background: transparent !important; }`;
      document.head.appendChild(style);
    }
    const hideNode = (node: Node) => {
      try {
        const el = node as Element; if (!el) return; if (el.tagName === 'SPLINE-VIEWER') return;
        const inViewer = (el as HTMLElement).closest && (el as HTMLElement).closest('spline-viewer'); if (!inViewer) return;
        const title = el.getAttribute?.('title') || '';
        const aria = el.getAttribute?.('aria-label') || '';
        const href = el.getAttribute?.('href') || '';
        const text = el.textContent || '';
        if (/built with spline/i.test(text) || /\bspline\b/i.test(text) || /\bspline\b/i.test(title) || /\bspline\b/i.test(aria) || /spline\.design|splinetool/i.test(href)) {
          const html = el as HTMLElement; html.style.display = 'none'; html.style.visibility = 'hidden'; html.style.opacity = '0'; html.style.pointerEvents = 'none';
        }
      } catch {}
    };
    const traverse = (root: Node) => { hideNode(root); root.childNodes.forEach(c => traverse(c)); const e = root as Element & { shadowRoot?: ShadowRoot }; if (e?.shadowRoot) traverse(e.shadowRoot as unknown as Node); };
    const observer = new MutationObserver(() => { document.querySelectorAll('spline-viewer').forEach(v => traverse(v)); });
    document.querySelectorAll('spline-viewer').forEach(v => traverse(v));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const getAssistantResponse = (text: string) => {
    const q = text.trim().toLowerCase();
    // Direct salutations
    if (/^(hi|hello|hey)\b/.test(q)) return "Hello! I can help with projects, case studies, skills, tech stack, resume, and contact information. What would you like to know?";

    // Resume
    if (q.includes("resume") || q.includes("cv") || q.includes("download resume") || q.includes("download cv")) {
      return "You can download the resume here: /resume.pdf — or click the 'Download Resume' button in the hero section.";
    }

    // Contact
    if (q.includes("contact") || q.includes("hire") || q.includes("work with") || q.includes("get in touch") || q.includes("email")) {
      return "You can reach out via the contact form in the Contact section or click the 'Let's Talk' button in the header. I'll also share a link if you want to open the contact section: #contact.";
    }

    // Skills / tech stack
    if (q.includes("skill") || q.includes("skills") || q.includes("tech stack") || q.includes("technologies") || q.includes("stack")) {
      return "Key skills: React, TypeScript, Node.js, Next/Vite, PostgreSQL, MongoDB, Docker, Kubernetes, Tailwind CSS, D3, and observability tooling. Ask about any specific technology for more details.";
    }

    // Experience / years
    if (q.includes("experience") || q.includes("years")) {
      return "Srinidhi has 5+ years of professional experience building scalable web applications and production systems. Ask about projects or specific roles for examples.";
    }

    // Projects / case studies
    if (q.includes("project") || q.includes("projects") || q.includes("case study") || q.includes("case studies")) {
      // list available case studies from data
      if (caseStudies && caseStudies.length) {
        const list = caseStudies.map(cs => `• ${cs.title} (${cs.period}) — role: ${cs.role}.`).join("\n");
        return `Here are highlighted case studies:\n${list}\nYou can ask for details about any one (e.g. 'Tell me about E‑Commerce Platform').`;
      }
      return "I have several projects and case studies. Ask 'What projects have you done?' or 'Tell me about the ecommerce project'.";
    }

    // Specific case study lookup by title or slug keywords
    for (const cs of caseStudies) {
      const key = cs.title.toLowerCase();
      if (q.includes(cs.slug) || q.includes(key.split(' ')[0]) || q.includes(key.split(' ')[1])) {
        return `${cs.title} (${cs.period}) — role: ${cs.role}. Tech: ${cs.stack.join(', ')}. Problem: ${cs.problem} Solution: ${cs.solution} Outcomes: ${cs.outcomes.join('; ')}`;
      }
    }

    // Location / availability
    if (q.includes("location") || q.includes("based") || q.includes("timezone")) {
      return "Location details are on the site. If you want to collaborate, please use the Contact section so we can coordinate.";
    }

    // Fallback with suggestions
    return "I can help with projects, case studies, skills, tech stack, resume, and contact. Try asking: 'Show projects', 'What skills do you have?', or 'How can I contact you?'";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userText }]);
    const response = getAssistantResponse(userText);
    // Slight delay to simulate thinking
    setTimeout(() => setMessages(prev => [...prev, { role: "assistant", content: response }]), 400);
    setInput("");
  };

  const sendQuick = (q: string) => {
    setInput(q);
    setShowQuickMessage(false);
    setTimeout(() => handleSend(), 50);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return alert("Speech Recognition not supported");
    if (isListening) { recognitionRef.current.stop(); setIsListening(false); }
    else { recognitionRef.current.start(); setIsListening(true); }
  };

  return (
    <>
      <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-60 flex flex-col items-end gap-3">
        {!open && showQuickMessage && (
          <div className="relative bg-card/95 backdrop-blur-lg border border-primary/30 rounded-lg px-4 py-2 shadow-lg animate-fade-in animate-spark-float">
            <p className="text-xs font-medium text-foreground whitespace-nowrap">{quickMessages[currentQuickMessage]}</p>
            <button onClick={() => setShowQuickMessage(false)} className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-muted text-muted-foreground text-[10px] flex items-center justify-center">×</button>
          </div>
        )}

        <button onClick={() => { setOpen(!open); setShowQuickMessage(false); }} className="w-16 h-16 md:w-16 md:h-16 rounded-full bg-transparent transition-transform flex items-center justify-center animate-fade-in hover:scale-110 relative overflow-hidden">
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <spline-viewer url="https://prod.spline.design/TgQjhltiGWJ8Zy1U/scene.splinecode" style={{ width: "100%", height: "100%", pointerEvents: "none" }} />
            </div>
          )}
          {!open && <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse" />}
        </button>
      </div>

      {open && (
        <div className="fixed bottom-28 md:bottom-28 right-4 md:right-6 z-60 w-[calc(100vw-2rem)] md:w-96 h-[500px] bg-card/95 backdrop-blur-lg border-2 border-primary/50 rounded-2xl shadow-2xl flex flex-col border-glow animate-fade-in">
          <div className="flex items-center justify-between p-4 border-b border-primary/20">
            <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-primary" /><h3 className="font-bold text-foreground">Ask ZynSpark</h3></div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-primary/20 flex gap-2 items-center">
            <Button onClick={toggleListening} size="icon" className={`${isListening ? "bg-red-500" : "bg-secondary"}`} title={isListening ? "Stop listening" : "Start voice input"}>{isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}</Button>
            <Input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSend()} placeholder="Speak or type..." className="flex-1 bg-input border-primary/30 focus:border-primary" />
            <Button onClick={handleSend} size="icon" className="bg-primary text-primary-foreground"><Send className="w-4 h-4" /></Button>
          </div>
        </div>
      )}
    </>
  );
}