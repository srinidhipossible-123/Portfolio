import { Star, Heart, Quote } from "lucide-react";
import { useState } from "react";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Dr. Bharath",
    role: "HOD, Civil Engineering Dept, GMIT",
    quote: "Srinidhi transformed our department's digital presence. The website is intuitive, professional, and perfectly caters to our faculty and student needs.",
    rating: 5,
  },
  {
    name: "Ignitron Tech Team",
    role: "Event Organizers, GM University",
    quote: "The real-time leaderboard system was flawless. It handled heavy traffic during the fest without a glitch and added a professional edge to our event.",
    rating: 5,
  },
  {
    name: "Prof. Murugesh",
    role: "Assistant Professor, CS Dept",
    quote: "An exceptional student with a knack for practical problem-solving. His full-stack skills are well beyond his years.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [sectionLiked, setSectionLiked] = useState<boolean>(!!localStorage.getItem("testimonial_section_like"));
  const likeSection = () => {
    if (sectionLiked) return;
    localStorage.setItem("testimonial_section_like", "1");
    setSectionLiked(true);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background overlays matching ProjectsSection */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/70 to-background/30" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-secondary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Star className="w-6 h-6 animate-lightning-flash" />
            <span className="text-sm uppercase tracking-wider font-semibold">Testimonials</span>
            <Star className="w-6 h-6 animate-lightning-flash" />
          </div>
          
          <div className="inline-block px-6 py-5 rounded-2xl bg-background/60 backdrop-blur-md border border-primary/20 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
              <span className="text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">WHAT PEOPLE</span>
              <br />
              <span className="text-primary text-glow">SAY</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] mt-2">
              Endorsements from mentors and collaborators
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button 
            className={`
              relative group inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all duration-300
              ${sectionLiked 
                ? 'bg-primary/20 text-primary border-primary/50 cursor-default shadow-[0_0_20px_rgba(139,92,246,0.3)]' 
                : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]'
              }
            `}
            onClick={likeSection} 
            disabled={sectionLiked}
          >
            <Heart className={`w-5 h-5 ${sectionLiked ? 'fill-current' : 'group-hover:scale-110 transition-transform'}`} />
            {sectionLiked ? "Thank You!" : "Endorse Skills"}
          </button>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ t, i }: { t: { name: string; role: string; quote: string; rating: number }; i: number }) => {
  return (
    <Card 
      className="group bg-card/80 backdrop-blur-lg border-primary/20 hover:border-primary/60 transition-all duration-500 overflow-hidden border-glow hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(139,92,246,0.35)] animate-fade-in flex flex-col h-full"
      style={{ animationDelay: `${i * 0.15}s` }}
    >
      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors duration-300" />
        
        <div className="mb-6 grow">
          <p className="text-lg text-foreground/90 italic leading-relaxed">"{t.quote}"</p>
        </div>
        
        <div className="border-t border-primary/10 pt-6 mt-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex text-primary">
              {[...Array(t.rating)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {t.rating}.0/5.0
            </span>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">{t.name}</h4>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
