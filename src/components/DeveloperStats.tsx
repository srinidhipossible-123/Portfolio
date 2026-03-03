export const DeveloperStats = () => {
  const githubUser = "srinidhipossible-123"; // ✅ Your GitHub username
  const leetcodeUser = (import.meta.env as any).VITE_LEETCODE_USER || "";

  // return (
  //   <section id="developer-stats" className="py-12 sm:py-16 md:py-20">
  //     <div className="container mx-auto px-4">
  //       {/* Section Header */}
  //       <div className="text-center mb-10">
  //         <h2 className="text-4xl md:text-6xl font-bold text-primary text-glow">
  //           Developer Stats ⚡
  //         </h2>
  //         <p className="text-lg text-muted-foreground mt-3">
  //           Explore my GitHub activity and coding progress
  //         </p>
  //       </div>

  //       {/* Stats Cards */}
  //       <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
  //         {/* GitHub Stats Card */}
  //         <a
  //           href={`https://github.com/${githubUser}`}
  //           target="_blank"
  //           rel="noreferrer"
  //           className="bg-card/80 backdrop-blur-lg border border-primary/20 rounded-xl p-4 border-glow hover:border-primary/40 transition-transform hover:scale-[1.02]"
  //         >
  //           <img
  //             src={`https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=transparent&border_color=6b21a8`}
  //             alt="GitHub stats"
  //             className="w-full h-auto rounded-lg shadow-md"
  //             loading="lazy"
  //             decoding="async"
  //           />
  //         </a>

  //         {/* LeetCode Stats Card */}
  //         <a
  //           href={
  //             leetcodeUser
  //               ? `https://leetcode.com/${leetcodeUser}/`
  //               : "https://leetcode.com/"
  //           }
  //           target="_blank"
  //           rel="noreferrer"
  //           className="bg-card/80 backdrop-blur-lg border border-primary/20 rounded-xl p-4 border-glow hover:border-primary/40 transition-transform hover:scale-[1.02]"
  //         >
  //           <img
  //             src={
  //               leetcodeUser
  //                 ? `https://leetcard.jacoblin.cool/${leetcodeUser}?theme=dark&border=1&radius=10`
  //                 : `https://dummyimage.com/800x400/1f2937/ffffff&text=LeetCode+Card`
  //             }
  //             alt="LeetCode stats"
  //             className="w-full h-auto rounded-lg shadow-md"
  //             loading="lazy"
  //             decoding="async"
  //           />
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // );
};

