import { Trophy, Globe, Code, Star } from "lucide-react";

const achievements = [
  {
    badge: "Performance",
    title: "Core Web Vitals 100/100",
    footer: "Site-wide audits & Optimization",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    badge: "Open Source",
    title: "Top Contributor",
    footer: "Active in React & Node ecosystem",
    icon: Code,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    badge: "Excellence",
    title: "Tech Innovator",
    footer: "Award-winning solutions",
    icon: Star,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

export const AchievementsSection = () => {
  // return (
  //   <section id="achievements" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-secondary/5">
  //     <div className="container mx-auto px-4">
  //       <div className="text-center mb-14 animate-fade-in">
  //         <div className="inline-flex items-center gap-2 text-primary mb-4">
  //           <Trophy className="w-6 h-6" />
  //           <span className="text-sm uppercase tracking-wider font-semibold">Highlights</span>
  //           <Trophy className="w-6 h-6" />
  //         </div>
  //         <h2 className="text-4xl md:text-6xl font-bold mb-4">
  //           PROFESSIONAL
  //           <br />
  //           <span className="text-primary">MILESTONES</span>
  //         </h2>
  //         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  //           Key metrics and recognitions defining my professional journey
  //         </p>
  //       </div>

  //       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  //         {achievements.map((a, i) => (
  //           <div
  //             key={a.title}
  //             className="group relative bg-card/80 backdrop-blur-lg border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
  //             style={{ animationDelay: `${i * 0.1}s` }}
  //           >
  //             {/* Background Gradient */}
  //             <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-transparent via-transparent to-${a.color.split('-')[1]}-500/5`} />
              
  //             <div className="relative z-10 flex flex-col items-center text-center">
  //               {/* Icon Circle */}
  //               <div className={`w-20 h-20 rounded-full ${a.bg} ${a.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
  //                 <a.icon className={`w-10 h-10 ${a.color}`} strokeWidth={1.5} />
  //               </div>

  //               {/* Badge */}
  //               <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${a.bg} ${a.color} border ${a.border}`}>
  //                 {a.badge}
  //               </span>

  //               {/* Content */}
  //               <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
  //                 {a.title}
  //               </h3>
  //               <p className="text-muted-foreground font-medium">
  //                 {a.footer}
  //               </p>
  //             </div>

  //             {/* Decorative Corner */}
  //             <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${a.bg} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

