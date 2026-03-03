import { Award, Trophy, Zap, Star, ExternalLink } from "lucide-react";
import { useState } from "react";
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
    title: "Outstanding Developer",
    org: "Tech Excellence Awards 2024",
    description: "Recognized for exceptional code quality, architectural decisions, and project delivery excellence",
    year: "2024",
    badge: "Excellence",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  },
  {
    icon: Award,
    title: "Innovation Award",
    org: "Web Development Summit",
    description: "Awarded for innovative solutions in full-stack development and performance optimization",
    year: "2023",
    badge: "Innovation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    icon: Star,
    title: "Top Open Source Contributor",
    org: "GitHub Community",
    description: "Leading contributor to major open-source projects with 10K+ stars across repositories",
    year: "2023",
    badge: "Open Source",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
  },
  {
    icon: Zap,
    title: "Performance Excellence",
    org: "Core Web Vitals Challenge",
    description: "Achieved perfect scores (100/100) across all performance metrics in Lighthouse audits",
    year: "2024",
    badge: "Performance",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
];

export const RecognitionSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // return (
  //   <section id="recognition" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
  //     <div className="container mx-auto px-4">
  //       {/* Section Title */}
  //       <div className="text-center mb-16 animate-fade-in">
  //         <div className="inline-flex items-center gap-2 text-primary mb-4">
  //           <Award className="w-6 h-6 animate-lightning-flash" />
  //           <span className="text-sm uppercase tracking-wider font-semibold">Recognition</span>
  //           <Award className="w-6 h-6 animate-lightning-flash" />
  //         </div>
  //         <h2 className="text-4xl md:text-6xl font-bold mb-4">
  //           <span className="text-foreground">AWARDS &</span>
  //           <br />
  //           <span className="text-primary">CERTIFICATIONS</span>
  //         </h2>
  //         <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
  //           Honors and milestones marking my journey in technology
  //         </p>
  //       </div>

  //       {/* Professional Cards Grid */}
  //       <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  //         {achievements.map((achievement, index) => (
  //           <div
  //             key={achievement.title}
  //             className="group relative bg-card/50 backdrop-blur-md border border-primary/10 rounded-2xl p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col gap-6"
  //             style={{ animationDelay: `${index * 0.15}s` }}
  //           >
  //             {/* Header */}
  //             <div className="flex justify-between items-start">
  //               <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
  //                 <achievement.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
  //               </div>
  //               <span className="px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20 rounded-full">
  //                 {achievement.year}
  //               </span>
  //             </div>

  //             {/* Content */}
  //             <div>
  //               <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
  //                 {achievement.title}
  //               </h3>
  //               <p className="text-sm font-medium text-primary/80 mb-3 uppercase tracking-wide">
  //                 {achievement.org}
  //               </p>
  //               <p className="text-muted-foreground leading-relaxed">
  //                 {achievement.description}
  //               </p>
  //             </div>

  //             {/* Footer / Action */}
  //             <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between">
  //               <span className="text-xs font-medium text-muted-foreground px-2 py-1 bg-muted rounded-md">
  //                 {achievement.badge}
  //               </span>
  //               <button
  //                 onClick={() => setSelectedImage(achievement.image)}
  //                 className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/btn"
  //               >
  //                 View Certificate
  //                 <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>

  //     {/* Certificate Dialog */}
  //     <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
  //       <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
  //          <div className="relative rounded-xl overflow-hidden border border-primary/20 bg-card/95 backdrop-blur-xl">
  //           {selectedImage && (
  //             <img
  //               src={selectedImage}
  //               alt="Certificate"
  //               className="w-full h-auto max-h-[80vh] object-contain"
  //             />
  //           )}
  //           <button 
  //             onClick={() => setSelectedImage(null)}
  //             className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors"
  //           >
  //             <span className="sr-only">Close</span>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  //           </button>
  //          </div>
  //       </DialogContent>
  //     </Dialog>
  //   </section>
  // );
};