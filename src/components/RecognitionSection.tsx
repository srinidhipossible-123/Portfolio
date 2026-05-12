import { Award, Trophy, Zap, Star, ExternalLink } from "lucide-react";
import { useState } from "react";
import achievementCharacter from "@/assets/achievement-character.png";
import trophyGold from "@/assets/trophy-icon.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const achievements = [
  {
    icon: Trophy,
    title: "Event Coordinator — Poster Presentation",
    org: "Ignitron 2K24",
    description: "Served as Event Coordinator for the Poster Presentation track at Ignitron 2K24.",
    year: "2024",
    badge: "Certification",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  },
  {
    icon: Award,
    title: "SIH 2024 Grand Finalist (Hardware Edition)",
    org: "Smart India Hackathon",
    description: "Reached the Grand Finals in the Hardware Edition of Smart India Hackathon 2024.",
    year: "2024",
    badge: "Achievement",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    icon: Star,
    title: "Web Design and Development Workshop",
    org: "X-Workz Bengaluru & CIGSRD GM University",
    description: "Two-day workshop on Web Design and Development. Held on 10th & 11th March 2025.",
    year: "2025",
    badge: "Certification",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
  },
  {
    icon: Award,
    title: "Third Place — Standard Writing Competition",
    org: "Bureau of Indian Standards",
    description: "Secured third place in the Standard Writing Competition conducted by BIS.",
    year: "2024",
    badge: "Achievement",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
  {
    icon: Zap,
    title: "4× Department Website Development",
    org: "GM University",
    description: "Developed official department websites: (1) Data Science & IoT, (2) Civil Engineering, (3) Biotechnology, (4) GM School of Law — all live on GMU infrastructure.",
    year: "2024–2025",
    badge: "Achievement",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=600&fit=crop",
  },
  {
    icon: Trophy,
    title: "2nd Runner Up — eRaksha Hackathon 2026",
    org: "eRaksha Hackathon",
    description: "Secured 2nd Runner Up at eRaksha Hackathon 2026.",
    year: "2026",
    badge: "Achievement",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  },
];

export const RecognitionSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="recognition" className="py-24 relative overflow-hidden">
      {/* Crazy 3D Background Elements */}
      <div className="absolute inset-0 electric-grid pointer-events-none opacity-30" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />

      {/* 🌩 Decorative PNGs */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-bounce pointer-events-none hidden lg:block">
        <img src={trophyGold} alt="" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,217,0,0.5)]" />
      </div>
      <div className="absolute bottom-20 right-10 w-64 h-64 opacity-15 animate-pulse pointer-events-none hidden xl:block">
        <img src={achievementCharacter} alt="" className="w-full h-full object-contain filter grayscale brightness-150" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Award className="w-8 h-8 animate-lightning-flash" />
            <span className="text-sm uppercase tracking-wider font-bold">Hall of Fame</span>
            <Award className="w-8 h-8 animate-lightning-flash" />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-glow">
            <span className="text-foreground">STORMING</span>
            <br />
            <span className="text-primary">MILESTONES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 font-medium">
            A collection of hard-earned victories and professional strikes that define my journey.
          </p>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto perspective-1000">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group relative animate-fade-in preserve-3d transition-transform duration-700 hover:rotate-x-2 hover:rotate-y-6"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-10 group-hover:opacity-40 transition duration-1000" />
              
              <div className="relative h-full bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 overflow-hidden shadow-2xl flex flex-col gap-6">
                {/* 🌩 Small Decorative Trophy Background */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 pointer-events-none">
                  <img src={trophyGold} alt="" className="w-full h-full object-contain" />
                </div>

                {/* ⚡ Scanning Effect */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  <div className="w-full h-1 bg-primary/30 shadow-[0_0_15px_rgba(139,92,246,0.5)] animate-scan opacity-0 group-hover:opacity-100" />
                </div>

                {/* Header */}
                <div className="flex justify-between items-start relative z-10">
                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                    <achievement.icon className="w-8 h-8 text-primary animate-pulse" strokeWidth={2} />
                  </div>
                  <span className="px-4 py-1.5 text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20 rounded-full shadow-[0_0_10px_rgba(0,204,255,0.1)]">
                    {achievement.year}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm font-bold text-primary/80 mb-4 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full" />
                    {achievement.org}
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {achievement.description}
                  </p>
                </div>

                {/* Footer / Action */}
                <div className="mt-auto pt-6 border-t border-primary/10 flex items-center justify-between relative z-10">
                  <span className="text-[10px] uppercase tracking-tighter font-black text-muted-foreground px-3 py-1 bg-muted/50 border border-primary/5 rounded-lg group-hover:border-primary/20 transition-colors">
                    {achievement.badge}
                  </span>
                  <button
                    onClick={() => setSelectedImage(achievement.image)}
                    className="flex items-center gap-2 text-sm font-bold text-primary hover:text-glow transition-all group/btn"
                  >
                    <img src={trophyGold} alt="" className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                    DEPLOY CERTIFICATE
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
           <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 bg-card/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.4)]">
            {/* ⚡ Dialog Lightning Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 electric-grid" />
            
            {/* 🌩 Decorative Trophy in Dialog */}
            <div className="absolute top-4 left-4 w-10 h-10 opacity-40 z-20">
              <img src={trophyGold} alt="" className="w-full h-full object-contain animate-pulse" />
            </div>

            {selectedImage && (
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto max-h-[85vh] object-contain relative z-10"
              />
            )}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-primary/20 hover:bg-primary/40 text-white rounded-full backdrop-blur-md transition-all z-20 border border-primary/30 group"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
           </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};